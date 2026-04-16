import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Clipping Vault — Turn Long Videos Into Growth Assets",
  description: "Upload a video or drop a YouTube link. Get back a vault of ready-to-post clips — captioned, formatted, and built for every platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} style={{ height: '100%' }}>
      <body style={{ minHeight: '100%', background: 'var(--bg)', color: 'var(--text)' }}>
        {children}
      </body>
    </html>
  );
}
