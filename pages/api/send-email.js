import emailjs from "@emailjs/nodejs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { user_name, user_email, subject, message } = req.body;

  try {
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        user_name,
        user_email,
        subject,
        message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      }
    );
    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error?.text || "Failed to send email" });
  }
}
