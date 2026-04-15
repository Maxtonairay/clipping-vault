'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '0 2rem', height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(9,9,11,0.9)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="28" height="28" viewBox="0 0 52 52" fill="none">
            <rect x="1" y="1" width="50" height="50" rx="0" fill="#18181b" stroke="#7c3aed" strokeWidth="1.5"/>
            <circle cx="26" cy="26" r="13" stroke="#7c3aed" strokeWidth="1.5" fill="none"/>
            <circle cx="26" cy="26" r="6" fill="#7c3aed" fillOpacity="0.25" stroke="#7c3aed" strokeWidth="1.2"/>
            <line x1="26" y1="13" x2="26" y2="18" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="26" y1="34" x2="26" y2="39" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="13" y1="26" x2="18" y2="26" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="34" y1="26" x2="39" y2="26" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
            <rect x="7" y="1" width="5" height="4" rx="1" fill="#7c3aed"/>
            <rect x="18" y="1" width="5" height="4" rx="1" fill="#7c3aed" fillOpacity="0.5"/>
            <rect x="29" y="1" width="5" height="4" rx="1" fill="#7c3aed" fillOpacity="0.5"/>
            <rect x="40" y="1" width="5" height="4" rx="1" fill="#7c3aed"/>
            <line x1="1" y1="7" x2="51" y2="7" stroke="#7c3aed" strokeWidth="1" opacity="0.6"/>
            <line x1="1" y1="45" x2="51" y2="45" stroke="#7c3aed" strokeWidth="1" opacity="0.6"/>
            <rect x="7" y="47" width="5" height="4" rx="1" fill="#7c3aed"/>
            <rect x="18" y="47" width="5" height="4" rx="1" fill="#7c3aed" fillOpacity="0.5"/>
            <rect x="29" y="47" width="5" height="4" rx="1" fill="#7c3aed" fillOpacity="0.5"/>
            <rect x="40" y="47" width="5" height="4" rx="1" fill="#7c3aed"/>
          </svg>
          <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em' }}>
            Clipping<span style={{ color: '#7c3aed' }}>Vault</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="/dashboard" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Sign in</Link>
          <Link href="/dashboard" style={{
            background: '#7c3aed', color: 'white', padding: '0.5rem 1.1rem',
            borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', fontWeight: 600
          }}>Get started</Link>
        </div>
      </nav>

      {/* Hero */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '7rem 1.5rem 4rem', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block', padding: '0.35rem 0.9rem', marginBottom: '2rem',
          background: 'var(--accent-subtle)', border: '1px solid rgba(124,58,237,0.25)',
          borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600,
          color: '#a78bfa', letterSpacing: '0.06em', textTransform: 'uppercase'
        }}>Now in Beta</div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', fontWeight: 900,
          letterSpacing: '-0.04em', lineHeight: 1.05, maxWidth: '820px', marginBottom: '1.5rem'
        }}>
          Your content works harder<br />
          <span style={{ color: '#7c3aed' }}>when every moment is a clip.</span>
        </h1>

        <p style={{
          fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '540px',
          marginBottom: '2.5rem', lineHeight: 1.7
        }}>
          Upload a video or drop a YouTube link. Get back a vault of ready-to-post clips — captioned, formatted, and built for every platform.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <Link href="/upload" style={{
            background: '#7c3aed', color: 'white', padding: '0.8rem 1.8rem',
            borderRadius: 'var(--radius)', fontSize: '0.95rem', fontWeight: 700,
            display: 'inline-flex', alignItems: 'center', gap: '6px'
          }}>Start clipping →</Link>
          <Link href="/vault" style={{
            background: 'var(--surface)', color: 'var(--text-secondary)',
            border: '1px solid var(--border)', padding: '0.8rem 1.8rem',
            borderRadius: 'var(--radius)', fontSize: '0.95rem', fontWeight: 600
          }}>View demo vault</Link>
        </div>

        {/* Social proof */}
        <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          No credit card required · 3 free clips to start
        </p>
      </main>

      {/* Features row */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {[
            { icon: '✂️', title: 'Smart clip detection', desc: 'Finds your strongest moments — not just random cuts.' },
            { icon: '💬', title: 'Auto-captions', desc: 'Word-by-word captions, styled and ready to export.' },
            { icon: '📱', title: 'Every platform', desc: 'Vertical, square, horizontal — all formats in one shot.' },
            { icon: '🗄️', title: 'Your vault', desc: 'Every clip organized, searchable, always accessible.' },
          ].map(f => (
            <div key={f.title} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>{f.title}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
        © 2026 Clipping Vault
      </footer>
    </div>
  );
}
