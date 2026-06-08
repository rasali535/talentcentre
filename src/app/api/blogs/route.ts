import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

export async function GET() {
  if (!prisma) return NextResponse.json({ blogs: [] });
  try {
    const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!prisma) return NextResponse.json({ error: 'DB not configured' }, { status: 500 });
  try {
    const body = await req.json();
    const blog = await prisma.blog.create({ data: body });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
