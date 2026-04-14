import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { url } = body as { url?: string };

  if (!url || typeof url !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid 'url' field" },
      { status: 400 },
    );
  }

  const urlPattern = /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+/;
  if (!urlPattern.test(url)) {
    return NextResponse.json(
      { error: "URL must be a valid YouTube link" },
      { status: 400 },
    );
  }

  const videoId = `vid-${Date.now()}`;
  const platforms = ["reels", "tiktok", "shorts"] as const;

  const clips = Array.from({ length: 5 }, (_, i) => ({
    id: `${videoId}-clip-${i + 1}`,
    title: `Generated Clip ${i + 1}`,
    duration: Math.floor(Math.random() * 46) + 15,
    platform: platforms[i % 3],
    hook: [
      "You won't believe what happens next.",
      "This changed everything for me.",
      "Stop scrolling — watch this.",
      "Nobody talks about this trick.",
      "Here's what they don't tell you.",
    ][i],
    thumbnailColor: ["#6d28d9", "#dc2626", "#0891b2", "#059669", "#d97706"][i],
    createdAt: new Date().toISOString(),
  }));

  return NextResponse.json({
    id: videoId,
    title: "Processed Video",
    sourceUrl: url,
    duration: 600 + Math.floor(Math.random() * 900),
    processedAt: new Date().toISOString(),
    clips,
  });
}
