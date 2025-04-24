import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!messages) {
    return NextResponse.json(
      { error: "Messages are required." },
      { status: 400 }
    );
  }

  try {
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GEMINI_AI_API_KEY,
    });

    const result = await streamText({
      model: google("models/gemini-1.5-flash"),
      system: "You are a helpful assistant.",
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
