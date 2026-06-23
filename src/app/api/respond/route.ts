import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    const { to, subject, message } = data;

    if (!to || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!process.env.SMTP_PASS && !process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'SMTP credentials not configured' }, { status: 500 });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'Talent Centre <onboarding@resend.dev>', // Update to verified domain in production
      to,
      subject,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
          <p>${message.replace(/\n/g, '<br/>')}</p>
          <br/><br/>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;"><strong>Talent Centre</strong><br/>Strategic Consultancy for Sustainable Business Growth</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Response error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
