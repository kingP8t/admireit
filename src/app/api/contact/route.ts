import { NextResponse } from "next/server";
import { z } from "zod";
import { postmark } from "@/lib/postmark";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const emailTo = process.env.CONTACT_EMAIL_TO || "hello@admireit.co";
    const emailFrom = process.env.POSTMARK_FROM_EMAIL || "hello@admireit.co";

    // If Postmark token is not set, log and return success for development
    if (!process.env.POSTMARK_SERVER_TOKEN) {
      console.log("Contact form submission (POSTMARK_SERVER_TOKEN not set):", data);
      return NextResponse.json(
        { message: "Message received (dev mode)" },
        { status: 200 }
      );
    }

    await postmark.sendEmail({
      From: emailFrom,
      To: emailTo,
      Subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      HtmlBody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        ${data.service ? `<p><strong>Service Interest:</strong> ${data.service}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
      ReplyTo: data.email,
      MessageStream: "outbound",
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
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
