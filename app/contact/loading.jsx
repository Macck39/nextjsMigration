export default function ContactLoading() {
  const shimmerStyle = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '4px'
  }

  return (
    <div style={{ padding: 0, background: '#fff' }}>
      {/* Banner Skeleton */}
      <div style={{ ...shimmerStyle, height: '250px' }}></div>
      
      {/* Contact Info Skeleton */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '1.5rem' }}>
            <div style={{ ...shimmerStyle, width: '60px', height: '60px', borderRadius: '50%', margin: '0 auto 1rem' }}></div>
            <div style={{ ...shimmerStyle, height: '20px', width: '60%', margin: '0 auto 1rem' }}></div>
            <div style={{ ...shimmerStyle, height: '14px', width: '80%', margin: '0 auto 0.5rem' }}></div>
            <div style={{ ...shimmerStyle, height: '14px', width: '50%', margin: '0 auto' }}></div>
          </div>
        ))}
      </div>
      
      {/* Map & Form Skeleton */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ ...shimmerStyle, height: '450px', borderRadius: '12px' }}></div>
        <div style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '12px' }}>
          <div style={{ ...shimmerStyle, height: '24px', width: '60%', margin: '0 auto 1rem' }}></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ ...shimmerStyle, height: '48px', marginBottom: '1rem' }}></div>
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
