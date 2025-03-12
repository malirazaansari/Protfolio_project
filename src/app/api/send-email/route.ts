import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { firstName, lastName, email, phone, subject, message } = await req.json() as ContactFormData;

    // Check for required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
      },
    });

    // Log transporter setup for debugging
    console.log('Nodemailer transporter created.');

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Destination email
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone?.trim() || 'Not Provided'}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
