import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

export async function GET() {
  if (!prisma) return NextResponse.json({ registrations: [] });
  try {
    const registrations = await prisma.eventRegistration.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ registrations });
  } catch (error) {
    console.error('[GET /api/events] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch event registrations' }, { status: 500 });
  }
}
