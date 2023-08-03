import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const res = await fetch(`${process.env.API_URL}/posts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
