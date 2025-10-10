import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const channelId = "UCdUZ-r43I-y94XSQguz7ZFA";

    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const subscriberCount = data.items?.[0]?.statistics?.subscriberCount || "0";

        return NextResponse.json({ subscriberCount: Number(subscriberCount) });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao buscar inscritos" }, { status: 500 });
    }
}