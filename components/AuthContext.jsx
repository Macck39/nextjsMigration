'use client'

import { createContext, useState, useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from 'js-cookie'
import { getUserProfile, handleLogin } from "../util/api"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

const checkAuth= async()=>{
  const token = Cookies.get('token')
  if(token){
    try {
        await getUserProfile()
        setIsAuthenticated(true)
    } catch(error){
      console.error("Token validation error:", error)
      Cookies.remove('token')
      setIsAuthenticated(false)
    }
  }else{
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
  const logout = () => {
    Cookies.remove('token')
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

