'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        background: '#fff',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '450px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
        <h2 style={{ color: '#333', fontSize: '1.75rem', marginBottom: '1rem' }}>
          Something went wrong!
        </h2>
        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.5 }}>
          We apologize for the inconvenience. Please try again.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              background: '#4ba889',
              color: '#fff'
            }}
          >
            Try again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              background: '#f0f0f0',
              color: '#333'
            }}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  )
}
