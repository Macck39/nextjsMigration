'use client'

import { createContext, useContext, useState } from "react"
import Notification from "./notification/Notification"

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = (message, type = "info", duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9)
    setNotifications((prev) => [...prev, { id, message, type, duration }])
  }

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    )
  }

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      {notifications.map(({ id, message, type, duration }) => (
        <Notification
          key={id}
          message={message}
          type={type}
          duration={duration}
          onClose={() => removeNotification(id)}
        />
      ))}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)

