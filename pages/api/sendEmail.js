import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

      // Create a nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Configure your email service (e.g., Gmail, SMTP)
        // Example for using Gmail:
        service: "Gmail",
        auth: {
          user: "villokodehode@gmail.com",
          pass: "mysr vrrp zgbp sdcs",
        },
      });

      // Email content
      const mailOptions = {
        from: email,
        to: "villokodehode@gmail.com",
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
