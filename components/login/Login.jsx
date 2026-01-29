'use client'

import { useState, useEffect } from "react"
import "./login.css"
import { useAuth } from "../AuthContext"
import { useRouter } from "next/navigation"
import { useNotification } from "../NotificationContext"
import { FaUser, FaLock, FaSignInAlt, FaUserNurse } from "react-icons/fa"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { login, isAuthenticated } = useAuth()
  const { addNotification } = useNotification()
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!credentials.username || !credentials.password) {
      addNotification("Please fill in all fields", "error", 3000)
      return
    }
    setIsLoading(true)
    const success = await login(credentials)
    setIsLoading(false)
    if (success) {
      router.push("/portal-8f3c2a")
      addNotification("Login Successful", "success", 3000)
    } else {
      addNotification("Invalid Credentials", "error", 3000)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/portal-8f3c2a")
    }
  }, [isAuthenticated, router])
  
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Branding */}
        <div className="login-branding">
          <div className="branding-content">
            <div className="brand-icon">
              <FaUserNurse />
            </div>
            <h1 className="brand-title">Ragini Nursing Bureau</h1>
            <p className="brand-tagline">Your Health, Our Priority</p>
            <div className="brand-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>24/7 Home Healthcare</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Professional Nursing Care</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Trusted by 500+ Families</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-form-section">
          <div className="login-form-container">
            <div className="login-header">
              <h2>Admin Portal</h2>
              <p>Sign in to access the dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={handleChange}
                  autoComplete="username"
                />
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <FaLock />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                className="login-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    <FaSignInAlt />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>

            <div className="login-footer">
              <p>Authorized personnel only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
