export interface Clip {
  id: string;
  title: string;
  duration: number;
  platform: "reels" | "tiktok" | "shorts";
  hook: string;
  thumbnailColor: string;
  createdAt: string;
}

export interface ProcessedVideo {
  id: string;
  title: string;
  sourceUrl: string;
  duration: number;
  processedAt: string;
  clips: Clip[];
}

const platformColors = {
  reels: "#E1306C",
  tiktok: "#00f2ea",
  shorts: "#FF0000",
};

export { platformColors };

export const mockVideos: ProcessedVideo[] = [
  {
    id: "vid-001",
    title: "How to Build a SaaS in 2026",
    sourceUrl: "https://youtube.com/watch?v=abc123",
    duration: 1247,
    processedAt: "2026-04-13T14:30:00Z",
    clips: [
      {
        id: "clip-001a",
        title: "The #1 mistake new SaaS founders make",
        duration: 42,
        platform: "reels",
        hook: "Stop building features nobody asked for.",
        thumbnailColor: "#6d28d9",
        createdAt: "2026-04-13T14:32:00Z",
      },
      {
        id: "clip-001b",
        title: "Why I quit my job to build software",
        duration: 58,
        platform: "tiktok",
        hook: "I made $0 for 6 months. Here's what happened next.",
        thumbnailColor: "#4c1d95",
        createdAt: "2026-04-13T14:32:30Z",
      },
      {
        id: "clip-001c",
        title: "3 tools every solo founder needs",
        duration: 34,
        platform: "shorts",
        hook: "These 3 tools saved me 20 hours a week.",
        thumbnailColor: "#5b21b6",
        createdAt: "2026-04-13T14:33:00Z",
      },
      {
        id: "clip-001d",
        title: "How to validate your SaaS idea fast",
        duration: 27,
        platform: "reels",
        hook: "Don't write a single line of code until you do this.",
        thumbnailColor: "#7c3aed",
        createdAt: "2026-04-13T14:33:30Z",
      },
      {
        id: "clip-001e",
        title: "The pricing trick that 10x'd my revenue",
        duration: 45,
        platform: "tiktok",
        hook: "I changed one number and everything changed.",
        thumbnailColor: "#8b5cf6",
        createdAt: "2026-04-13T14:34:00Z",
      },
    ],
  },
  {
    id: "vid-002",
    title: "Master YouTube Shorts Algorithm",
    sourceUrl: "https://youtube.com/watch?v=def456",
    duration: 983,
    processedAt: "2026-04-12T09:15:00Z",
    clips: [
      {
        id: "clip-002a",
        title: "The first 3 seconds decide everything",
        duration: 38,
        platform: "shorts",
        hook: "YouTube gives you 3 seconds. Make them count.",
        thumbnailColor: "#dc2626",
        createdAt: "2026-04-12T09:17:00Z",
      },
      {
        id: "clip-002b",
        title: "Why your shorts get 0 views",
        duration: 52,
        platform: "tiktok",
        hook: "You're making this one critical mistake.",
        thumbnailColor: "#b91c1c",
        createdAt: "2026-04-12T09:17:30Z",
      },
      {
        id: "clip-002c",
        title: "Hook formula that always works",
        duration: 29,
        platform: "reels",
        hook: "Use this template for every single video.",
        thumbnailColor: "#991b1b",
        createdAt: "2026-04-12T09:18:00Z",
      },
      {
        id: "clip-002d",
        title: "Best posting time revealed",
        duration: 19,
        platform: "shorts",
        hook: "I analyzed 10,000 shorts. This is the best time.",
        thumbnailColor: "#7f1d1d",
        createdAt: "2026-04-12T09:18:30Z",
      },
      {
        id: "clip-002e",
        title: "How to go viral with repurposed content",
        duration: 60,
        platform: "tiktok",
        hook: "One video. Three platforms. Millions of views.",
        thumbnailColor: "#ef4444",
        createdAt: "2026-04-12T09:19:00Z",
      },
    ],
  },
  {
    id: "vid-003",
    title: "AI Tools for Content Creators 2026",
    sourceUrl: "https://youtube.com/watch?v=ghi789",
    duration: 1562,
    processedAt: "2026-04-11T18:45:00Z",
    clips: [
      {
        id: "clip-003a",
        title: "This AI writes better hooks than you",
        duration: 44,
        platform: "reels",
        hook: "I replaced my copywriter with an AI. Results inside.",
        thumbnailColor: "#0891b2",
        createdAt: "2026-04-11T18:47:00Z",
      },
      {
        id: "clip-003b",
        title: "Auto-edit your videos with AI",
        duration: 36,
        platform: "shorts",
        hook: "What took 4 hours now takes 4 minutes.",
        thumbnailColor: "#0e7490",
        createdAt: "2026-04-11T18:47:30Z",
      },
      {
        id: "clip-003c",
        title: "5 AI tools I use every single day",
        duration: 55,
        platform: "tiktok",
        hook: "These tools are my unfair advantage.",
        thumbnailColor: "#155e75",
        createdAt: "2026-04-11T18:48:00Z",
      },
      {
        id: "clip-003d",
        title: "Generate thumbnails in 10 seconds",
        duration: 22,
        platform: "reels",
        hook: "Stop spending hours on thumbnails.",
        thumbnailColor: "#164e63",
        createdAt: "2026-04-11T18:48:30Z",
      },
      {
        id: "clip-003e",
        title: "The AI workflow that doubled my output",
        duration: 48,
        platform: "shorts",
        hook: "I post 3x more content now. Here's my system.",
        thumbnailColor: "#06b6d4",
        createdAt: "2026-04-11T18:49:00Z",
      },
    ],
  },
];

export const stats = {
  totalVideos: 3,
  totalClips: 15,
  totalDuration: "63 min",
  platforms: { reels: 5, tiktok: 5, shorts: 5 },
};
