import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)]">
          <span className="text-xl font-bold text-white">CV</span>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Clipping Vault
          </h1>
          <p className="max-w-md text-base text-[var(--color-foreground-secondary)]">
            Turn long-form videos into viral short-form clips for Reels, TikTok,
            and Shorts — powered by AI.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/dashboard"
            className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/upload"
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-foreground-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-foreground)]"
          >
            Upload Video
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-6 text-[12px] text-[var(--color-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
            All systems online
          </span>
          <span>v1.0.0</span>
        </div>
      </div>
    </div>
  );
}
