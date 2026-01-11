'use client'

import { useState, useEffect } from 'react'
import './notification.css'

const Notification = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button onClick={() => {
        setIsVisible(false)
        onClose()
      }}>
        &times;
      </button>
    </div>
  )
}

export default Notification

