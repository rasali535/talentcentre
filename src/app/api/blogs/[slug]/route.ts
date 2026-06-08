import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!prisma) return NextResponse.json({ error: 'DB not configured' }, { status: 500 });
  try {
    const slug = (await params).slug;
    const blog = await prisma.blog.findUnique({ where: { slug } });
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!prisma) return NextResponse.json({ error: 'DB not configured' }, { status: 500 });
  try {
    const slug = (await params).slug;
    const body = await req.json();
    const blog = await prisma.blog.update({
      where: { slug },
      data: body,
    });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!prisma) return NextResponse.json({ error: 'DB not configured' }, { status: 500 });
  try {
    const slug = (await params).slug;
    await prisma.blog.delete({ where: { slug } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
