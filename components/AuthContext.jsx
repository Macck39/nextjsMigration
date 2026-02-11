'use client'

import { createContext, useState, useContext, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getUserProfile, handleLogin, logout as apiLogout } from "../util/api"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  const checkAuth = async () => {
    try {
      await getUserProfile()
      setIsAuthenticated(true)
      if (pathname === "/login") {
        router.push("/portal-8f3c2a")
      }
    } catch (error) {
      console.error("Auth check error:", error)
      setIsAuthenticated(false)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    // Only check auth on login and admin dashboard routes
    if (pathname === "/login" || pathname.startsWith("/portal-8f3c2a")) {
      checkAuth()
    } else {
      // For all other routes we don't need an auth check
      setIsLoading(false)
    }
  }, [pathname])

  const login = async (credentials) => {
    try {
      const response = await handleLogin(credentials)
      if (response.status === 200) {
        setIsAuthenticated(true)
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }

  }
  const logout = async () => {
    try {
      await apiLogout()
    } catch {
      // ignore
    }
    setIsAuthenticated(false)
  }

  // On login page: always show the form immediately; auth check runs in background and redirects if already logged in
  if (pathname === "/login") {
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading, checkAuth }}>
        {children}
      </AuthContext.Provider>
    )
  }

  // On portal: block until auth check completes so we don't flash dashboard for unauthenticated users
  if (isLoading && pathname?.startsWith("/portal-8f3c2a")) {
    return <div />
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
