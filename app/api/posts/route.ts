import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/posts`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return NextResponse.json({ data });
}
