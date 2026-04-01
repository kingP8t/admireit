import { NextResponse } from "next/server";
import { z } from "zod";
import { sendMailWithRetry } from "@/lib/mail";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

// Simple in-memory rate limiter (per-IP, 5 requests per minute)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    const emailTo = process.env.CONTACT_EMAIL || "hello@admireit.co";

    // If Gmail credentials are not set, log and return success for development
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log("Contact form submission (Gmail not configured):", data);
      return NextResponse.json(
        { message: "Message received (dev mode)" },
        { status: 200 }
      );
    }

    await sendMailWithRetry({
      from: `"AdmireTech" <${process.env.GMAIL_USER}>`,
      to: emailTo,
      replyTo: data.email,
      subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        ${data.service ? `<p><strong>Service Interest:</strong> ${data.service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);

    // Return user-friendly message (don't expose internal error details)
    const message =
      error instanceof Error && error.message.includes("authentication")
        ? "Email service is temporarily unavailable. Please try WhatsApp or email us directly at hello@admireit.co."
        : "Failed to send message. Please try again or contact us via WhatsApp.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
