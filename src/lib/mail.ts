import nodemailer from "nodemailer";

const GMAIL_DAILY_LIMIT = 500;
const SEND_TIMEOUT_MS = 10_000; // 10 seconds

/**
 * Create Gmail SMTP transporter with connection pooling and timeout.
 * Falls back gracefully if credentials are missing.
 */
export function createTransporter() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    pool: true,
    maxConnections: 3,
    maxMessages: GMAIL_DAILY_LIMIT,
    connectionTimeout: SEND_TIMEOUT_MS,
    greetingTimeout: SEND_TIMEOUT_MS,
    socketTimeout: SEND_TIMEOUT_MS,
  });
}

/**
 * Send email with retry logic (1 retry after 2s delay).
 * Throws with a descriptive message on final failure.
 */
export async function sendMailWithRetry(
  mailOptions: nodemailer.SendMailOptions,
  maxRetries = 1
): Promise<void> {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn(
      "[mail] Gmail credentials not configured — email not sent. Set GMAIL_USER and GMAIL_APP_PASSWORD."
    );
    return;
  }

  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      await transporter.sendMail(mailOptions);
      return; // success
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));

      const isRateLimit =
        lastError.message.includes("too many") ||
        lastError.message.includes("rate") ||
        lastError.message.includes("421") ||
        lastError.message.includes("454");
      const isAuthError =
        lastError.message.includes("535") ||
        lastError.message.includes("Invalid login") ||
        lastError.message.includes("AUTH");
      const isTimeout =
        lastError.message.includes("ETIMEDOUT") ||
        lastError.message.includes("ESOCKET") ||
        lastError.message.includes("timeout");

      // Don't retry auth errors — they won't self-resolve
      if (isAuthError) {
        console.error(
          "[mail] Gmail authentication failed. Check GMAIL_USER and GMAIL_APP_PASSWORD (must be an App Password, not your account password)."
        );
        break;
      }

      // Log specific failure type
      if (isRateLimit) {
        console.warn(
          `[mail] Gmail rate limit hit (attempt ${attempt + 1}/${maxRetries + 1}). Gmail allows ~500 emails/day.`
        );
      } else if (isTimeout) {
        console.warn(
          `[mail] Gmail connection timed out (attempt ${attempt + 1}/${maxRetries + 1}).`
        );
      } else {
        console.warn(
          `[mail] Send failed (attempt ${attempt + 1}/${maxRetries + 1}):`,
          lastError.message
        );
      }

      // Wait before retrying (only if not the last attempt)
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  }

  throw lastError || new Error("Failed to send email");
}
