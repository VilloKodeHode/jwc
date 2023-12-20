import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
const myEmail = process.env.NEXT_PUBLIC_EMAIL;
const myPassword = process.env.NEXT_PUBLIC_PASSWORD;

console.log("name:", name);
console.log("email:", email);
console.log("message:", message);

console.log("Using credentials:");
console.log("Email:", myEmail);
console.log("Password:", myPassword);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service (e.g., Gmail, SMTP)
      // Example for using Gmail:
      service: "gmail",
      auth: {
        user: "villokodehode@gmail.com",
        pass: "mysr vrrp zgbp sdcs",
      },
    });

    // Email content
    const mailOptions = {
      from: `villokodehode@gmail.com`,
      to: "villokodehode@gmail.com",
      subject: "Project inquiry",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}