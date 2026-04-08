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

  const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

  try {
    await client.sendEmail({
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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Postmark error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
