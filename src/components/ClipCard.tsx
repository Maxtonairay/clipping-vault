import type { Clip } from "@/lib/mock-data";
import { platformColors } from "@/lib/mock-data";

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const platformLabels: Record<Clip["platform"], string> = {
  reels: "Reels",
  tiktok: "TikTok",
  shorts: "Shorts",
};

export default function ClipCard({ clip }: { clip: Clip }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:border-[var(--color-border-hover)] hover:shadow-[0_0_0_1px_rgba(139,92,246,0.1)]">
      {/* Thumbnail placeholder */}
      <div
        className="relative flex aspect-[9/16] max-h-[200px] items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${clip.thumbnailColor}33, ${clip.thumbnailColor}11)` }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[var(--color-muted)] opacity-40 transition-opacity group-hover:opacity-60"
        >
          <polygon points="5,3 19,12 5,21" fill="currentColor" />
        </svg>

        <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-1.5 py-0.5 text-[11px] font-medium tabular-nums text-white/90">
          {formatDuration(clip.duration)}
        </span>

        <span
          className="absolute top-2 left-2 rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white"
          style={{ background: platformColors[clip.platform] }}
        >
          {platformLabels[clip.platform]}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="text-[13px] font-semibold leading-snug text-[var(--color-foreground)]">
          {clip.title}
        </h3>
        <p className="line-clamp-2 text-[12px] leading-relaxed text-[var(--color-muted)]">
          &ldquo;{clip.hook}&rdquo;
        </p>
      </div>
    </div>
  );
}
