'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/dashboard', label: 'Dashboard', icon: '▦' },
  { href: '/upload', label: 'New Upload', icon: '↑' },
  { href: '/vault', label: 'Vault', icon: '⊞' },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside style={{
      width: '220px', minHeight: '100vh', flexShrink: 0,
      background: 'var(--surface)', borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column', padding: '1.25rem 0'
    }}>
      {/* Logo */}
      <div style={{ padding: '0 1.25rem', marginBottom: '2rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 52 52" fill="none">
            <rect x="1" y="1" width="50" height="50" rx="0" fill="#18181b" stroke="#7c3aed" strokeWidth="1.5"/>
            <circle cx="26" cy="26" r="13" stroke="#7c3aed" strokeWidth="1.5" fill="none"/>
            <circle cx="26" cy="26" r="6" fill="#7c3aed" fillOpacity="0.25" stroke="#7c3aed" strokeWidth="1.2"/>
            <line x1="26" y1="13" x2="26" y2="18" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="26" y1="34" x2="26" y2="39" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="13" y1="26" x2="18" y2="26" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="34" y1="26" x2="39" y2="26" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="1" y1="7" x2="51" y2="7" stroke="#7c3aed" strokeWidth="1" opacity="0.6"/>
            <line x1="1" y1="45" x2="51" y2="45" stroke="#7c3aed" strokeWidth="1" opacity="0.6"/>
          </svg>
          <span style={{ fontWeight: 800, fontSize: '0.95rem', letterSpacing: '-0.02em' }}>
            Clipping<span style={{ color: '#7c3aed' }}>Vault</span>
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '0 0.75rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {nav.map(item => {
          const active = path === item.href;
          return (
            <Link key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '0.55rem 0.75rem', borderRadius: 'var(--radius-sm)',
              fontSize: '0.875rem', fontWeight: active ? 600 : 400,
              color: active ? 'var(--text)' : 'var(--text-secondary)',
              background: active ? 'var(--accent-subtle)' : 'transparent',
              borderLeft: active ? '2px solid #7c3aed' : '2px solid transparent',
              transition: 'all 0.15s'
            }}>
              <span style={{ fontSize: '1rem', opacity: active ? 1 : 0.6 }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.4rem' }}>Free Plan</div>
        <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: '30%', height: '100%', background: '#7c3aed', borderRadius: '2px' }}/>
        </div>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>3 of 10 clips used</div>
      </div>
    </aside>
  );
}
