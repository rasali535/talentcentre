import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

export async function GET() {
  if (!prisma) return NextResponse.json({ videoBlogs: [] });
  try {
    const videoBlogs = await prisma.videoBlog.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ videoBlogs });
  } catch (error) {
    console.error('[GET /api/video-blogs] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch video blogs' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!prisma) return NextResponse.json({ error: 'DB not configured' }, { status: 500 });
  try {
    const body = await req.json();
    const videoBlog = await prisma.videoBlog.create({ data: body });
    return NextResponse.json(videoBlog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create video blog' }, { status: 500 });
  }
}
