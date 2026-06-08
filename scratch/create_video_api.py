import os

os.makedirs('src/app/api/video-blogs/[slug]', exist_ok=True)

route_ts = """import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

export async function GET() {
  if (!prisma) return NextResponse.json({ videoBlogs: [] });
  try {
    const videoBlogs = await prisma.videoBlog.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ videoBlogs });
  } catch (error) {
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
"""

with open('src/app/api/video-blogs/route.ts', 'w') as f:
    f.write(route_ts)

slug_route_ts = """import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = process.env.DATABASE_URL ? new PrismaClient() : null;

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!prisma) return NextResponse.json({ error: 'DB not configured' }, { status: 500 });
  try {
    const slug = (await params).slug;
    const videoBlog = await prisma.videoBlog.findUnique({ where: { slug } });
    if (!videoBlog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(videoBlog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!prisma) return NextResponse.json({ error: 'DB not configured' }, { status: 500 });
  try {
    const slug = (await params).slug;
    const body = await req.json();
    const videoBlog = await prisma.videoBlog.update({
      where: { slug },
      data: body,
    });
    return NextResponse.json(videoBlog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  if (!prisma) return NextResponse.json({ error: 'DB not configured' }, { status: 500 });
  try {
    const slug = (await params).slug;
    await prisma.videoBlog.delete({ where: { slug } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
"""

with open('src/app/api/video-blogs/[slug]/route.ts', 'w') as f:
    f.write(slug_route_ts)

print("Created video blog APIs")
