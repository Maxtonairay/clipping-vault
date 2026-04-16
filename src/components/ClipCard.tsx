'use client';
interface Clip {
  id: string;
  title: string;
  duration: string;
  platform: 'reels' | 'tiktok' | 'shorts';
  hook: string;
  timestamp: string;
}

const platformColors: Record<string, string> = {
  reels: '#e1306c',
  tiktok: '#69c9d0',
  shorts: '#ff0000',
};

const platformLabels: Record<string, string> = {
  reels: 'Reels',
  tiktok: 'TikTok',
  shorts: 'Shorts',
};

export default function ClipCard({ clip }: { clip: Clip }) {
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius)', overflow: 'hidden',
      transition: 'border-color 0.15s, transform 0.15s',
      cursor: 'default'
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)';
      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
    }}>

      {/* Thumbnail placeholder */}
      <div style={{
        height: '140px', background: 'var(--surface2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ fontSize: '2rem', opacity: 0.2 }}>▶</div>
        <div style={{
          position: 'absolute', top: '10px', left: '10px',
          background: platformColors[clip.platform],
          color: 'white', padding: '0.2rem 0.55rem',
          borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700
        }}>{platformLabels[clip.platform]}</div>
        <div style={{
          position: 'absolute', bottom: '10px', right: '10px',
          background: 'rgba(0,0,0,0.7)', color: 'white',
          padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.7rem'
        }}>{clip.duration}</div>
      </div>

      {/* Content */}
      <div style={{ padding: '1rem' }}>
        <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.35rem', lineHeight: 1.4 }}
          className="truncate">{clip.title}</div>
        <div style={{ fontSize: '0.775rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
          {clip.hook}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{
            flex: 1, padding: '0.45rem', background: 'var(--accent-subtle)',
            border: '1px solid rgba(124,58,237,0.2)', borderRadius: 'var(--radius-sm)',
            color: '#a78bfa', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
          }}>Download</button>
          <button style={{
            padding: '0.45rem 0.75rem', background: 'transparent',
            border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
            color: 'var(--text-secondary)', fontSize: '0.75rem', cursor: 'pointer'
          }}>···</button>
        </div>
      </div>
    </div>
  );
}
