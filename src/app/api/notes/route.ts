import { NextResponse } from "next/server";

let notes: { id: number; content: string }[] = [];

export async function GET() {
  return NextResponse.json(notes);
}

export async function POST(request: Request) {
  const { content } = await request.json();
  const newNote = { id: Date.now(), content };
  notes.push(newNote);
  return NextResponse.json(newNote, { status: 201 });
}