'use client'

import { useState, useEffect } from "react"
import "./AdminDashboard.css"
import { useNotification } from "../NotificationContext"
import { useRouter } from "next/navigation"
import { useAuth } from "../AuthContext"
import Cookies from "js-cookie"
import { getAllEnquiry, getAllUsers, getCallbackRequests, logout as apiLogout, getUserProfile } from "../../util/api"
import * as XLSX from 'xlsx'

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("request")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const { addNotification } = useNotification()
  const { isAuthenticated, logout, checkAuth, isLoading } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const router = useRouter()

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data")
    XLSX.writeFile(workbook, `${activeMenu}_data.xlsx`)
  }

  const menuItems = [
    { id: "request", icon: "📞", label: "Callback Requests" },
    { id: "enquiry", icon: "📋", label: "Enquiries" },
    { id: "user", icon: "👤", label: "All Users" },
  ]

  useEffect(() => {
    const init = async () => {
      if (!isLoading) {
        if (!isAuthenticated) {
          router.push('/login')
        } else {
          fetchData(activeMenu)
        }
      }
    }
    init()
  }, [isAuthenticated, isLoading, activeMenu, router])
  
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      fetchUserProfile()
    }
  }, [isAuthenticated, isLoading])

  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm, data])

  const fetchUserProfile = async () => {
    try {
      const response = await getUserProfile()
      setUserProfile(response.data)
    } catch (error) {
      console.error("Error fetching user profile:", error)
      addNotification("Failed to fetch user profile", "error", 3000)
    }
  }
  
  const fetchData = async (endpoint) => {
    setLoading(true)
    setError(null)
    try {
      let response
      switch (endpoint) {
        case 'request':
          response = await getCallbackRequests()
          break
        case 'enquiry':
          response = await getAllEnquiry()
          break
        case 'user':
          response = await getAllUsers()
          break
        default:
          throw new Error('Invalid endpoint')
      }
      setData(response.data)
    } catch (err) {
      if (err.statusCode === 401) {
        addNotification("Session expired. Please login again.", "error", 3000)
        logout()
      } else {
        addNotification("An error occurred.", "error", 3000)
        setError("Failed to fetch data. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      const res = await apiLogout()
      if (res.status === 200) {
        logout()
        addNotification(res.data.message, "success")
        router.push("/")
      }
    } catch (error) {
      addNotification("An error occurred during logout.", "error", 3000)
      setError("Failed to fetch data. Please try again.")
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term.trim() === "") {
      setFilteredData(data)
    } else {
      const lowercasedTerm = term.toLowerCase()
      const filtered = data.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(lowercasedTerm)
        )
      )
      setFilteredData(filtered)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="logo">DASHBOARD</div>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="content">
        <header>
          <div className="search-bar">
            <input type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button>🔍</button>
          </div>
          <button
            className="export-button"
            onClick={exportToExcel}
          >
            Export to Excel
          </button>
          <div className="user-profile">
            <div
              className="avatar"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              👤
            </div>
            {showProfileDropdown && (
              <div className="profile-dropdown">
                <div className="profile-info">
                  <p><strong>{userProfile?.username}</strong></p>
                </div>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </header>
        <section className="data-section">
          <h2>{activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}</h2>
          {loading && <p>Loading...</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && !error && filteredData.length > 0 && (
            <table>
              <thead>
                <tr>
                  {Object.keys(filteredData[0]).map((key) => (
                    <th key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    {Object.entries(item).map(([key, value]) => (
                      <td key={key}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!loading && !error && filteredData.length === 0 && <p>No data available.</p>}
        </section>
      </main>
    </div>
  )
}

export default AdminDashboard

