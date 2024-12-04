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
        const { input1, input2, input3 } = req.body;

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // Mailtrap's SMTP host
            port: parseInt(process.env.EMAIL_PORT || '2525', 10), // Mailtrap's SMTP port
            auth: {
                user: process.env.EMAIL_USER, // Mailtrap username
                pass: process.env.EMAIL_PASS, // Mailtrap password
            },
        });

        // Email content
        const mailOptions = {
            from: `"EduWedo" <${process.env.EMAIL_USER}>`, // Sender address
            to: 'test@example.com', 
            subject: 'New Contact Us Message',
            text: `
                Name: ${input1}
                Email: ${input2}
                Message: ${input3}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

