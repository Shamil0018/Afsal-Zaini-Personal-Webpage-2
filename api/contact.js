const { getClient } = require('./_mongodbClient');
const sgMail = require('@sendgrid/mail');

const MONGODB_URI = process.env.MONGODB_URI;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;

if (SENDGRID_API_KEY) sgMail.setApiKey(SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    // const { name, email, message } = req.body;
    const { name, email, phone, subject, message } = req.body;

    if (!email || !message)
      return res.status(400).json({ error: "Email and message required" });

    const doc = {
      name: (name || "").trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date()
    };

    const client = await getClient(MONGODB_URI);
    const col = client.db().collection("contacts");
    await col.insertOne(doc);

    if (SENDGRID_API_KEY) {
      await sgMail.send({
        to: NOTIFY_EMAIL,
        from: FROM_EMAIL,
        subject: "New Contact Message",
        html: `
          <div>
            <p><strong>Name:</strong> ${doc.name}</p>
            <p><strong>Email:</strong> ${doc.email}</p>
            <p><strong>Message:</strong><br/>${doc.message}</p>
          </div>
        `,
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};
