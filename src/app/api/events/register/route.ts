import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');

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

    // 2. Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Events <onboarding@resend.dev>', // Should be verified domain in production e.g. events@talentcentre.co.za
        to: ['events@talentcentre.co.za'],
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
      await resend.emails.send({
        from: 'Talent Centre <onboarding@resend.dev>', // Update to verified domain in production
        to: [email],
        subject: `Registration Confirmed: ${eventName}`,
        html: `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
            <h2>Registration Successful!</h2>
            <p>Dear ${fullName},</p>
            <p>Thank you for registering for <strong>${eventName}</strong>.</p>
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
