import Link from "next/link";
import ClipCard from "@/components/ClipCard";
import { mockVideos, stats } from "@/lib/mock-data";

const statCards = [
  { label: "Videos Processed", value: stats.totalVideos, color: "var(--color-accent)" },
  { label: "Clips Generated", value: stats.totalClips, color: "var(--color-success)" },
  { label: "Total Duration", value: stats.totalDuration, color: "var(--color-warning)" },
  { label: "Platforms", value: Object.keys(stats.platforms).length, color: "#06b6d4" },
];

export default function DashboardPage() {
  const recentClips = mockVideos.flatMap((v) => v.clips).slice(0, 6);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Overview of your clipping activity
          </p>
        </div>
        <Link
          href="/upload"
          className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
        >
          + New Upload
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {statCards.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <p className="text-[12px] font-medium text-[var(--color-muted)]">
              {s.label}
            </p>
            <p
              className="mt-1 text-2xl font-bold tabular-nums"
              style={{ color: s.color }}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Videos */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Videos</h2>
          <Link
            href="/vault"
            className="text-[13px] text-[var(--color-accent)] hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {mockVideos.map((video) => (
            <div
              key={video.id}
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-border-hover)]"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-[14px] font-semibold">{video.title}</span>
                <span className="text-[12px] text-[var(--color-muted)]">
                  {video.clips.length} clips &middot;{" "}
                  {new Date(video.processedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex gap-1">
                {[...new Set(video.clips.map((c) => c.platform))].map((p) => (
                  <span
                    key={p}
                    className="rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90"
                    style={{
                      background:
                        p === "reels"
                          ? "#E1306C"
                          : p === "tiktok"
                            ? "#00f2ea"
                            : "#FF0000",
                      color: p === "tiktok" ? "#000" : undefined,
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Clips */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Latest Clips</h2>
          <Link
            href="/vault"
            className="text-[13px] text-[var(--color-accent)] hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {recentClips.map((clip) => (
            <ClipCard key={clip.id} clip={clip} />
          ))}
        </div>
      </div>
    </div>
  );
}
