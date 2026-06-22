const postmark = require("postmark");

// HTML-escape user input before interpolating into the email HtmlBody.
const esc = (s) =>
  String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const hasCRLF = (s) => /[\r\n]/.test(String(s || ""));

module.exports = async function handler(req, res) {
  // CORS: only reflect an allow-listed origin. Same-origin requests (the site's
  // own forms post to a relative /api/contact) need no ACAO header, so leaving
  // ALLOWED_ORIGIN unset is safe and does not break the forms.
  const allowed = (process.env.ALLOWED_ORIGIN || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const origin = req.headers.origin;
  if (allowed.length && origin && allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message, pillar, company_website } = req.body || {};

  // Honeypot: real users never fill this hidden field. Silently accept (so bots
  // get a 200) but do not send the email.
  if (company_website) {
    return res.status(200).json({ success: true });
  }

  // Validation: presence, email format, length bounds, header-injection guard.
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }
  if (hasCRLF(name) || hasCRLF(email) || hasCRLF(phone)) {
    return res.status(400).json({ error: "Invalid input" });
  }
  if (
    String(name).length > 100 ||
    String(email).length > 150 ||
    String(phone || "").length > 40 ||
    String(pillar || "").length > 60 ||
    String(message).length > 5000
  ) {
    return res.status(400).json({ error: "Input too long" });
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
<p><strong>Pillar:</strong> ${esc(pillarLabel)}</p>
<p><strong>Name:</strong> ${esc(name)}</p>
<p><strong>Email:</strong> ${esc(email)}</p>
<p><strong>Phone:</strong> ${esc(phone || "Not provided")}</p>
<hr>
<p><strong>Message:</strong></p>
<p>${esc(message).replace(/\n/g, "<br>")}</p>
      `.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Postmark error:", error && error.message ? error.message : error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
