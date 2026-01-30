'use client'

import { createContext, useState, useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getUserProfile, handleLogin, logout as apiLogout } from "../util/api"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

const checkAuth= async()=>{
  try {
    await getUserProfile()
    setIsAuthenticated(true)
  } catch (error) {
    console.error("Auth check error:", error)
    setIsAuthenticated(false)
  }
  setIsLoading(false)
}

useEffect(() => {
  checkAuth()
}, [])

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

  if (isLoading) {
    return <div>Loading...</div> // Or any loading component
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

