import { NextRequest, NextResponse } from 'next/server';

// In-memory wish storage (reset on server restart)
let wishes: { id: number; title: string; description: string; name?: string }[] = [];

export async function GET() {
  return NextResponse.json(wishes);
}

export async function POST(req: NextRequest) {
  const { title, description, name } = await req.json();
  if (!title || !description) {
    return NextResponse.json({ error: 'Title and description are required.' }, { status: 400 });
  }
  const wish = {
    id: Date.now(),
    title,
    description,
    name,
  };
  wishes.unshift(wish);
  return NextResponse.json(wish, { status: 201 });
} 