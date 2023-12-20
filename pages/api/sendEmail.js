import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

const secretPassword = process.env.NEXT_PUBLIC_MY_EMAIL_PASSWORD
const secretEmail = process.env.NEXT_PUBLIC_MY_EMAIL

      // Create a nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Configure your email service (e.g., Gmail, SMTP)
        // Example for using Gmail:
        service: "Gmail",
        auth: {
          user: secretEmail,
          pass: secretPassword,
        },
      });

      // Email content
      const mailOptions = {
        from: email,
        to: secretEmail,
        subject: "Project inquiry",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };


    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
