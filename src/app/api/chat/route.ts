import { NextRequest, NextResponse } from 'next/server';
import { getMockResponse, SYSTEM_PROMPT } from '@/lib/chatbot-prompt';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Check if OpenAI API key is configured
    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      // Production mode: Use OpenAI
      try {
        const messages = [
          { role: 'system' as const, content: SYSTEM_PROMPT },
          ...(history || []).slice(-10),
          { role: 'user' as const, content: message },
        ];

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages,
            max_tokens: 500,
            temperature: 0.7,
          }),
        });

        const data = await response.json();

        if (data.choices?.[0]?.message?.content) {
          return NextResponse.json({
            response: data.choices[0].message.content,
            mode: 'ai',
          });
        }

        // Fallback to mock if API response is unexpected
        return NextResponse.json({
          response: getMockResponse(message),
          mode: 'mock',
        });
      } catch {
        // If OpenAI fails, fall back to mock
        return NextResponse.json({
          response: getMockResponse(message),
          mode: 'mock',
        });
      }
    }

    // Mock mode: Use pattern matching
    const response = getMockResponse(message);
    return NextResponse.json({ response, mode: 'mock' });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
