export default function ServicesLoading() {
  const shimmerStyle = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '4px'
  }

  return (
    <div style={{ padding: 0, background: '#fff' }}>
      {/* Banner Skeleton */}
      <div style={{ ...shimmerStyle, height: '300px' }}></div>
      
      {/* Intro Skeleton */}
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ ...shimmerStyle, height: '32px', width: '60%', marginBottom: '1rem' }}></div>
        <div style={{ ...shimmerStyle, height: '16px', width: '100%', marginBottom: '0.5rem' }}></div>
        <div style={{ ...shimmerStyle, height: '16px', width: '40%' }}></div>
      </div>
      
      {/* Services Grid Skeleton */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <div style={{ ...shimmerStyle, height: '180px' }}></div>
            <div style={{ padding: '1rem' }}>
              <div style={{ ...shimmerStyle, height: '20px', width: '80%', marginBottom: '0.5rem' }}></div>
              <div style={{ ...shimmerStyle, height: '16px', width: '100%' }}></div>
            </div>
          </div>
        ))}
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
