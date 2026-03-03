import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SEMGOKU - Specjalista Google Ads i Feed Optimization';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0f0f0f',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Orange accent bar top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'oklch(0.68 0.20 35)',
          }}
        />

        {/* Top: badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              background: 'rgba(220, 100, 40, 0.15)',
              border: '1px solid rgba(220, 100, 40, 0.3)',
              borderRadius: '100px',
              padding: '8px 20px',
              color: '#e06830',
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            Freelancer SEM · 10 lat doświadczenia
          </div>
        </div>

        {/* Middle: main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#f9f9f9',
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}
          >
            Specjalista{' '}
            <span style={{ color: '#e06830' }}>Google Ads</span>
            {'\n'}i Feed Optimization
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#9a9a9a',
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            Google Ads · Meta Ads · Microsoft Advertising · Optymalizacja feedów produktowych
          </div>
        </div>

        {/* Bottom: domain + stats */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#e06830',
              letterSpacing: '1px',
            }}
          >
            SEMGOKU.PL
          </div>
          <div style={{ display: 'flex', gap: '48px' }}>
            {[
              { value: '+170%', label: 'wzrost przychodów' },
              { value: '6.8x', label: 'ROAS' },
              { value: '-41%', label: 'redukcja CPC' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
              >
                <span style={{ fontSize: '32px', fontWeight: 800, color: '#f9f9f9' }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '14px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
