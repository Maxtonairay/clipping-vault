"use client";

import { useState } from "react";
import ClipCard from "@/components/ClipCard";
import { mockVideos } from "@/lib/mock-data";
import type { Clip } from "@/lib/mock-data";

type PlatformFilter = "all" | Clip["platform"];

export default function VaultPage() {
  const [filter, setFilter] = useState<PlatformFilter>("all");
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  const filters: { value: PlatformFilter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "reels", label: "Reels" },
    { value: "tiktok", label: "TikTok" },
    { value: "shorts", label: "Shorts" },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Vault</h1>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            All your processed videos and clips
          </p>
        </div>
        <div className="flex gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-md px-3 py-1.5 text-[12px] font-medium transition-colors ${
                filter === f.value
                  ? "bg-[var(--color-accent)] text-white"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {mockVideos.map((video) => {
        const filteredClips =
          filter === "all"
            ? video.clips
            : video.clips.filter((c) => c.platform === filter);

        if (filteredClips.length === 0) return null;

        const isExpanded = expandedVideo === video.id;

        return (
          <div key={video.id} className="flex flex-col gap-4">
            <button
              onClick={() =>
                setExpandedVideo(isExpanded ? null : video.id)
              }
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-left transition-colors hover:border-[var(--color-border-hover)]"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold">
                  {video.title}
                </span>
                <span className="text-[12px] text-[var(--color-muted)]">
                  {filteredClips.length} clip{filteredClips.length !== 1 && "s"}{" "}
                  &middot;{" "}
                  {new Date(video.processedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-[var(--color-muted)] transition-transform ${isExpanded ? "rotate-180" : ""}`}
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {isExpanded && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {filteredClips.map((clip) => (
                  <ClipCard key={clip.id} clip={clip} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
