'use client'

import { AuthProvider } from './AuthContext'
import { NotificationProvider } from './NotificationContext'

export default function Providers({ children }) {
  return (
    <NotificationProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </NotificationProvider>
  )
}
