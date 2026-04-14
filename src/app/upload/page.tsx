"use client";

import { useState } from "react";
import ClipCard from "@/components/ClipCard";
import type { Clip } from "@/lib/mock-data";

type Status = "idle" | "loading" | "done" | "error";

interface ProcessResult {
  id: string;
  title: string;
  clips: Clip[];
}

export default function UploadPage() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<ProcessResult | null>(null);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus("loading");
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Processing failed");
      }

      const data = await res.json();
      setResult(data);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Upload</h1>
        <p className="mt-1 text-sm text-[var(--color-muted)]">
          Paste a YouTube URL or drop a video file to generate clips
        </p>
      </div>

      {/* URL Input */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] outline-none transition-colors focus:border-[var(--color-accent)]"
          />
          <button
            type="submit"
            disabled={status === "loading" || !url.trim()}
            className="rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Processing..." : "Process"}
          </button>
        </div>
      </form>

      {/* Drag-drop zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
        }}
        className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-12 transition-colors ${
          dragOver
            ? "border-[var(--color-accent)] bg-[rgba(139,92,246,0.06)]"
            : "border-[var(--color-border)] bg-[var(--color-surface)]"
        }`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--color-muted)]"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <p className="text-sm text-[var(--color-muted)]">
          Drag and drop a video file here
        </p>
        <p className="text-[12px] text-[var(--color-muted)] opacity-60">
          MP4, MOV, WebM up to 500 MB
        </p>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="rounded-lg border border-[var(--color-danger)]/30 bg-[var(--color-danger)]/5 px-4 py-3 text-sm text-[var(--color-danger)]">
          {error}
        </div>
      )}

      {/* Loading */}
      {status === "loading" && (
        <div className="flex flex-col items-center gap-3 py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" />
          <p className="text-sm text-[var(--color-muted)]">
            Analyzing video and generating clips...
          </p>
        </div>
      )}

      {/* Results */}
      {status === "done" && result && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                {result.clips.length} Clips Generated
              </h2>
              <p className="text-[13px] text-[var(--color-muted)]">
                From: {result.title}
              </p>
            </div>
            <span className="rounded-full bg-[var(--color-success)]/10 px-3 py-1 text-[12px] font-semibold text-[var(--color-success)]">
              Complete
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {result.clips.map((clip) => (
              <ClipCard key={clip.id} clip={clip} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
