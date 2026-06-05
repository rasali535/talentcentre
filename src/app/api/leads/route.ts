import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  inquiryType: z.enum(['consultation', 'inquiry', 'partnership']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  source: z.string().default('website'),
});

// In-memory store for development (replace with Prisma when DB is connected)
const leads: Array<z.infer<typeof leadSchema> & { id: string; status: string; createdAt: string }> = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = leadSchema.parse(body);

    // Store lead (in-memory for now, Prisma when DB connected)
    const lead = {
      id: `lead_${Date.now()}`,
      ...validatedData,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    // Log for development
    console.log('📋 New lead captured:', lead);

    // Send email notification (mock mode)
    try {
      const { sendEmail, buildLeadNotificationEmail } = await import('@/lib/email');
      await sendEmail({
        to: process.env.NOTIFICATION_EMAIL || 'info@talentcentre.co.za',
        subject: `New ${validatedData.inquiryType} inquiry from ${validatedData.fullName}`,
        html: buildLeadNotificationEmail(validatedData),
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. Our team will contact you within 24 hours.',
      leadId: lead.id,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // Simple auth check for admin
  const authHeader = req.headers.get('authorization');
  if (!authHeader || authHeader !== `Bearer ${process.env.JWT_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ leads, total: leads.length });
}
