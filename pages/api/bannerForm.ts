import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const { name, number, email, collegeName } = req.body;

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // Mailtrap or other SMTP host
            port: parseInt(process.env.EMAIL_PORT || '2525', 10), // SMTP port
            auth: {
                user: process.env.EMAIL_USER, // SMTP username
                pass: process.env.EMAIL_PASS, // SMTP password
            },
        });

        // Email content
        const mailOptions = {
            from: `"EduWedo" <${process.env.EMAIL_USER}>`, // Sender address
            to: 'test@example.com', // Replace with recipient email
            subject: 'New Banner Form Submission',
            text: `
                Name: ${name}
                Phone Number: ${number}
                Email: ${email}
                College Name: ${collegeName}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Form submitted successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to submit the form.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
