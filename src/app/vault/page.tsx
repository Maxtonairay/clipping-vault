import Link from 'next/link';
import ClipCard from '@/components/ClipCard';
import { mockVideos } from '@/lib/mock-data';

export default function VaultPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1100px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>Vault</h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{mockVideos.length} videos · {mockVideos.flatMap(v => v.clips).length} clips</p>
        </div>
        <Link href="/upload" style={{
          background: '#7c3aed', color: 'white', padding: '0.6rem 1.25rem',
          borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', fontWeight: 600
        }}>+ New upload</Link>
      </div>

      {/* Videos */}
      {mockVideos.map(video => (
        <div key={video.id} style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '1rem', paddingBottom: '1rem',
            borderBottom: '1px solid var(--border)'
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: 'var(--radius-sm)',
              background: 'var(--surface2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', border: '1px solid var(--border)'
            }}>▶</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{video.title}</div>
              <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>{video.clips.length} clips · {video.duration} · {video.date}</div>
            </div>
            <div style={{
              marginLeft: 'auto', padding: '0.3rem 0.75rem',
              background: 'var(--surface2)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: 'var(--text-secondary)'
            }}>Processed</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {video.clips.map(clip => <ClipCard key={clip.id} clip={clip} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
