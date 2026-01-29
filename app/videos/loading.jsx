export default function VideosLoading() {
  const shimmerStyle = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '4px'
  }

  return (
    <div style={{ padding: 0, background: '#fff' }}>
      {/* Banner Skeleton */}
      <div style={{ ...shimmerStyle, height: '200px' }}></div>
      
      {/* Video Player Section Skeleton */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap'
      }}>
        <div style={{ ...shimmerStyle, flex: 2, minWidth: '300px', aspectRatio: '16/9', borderRadius: '12px' }}></div>
        <div style={{ flex: 1, minWidth: '250px', background: '#f9f9f9', borderRadius: '12px', padding: '1rem' }}>
          <div style={{ ...shimmerStyle, height: '24px', width: '60%', marginBottom: '1rem' }}></div>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '1rem',
              padding: '0.5rem',
              background: '#fff',
              borderRadius: '8px'
            }}>
              <div style={{ ...shimmerStyle, width: '100px', height: '60px', flexShrink: 0, borderRadius: '6px' }}></div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div style={{ ...shimmerStyle, height: '14px', width: '100%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
