"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutIcon },
  { href: "/upload", label: "Upload", icon: UploadIcon },
  { href: "/vault", label: "Vault", icon: VaultIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 md:hidden">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-accent)]">
            <span className="text-xs font-bold text-white">CV</span>
          </div>
          <span className="text-sm font-semibold">Clipping Vault</span>
        </Link>
        <div className="flex gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg p-2 transition-colors ${
                  active
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                }`}
              >
                <item.icon />
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 z-50 hidden w-[240px] flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] md:flex">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)]">
            <span className="text-xs font-bold text-white">CV</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight">
            Clipping Vault
          </span>
        </div>

        <div className="mt-2 flex flex-1 flex-col gap-0.5 px-3">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "bg-[rgba(139,92,246,0.12)] text-[var(--color-accent)]"
                    : "text-[var(--color-foreground-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-foreground)]"
                }`}
              >
                <item.icon />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="border-t border-[var(--color-border)] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-hover)] text-[11px] font-semibold text-[var(--color-foreground-secondary)]">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-medium leading-tight">
                Maxton
              </span>
              <span className="text-[11px] text-[var(--color-muted)]">Pro</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function LayoutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="12" height="12" rx="2" />
      <path d="M2 6h12M6 6v8" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 10V3M5 5.5 8 3l3 2.5" />
      <path d="M3 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2" />
    </svg>
  );
}

function VaultIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="12" height="10" rx="1.5" />
      <path d="M2 6h12M5 9.5h6" />
    </svg>
  );
}
