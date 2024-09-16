import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

const secretPassword = process.env.NEXT_PUBLIC_MY_EMAIL_PASSWORD
const secretEmail = process.env.NEXT_PUBLIC_MY_EMAIL

      // Create a nodemailer transporter
      const transporter = nodemailer.createTransport({
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

// cron.schedule("0 0 * * 0", async () => {
//   try {
//     const secretPassword = process.env.NEXT_PUBLIC_MY_EMAIL_PASSWORD;
//     const secretEmail = process.env.NEXT_PUBLIC_MY_EMAIL;

//     // Create a nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: secretEmail,
//         pass: secretPassword,
//       },
//     });

//     // Email content for weekly confirmation
//     const isEmailSystemWorking = true; // Replace with your logic to check if the email system is working
//     const confirmationText = isEmailSystemWorking ? "Email system is working!" : "Error in email system!";

//     const mailOptions = {
//       from: secretEmail,
//       to: secretEmail, // Sending confirmation email to the same email address for testing purposes
//       subject: "Weekly Confirmation",
//       text: confirmationText,
//     };

//     // Send the confirmation email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Weekly confirmation email sent:", info.response);
//   } catch (error) {
//     console.error("Scheduled email error:", error);
//   }
// });
