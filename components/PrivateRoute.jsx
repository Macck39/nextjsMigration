'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from './AuthContext'
import { useEffect } from 'react'

export default function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // if (!isLoading && !isAuthenticated) {
    //   router.push('/login')
    // }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return <div>Loading...</div>
  }

  // if (!isAuthenticated) {
  //   return null
  // }

  return <>{children}</>
}

