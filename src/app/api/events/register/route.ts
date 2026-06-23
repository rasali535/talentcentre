import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.resend.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'resend',
    pass: process.env.SMTP_PASS || process.env.RESEND_API_KEY,
  },
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, email, phone, company, eventName, eventType } = data;

    if (!fullName || !email || !eventName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Save to Database
    const registration = await prisma.eventRegistration.create({
      data: {
        fullName,
        email,
        phone,
        company,
        eventName,
        eventType,
      },
    });

    // 2. Send email notification via Nodemailer
    if (process.env.SMTP_PASS || process.env.RESEND_API_KEY) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'Events <onboarding@resend.dev>', // Should be verified domain in production e.g. events@talentcentre.co.za
        to: 'events@talentcentre.co.za',
        subject: `New Registration: ${eventName}`,
        html: `
          <h2>New Event Registration</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Event:</strong> ${eventName}</p>
          <p><strong>Type:</strong> ${eventType || 'N/A'}</p>
        `,
      });

      // Send automated confirmation to the user
      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'Talent Centre <onboarding@resend.dev>', // Update to verified domain in production
        to: email,
        subject: `Registration Confirmed: ${eventName}`,
        html: `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
            <h2>Registration Successful!</h2>
            <p>Dear ${fullName},</p>
            <p>Thank you for registering for <strong>${eventName}</strong>.</p>
            <p>To finalize your booking, please make a payment using one of the following options:</p>
            <ul style="list-style-type: none; padding: 0;">
              <li><strong>Pay2cell:</strong> 75618647</li>
              <li><strong>Orange Money:</strong> 78729907</li>
              <li>
                <strong>Bank Transfer:</strong><br/>
                Account Name: Talent Centre Pty Ltd.<br/>
                Bank: FNB Bank<br/>
                Branch: Kgale Branch 284567<br/>
                Account: 62338861364
              </li>
            </ul>
            <p><strong>Reference:</strong> Full names</p>
            <p>We have successfully received your details and our team will be in touch with you shortly regarding the next steps and event details.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>The Talent Centre Team</strong></p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, registration }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
