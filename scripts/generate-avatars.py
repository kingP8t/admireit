"""
Generate professional team avatar images with blue gradient circles and initials.
Similar style to AI-illustrated portraits with circular backgrounds.
"""

from PIL import Image, ImageDraw, ImageFont
import os
import math

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "team")
os.makedirs(OUTPUT_DIR, exist_ok=True)

SIZE = 400  # px, will be displayed at 96px but crisp on retina

team = [
    {"name": "Peter King", "slug": "peter-king", "hue": 210},
    {"name": "Rafa Zalewski", "slug": "rafa-zalewski", "hue": 200},
    {"name": "Tokunbo Ajayi", "slug": "tokunbo-ajayi", "hue": 215},
    {"name": "Aryan Saini", "slug": "aryan-saini", "hue": 195},
    {"name": "Mohammed Ashhar", "slug": "mohammed-ashhar", "hue": 220},
    {"name": "Khiem Huynh", "slug": "khiem-huynh", "hue": 205},
    {"name": "Niel Nabal", "slug": "niel-nabal", "hue": 210},
    {"name": "Hanzla Farooq", "slug": "hanzla-farooq", "hue": 200},
    {"name": "Kgomotso Senanya", "slug": "kgomotso-senanya", "hue": 225},
    {"name": "Tamara Burnett", "slug": "tamara-burnett", "hue": 190},
    {"name": "Wasiu Quadri", "slug": "wasiu-quadri", "hue": 215},
    {"name": "Omena Opute", "slug": "omena-opute", "hue": 208},
    {"name": "Abel Kayode", "slug": "abel-kayode", "hue": 212},
]


def hsl_to_rgb(h, s, l):
    """Convert HSL to RGB (h: 0-360, s: 0-1, l: 0-1)"""
    h = h / 360.0
    if s == 0:
        r = g = b = l
    else:
        def hue_to_rgb(p, q, t):
            if t < 0: t += 1
            if t > 1: t -= 1
            if t < 1/6: return p + (q - p) * 6 * t
            if t < 1/2: return q
            if t < 2/3: return p + (q - p) * (2/3 - t) * 6
            return p
        q = l * (1 + s) if l < 0.5 else l + s - l * s
        p = 2 * l - q
        r = hue_to_rgb(p, q, h + 1/3)
        g = hue_to_rgb(p, q, h)
        b = hue_to_rgb(p, q, h - 1/3)
    return (int(r * 255), int(g * 255), int(b * 255))


def create_avatar(member):
    """Create a professional avatar with gradient circle background and initials."""
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    hue = member["hue"]

    # Draw gradient circle background (radial-ish using concentric circles)
    center = SIZE // 2
    radius = SIZE // 2 - 4

    for r in range(radius, 0, -1):
        # Gradient from lighter edge to slightly darker center
        progress = 1 - (r / radius)
        lightness = 0.78 - (progress * 0.12)  # 0.78 -> 0.66 (light blue range)
        saturation = 0.55 + (progress * 0.15)
        color = hsl_to_rgb(hue, saturation, lightness)
        draw.ellipse(
            [center - r, center - r, center + r, center + r],
            fill=color + (255,)
        )

    # Add a subtle lighter inner glow
    glow_radius = int(radius * 0.7)
    for r in range(glow_radius, int(glow_radius * 0.3), -1):
        progress = (r - glow_radius * 0.3) / (glow_radius * 0.7)
        alpha = int(30 * (1 - progress))
        draw.ellipse(
            [center - r, center - r - int(radius * 0.1), center + r, center + r - int(radius * 0.1)],
            fill=(255, 255, 255, alpha)
        )

    # Draw initials
    initials = "".join(w[0].upper() for w in member["name"].split())

    # Try to use a nice font, fall back to default
    font_size = SIZE // 3
    try:
        # Try common system fonts
        for font_name in ["segoeui.ttf", "Segoe UI Bold", "arial.ttf", "Arial Bold", "DejaVuSans-Bold.ttf"]:
            try:
                font = ImageFont.truetype(font_name, font_size)
                break
            except (OSError, IOError):
                continue
        else:
            font = ImageFont.load_default()
    except Exception:
        font = ImageFont.load_default()

    # Center the text
    bbox = draw.textbbox((0, 0), initials, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    text_x = (SIZE - text_w) // 2
    text_y = (SIZE - text_h) // 2 - bbox[1]

    # Draw text shadow for depth
    draw.text((text_x + 2, text_y + 2), initials, fill=(0, 0, 0, 40), font=font)
    # Draw white initials
    draw.text((text_x, text_y), initials, fill=(255, 255, 255, 230), font=font)

    # Add subtle ring border
    ring_color = hsl_to_rgb(hue, 0.4, 0.88)
    draw.ellipse(
        [center - radius, center - radius, center + radius, center + radius],
        outline=ring_color + (100,),
        width=3,
    )

    # Save as WebP
    output_path = os.path.join(OUTPUT_DIR, f"{member['slug']}.webp")
    img.save(output_path, "WEBP", quality=90)
    print(f"  OK: {output_path}")


if __name__ == "__main__":
    print("Generating team avatars...")
    for m in team:
        create_avatar(m)
    print(f"\nDone! {len(team)} avatars saved to {OUTPUT_DIR}")
