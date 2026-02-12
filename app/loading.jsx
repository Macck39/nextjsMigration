export default function Loading() {
  const shimmerStyle = {
    background: 'linear-gradient(90deg, #e0e0e0 25%, #d0d0d0 50%, #e0e0e0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '4px',
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Navbar placeholder */}
      <div style={{ ...shimmerStyle, height: '64px', width: '100%', borderRadius: 0 }}></div>

      {/* Hero banner placeholder */}
      <div style={{ ...shimmerStyle, height: '400px', width: '100%', borderRadius: 0, marginTop: '2px' }}></div>

      {/* Content bar placeholders */}
      <div style={{ maxWidth: '800px', width: '100%', margin: '2rem auto', padding: '0 2rem' }}>
        <div style={{ ...shimmerStyle, height: '28px', width: '55%', marginBottom: '1rem' }}></div>
        <div style={{ ...shimmerStyle, height: '14px', width: '100%', marginBottom: '0.5rem' }}></div>
        <div style={{ ...shimmerStyle, height: '14px', width: '90%', marginBottom: '0.5rem' }}></div>
        <div style={{ ...shimmerStyle, height: '14px', width: '40%', marginBottom: '2rem' }}></div>

        {/* Card grid placeholders */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '1rem' }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ ...shimmerStyle, height: '140px' }}></div>
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
