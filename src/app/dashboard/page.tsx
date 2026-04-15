import Link from 'next/link';
import ClipCard from '@/components/ClipCard';
import { mockVideos } from '@/lib/mock-data';

const stats = [
  { label: 'Videos processed', value: '12' },
  { label: 'Clips generated', value: '68' },
  { label: 'Hours saved', value: '14h' },
  { label: 'Platforms exported', value: '3' },
];

export default function DashboardPage() {
  const recentClips = mockVideos.flatMap(v => v.clips).slice(0, 6);

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>Dashboard</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Your clipping activity at a glance</p>
        </div>
        <Link href="/upload" style={{
          background: '#7c3aed', color: 'white', padding: '0.6rem 1.25rem',
          borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', fontWeight: 600,
          display: 'inline-flex', alignItems: 'center', gap: '6px'
        }}>+ New upload</Link>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: '1.25rem'
          }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '0.25rem' }}>{s.value}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent clips */}
      <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>Recent clips</h2>
        <Link href="/vault" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>View all →</Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {recentClips.map(clip => <ClipCard key={clip.id} clip={clip} />)}
      </div>

    </div>
  );
}
