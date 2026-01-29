export default function AboutUsLoading() {
  const shimmerStyle = {
    background: 'linear-gradient(90deg, #e0e0e0 25%, #d0d0d0 50%, #e0e0e0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '4px'
  }

  return (
    <div style={{ padding: 0, background: '#fff' }}>
      {/* Hero Skeleton */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e8f5f0 100%)',
        minHeight: '400px',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ ...shimmerStyle, height: '48px', width: '80%', marginBottom: '1rem' }}></div>
          <div style={{ ...shimmerStyle, height: '16px', width: '100%', marginBottom: '0.5rem' }}></div>
        </div>
        <div style={{ ...shimmerStyle, width: '350px', height: '250px', borderRadius: '12px' }}></div>
      </div>
      
      {/* Content Skeleton */}
      <div style={{ maxWidth: '800px', margin: '3rem auto', padding: '0 2rem' }}>
        <div style={{ ...shimmerStyle, height: '32px', width: '60%', marginBottom: '1rem' }}></div>
        <div style={{ ...shimmerStyle, height: '16px', width: '100%', marginBottom: '0.5rem' }}></div>
        <div style={{ ...shimmerStyle, height: '16px', width: '100%', marginBottom: '0.5rem' }}></div>
        <div style={{ ...shimmerStyle, height: '16px', width: '40%' }}></div>
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
