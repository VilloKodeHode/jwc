// pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Your form submission logic here
        // Handle the data and send a response

        res.status(200).json({ success: true });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}