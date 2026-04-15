'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setTimeout(() => router.push('/vault'), 2000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '720px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>New upload</h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Drop a YouTube link or upload a video file to get started</p>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '2.5rem' }}>
        {['Upload', 'Process', 'Review clips'].map((step, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '24px', height: '24px', borderRadius: '50%',
              background: i === 0 ? '#7c3aed' : 'var(--surface)',
              border: `1px solid ${i === 0 ? '#7c3aed' : 'var(--border)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.7rem', fontWeight: 700,
              color: i === 0 ? 'white' : 'var(--text-dim)'
            }}>{i + 1}</div>
            <span style={{ fontSize: '0.8rem', color: i === 0 ? 'var(--text)' : 'var(--text-dim)', fontWeight: i === 0 ? 600 : 400 }}>{step}</span>
            {i < 2 && <div style={{ width: '32px', height: '1px', background: 'var(--border)', margin: '0 8px' }}/>}
          </div>
        ))}
      </div>

      {/* YouTube URL */}
      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', padding: '1.75rem', marginBottom: '1rem'
      }}>
        <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Paste a YouTube link</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Supports YouTube videos, shorts, and podcast episodes
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            style={{
              flex: 1, padding: '0.7rem 1rem',
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)', color: 'var(--text)',
              fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit'
            }}
          />
          <button type="submit" disabled={loading || !url.trim()} style={{
            background: '#7c3aed', color: 'white', border: 'none',
            padding: '0.7rem 1.25rem', borderRadius: 'var(--radius-sm)',
            fontSize: '0.875rem', fontWeight: 600, cursor: loading ? 'wait' : 'pointer',
            opacity: !url.trim() ? 0.5 : 1
          }}>{loading ? 'Processing...' : 'Process →'}</button>
        </form>
      </div>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}/>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>or</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}/>
      </div>

      {/* File drop */}
      <div
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); }}
        style={{
          background: dragging ? 'rgba(124,58,237,0.08)' : 'var(--surface)',
          border: `2px dashed ${dragging ? '#7c3aed' : 'var(--border)'}`,
          borderRadius: 'var(--radius-lg)', padding: '3rem 2rem',
          textAlign: 'center', cursor: 'pointer', transition: 'all 0.15s'
        }}
      >
        <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem', opacity: 0.4 }}>↑</div>
        <div style={{ fontWeight: 600, marginBottom: '0.35rem' }}>Drop your video here</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>MP4, MOV, MKV — up to 2GB</div>
      </div>
    </div>
  );
}
