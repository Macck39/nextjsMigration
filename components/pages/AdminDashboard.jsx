'use client'

import { useEffect, useMemo, useState } from "react"
import "./AdminDashboard.css"
import { useNotification } from "../NotificationContext"
import { useRouter } from "next/navigation"
import { useAuth } from "../AuthContext"
import { getAllUsers, getRequests, getUserProfile, logout as apiLogout } from "../../util/api"
import * as XLSX from "xlsx"
import { Modal } from "antd"

const PAGE_SIZE = 20

const AdminDashboard = () => {
  const router = useRouter()
  const { addNotification } = useNotification()
  const { isAuthenticated, isLoading, logout } = useAuth()

  const [activeTab, setActiveTab] = useState("requests") // requests | users
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [requestType, setRequestType] = useState("all") // all | callback | enquiry
  const [page, setPage] = useState(1)

  const [userProfile, setUserProfile] = useState(null)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)

  const [messageModalOpen, setMessageModalOpen] = useState(false)
  const [messageModalTitle, setMessageModalTitle] = useState("")
  const [messageModalText, setMessageModalText] = useState("")

  useEffect(() => {
    const init = async () => {
      if (isLoading) return
      if (!isAuthenticated) {
        router.push("/login")
        return
      }
      try {
        const me = await getUserProfile()
        setUserProfile(me.data)
      } catch {
        // ignore (API handlers will still protect)
      }
    }
    init()
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    if (isLoading) return
    if (!isAuthenticated) return
    fetchTabData(activeTab)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, isAuthenticated, isLoading])

  useEffect(() => {
    setPage(1)
  }, [searchTerm, requestType, activeTab])

  const filteredRows = useMemo(() => {
    let data = Array.isArray(rows) ? rows : []

    if (activeTab === "requests" && requestType !== "all") {
      data = data.filter((r) => (r?.type || "").toLowerCase() === requestType)
    }

    const term = searchTerm.trim().toLowerCase()
    if (!term) return data

    return data.filter((item) =>
      Object.values(item || {}).some((v) =>
        String(v ?? "")
          .toLowerCase()
          .includes(term)
      )
    )
  }, [rows, activeTab, requestType, searchTerm])

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE))
  const paginatedRows = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filteredRows.slice(start, start + PAGE_SIZE)
  }, [filteredRows, page])

  const fetchTabData = async (tab) => {
    setLoading(true)
    setError("")
    try {
      const res = tab === "users" ? await getAllUsers() : await getRequests()
      setRows(res.data || [])
    } catch (err) {
      if (err?.statusCode === 401) {
        addNotification("Session expired. Please login again.", "error", 3000)
        await logout()
        router.push("/login")
      } else {
        setError(err?.message || "Failed to fetch data. Please try again.")
        addNotification("An error occurred.", "error", 3000)
      }
    } finally {
      setLoading(false)
    }
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredRows)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, activeTab)
    XLSX.writeFile(workbook, `${activeTab}_data.xlsx`)
  }

  const handleLogout = async () => {
    try {
      const res = await apiLogout()
      if (res.status === 200) {
        await logout()
        addNotification(res.data.message, "success")
        router.push("/")
      }
    } catch {
      addNotification("An error occurred during logout.", "error", 3000)
    }
  }

  const openMessage = (row) => {
    setMessageModalTitle(`${row?.fullname || "Request"} (${row?.type || "-"})`)
    setMessageModalText(row?.message || "")
    setMessageModalOpen(true)
  }

  if (isLoading) return <div className="admin-loading">Loading...</div>

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-brand-title">Admin</div>
          <div className="admin-brand-subtitle">Ragini Nursing Bureau</div>
        </div>

        <nav className="admin-nav">
          <button
            className={`admin-tab ${activeTab === "requests" ? "active" : ""}`}
            onClick={() => setActiveTab("requests")}
            type="button"
          >
            Requests
          </button>
          <button
            className={`admin-tab ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
            type="button"
          >
            Users
          </button>
        </nav>
      </aside>

      <main className="admin-content">
        <header className="admin-header">
          <div className="admin-left">
            <div className="admin-search">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {activeTab === "requests" && (
              <div className="admin-filter">
                <select
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                >
                  <option value="all">All types</option>
                  <option value="callback">Callback</option>
                  <option value="enquiry">Enquiry</option>
                </select>
              </div>
            )}
          </div>

          <div className="admin-right">
            <button className="admin-export" onClick={exportToExcel} type="button">
              Export
            </button>

            <div className="admin-profile">
              <button
                className="admin-avatar"
                type="button"
                onClick={() => setShowProfileDropdown((v) => !v)}
              >
                👤
              </button>
              {showProfileDropdown && (
                <div className="admin-profile-dropdown">
                  <div className="admin-profile-meta">
                    <div className="admin-profile-name">{userProfile?.username || "-"}</div>
                    <div className="admin-profile-role">{userProfile?.role || "-"}</div>
                  </div>
                  <button className="admin-logout" onClick={handleLogout} type="button">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <section className="admin-card">
          <div className="admin-card-head">
            <div className="admin-card-title">
              {activeTab === "users" ? "Users" : "Requests"}
            </div>
            <div className="admin-card-subtitle">
              {filteredRows.length} record{filteredRows.length === 1 ? "" : "s"}
            </div>
          </div>

          {loading && <div className="admin-status">Loading...</div>}
          {!loading && error && <div className="admin-error">{error}</div>}

          {!loading && !error && paginatedRows.length === 0 && (
            <div className="admin-status">No data available.</div>
          )}

          {!loading && !error && paginatedRows.length > 0 && (
            <div className="admin-table-wrap">
              {activeTab === "requests" ? (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Type</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Location</th>
                      <th>Service</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedRows.map((r, idx) => (
                      <tr key={`${r?.mobile || ""}-${r?.createdAt || ""}-${idx}`}>
                        <td className="mono created-col" data-label="Timestamp">
                          {r.createdAt}
                        </td>
                        <td data-label="Type">
                          <span className={`badge badge-${r.type || "unknown"}`}>
                            {r.type || "-"}
                          </span>
                        </td>
                        <td data-label="Name">{r.fullname}</td>
                        <td className="mono" data-label="Mobile">
                          {r.mobile}
                        </td>
                        <td data-label="Email">
                          {r.email}
                        </td>
                        <td data-label="Location">
                          {r.location}
                        </td>
                        <td data-label="Service">
                          {r.service}
                        </td>
                        <td data-label="Message">
                          {r.message ? (
                            <button
                              className="link-btn"
                              type="button"
                              onClick={() => openMessage(r)}
                            >
                              View
                            </button>
                          ) : (
                            <span className="muted">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedRows.map((u, idx) => (
                      <tr key={`${u?.username || ""}-${idx}`}>
                        <td data-label="Username">
                          {u.username}
                        </td>
                        <td data-label="Role">
                          <span className={`badge badge-${u.role || "user"}`}>
                            {u.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {!loading && !error && filteredRows.length > 0 && (
            <div className="admin-pagination">
              <button
                type="button"
                className="pager-btn"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Prev
              </button>
              <div className="pager-meta">
                Page <span className="mono">{page}</span> /{" "}
                <span className="mono">{totalPages}</span>
              </div>
              <button
                type="button"
                className="pager-btn"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </main>

      <Modal
        open={messageModalOpen}
        title={messageModalTitle}
        footer={null}
        onCancel={() => setMessageModalOpen(false)}
      >
        <div className="admin-message">{messageModalText || "No message"}</div>
      </Modal>
    </div>
  )
}

export default AdminDashboard

