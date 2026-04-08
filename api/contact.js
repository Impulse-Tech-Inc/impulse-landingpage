const postmark = require("postmark");

module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message, pillar } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const pillarLabel = pillar || "General";

  console.log("[contact] Request received:", { name, email, pillar: pillarLabel });
  console.log("[contact] ENV check:", {
    hasToken: !!process.env.POSTMARK_SERVER_TOKEN,
    fromEmail: process.env.POSTMARK_FROM_EMAIL || "NOT SET",
    toEmail: process.env.POSTMARK_TO_EMAIL || "NOT SET"
  });

  const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

  try {
    const result = await client.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL,
      To: process.env.POSTMARK_TO_EMAIL,
      ReplyTo: email,
      Subject: `[${pillarLabel}] New Contact Form Submission from ${name}`,
      TextBody: `
Pillar: ${pillarLabel}
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `.trim(),
      HtmlBody: `
<h2>New Contact Form Submission</h2>
<p><strong>Pillar:</strong> ${pillarLabel}</p>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || "Not provided"}</p>
<hr>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `.trim(),
    });

    console.log("[contact] Postmark response:", result);
    return res.status(200).json({ success: true, messageId: result.MessageID });
  } catch (error) {
    console.error("[contact] Postmark error:", JSON.stringify(error, null, 2));
    return res.status(500).json({ error: "Failed to send email", detail: error.message || error });
  }
};
