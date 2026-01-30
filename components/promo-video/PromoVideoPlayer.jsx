'use client'

import { useState, useEffect, useRef } from "react"
import { FaTimes, FaPlay } from "react-icons/fa"
import "./promo-video.css"

const PromoVideoPlayer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true) // Start with minimized button visible
  const videoRef = useRef(null)
  const modalRef = useRef(null)

  // Handle video play when modal opens
  useEffect(() => {
    if (isOpen && !isMinimized && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, video will be paused
      })
    }
  }, [isOpen, isMinimized])

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setIsOpen(false)
    setIsMinimized(true)
  }

  const handleReopen = () => {
    setIsOpen(true)
    setIsMinimized(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('promo-video-overlay')) {
      handleClose()
    }
  }

  return (
    <>
      {/* Full Video Modal */}
      {isOpen && !isMinimized && (
        <div className="promo-video-overlay" onClick={handleOverlayClick}>
          <div className="promo-video-modal" ref={modalRef}>
            {/* Decorative elements */}
            <div className="promo-modal-glow"></div>
            <div className="promo-modal-border"></div>
            
            {/* Close Button */}
            <button 
              className="promo-close-btn" 
              onClick={handleClose}
              aria-label="Close video"
            >
              <FaTimes />
            </button>
            
            {/* Video Container */}
            <div className="promo-video-container">
              <video
                ref={videoRef}
                className="promo-video"
                controls
                autoPlay
                muted
                playsInline
                loop
                poster="/assets/NursingService.jpeg"
              >
                <source src="/assets/RaginiNursingBureauMain.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Branding Footer */}
            <div className="promo-modal-footer">
              <span className="promo-brand-text">Ragini Nursing Bureau</span>
              <span className="promo-brand-tagline">Your Health, Our Priority</span>
            </div>
          </div>
        </div>
      )}

      {/* Minimized Floating Button */}
      {isMinimized && (
        <div className="promo-mini-wrapper">
          <div className="promo-mini-btn" onClick={handleReopen}>
            <div className="promo-mini-icon-wrapper">
              <FaPlay className="promo-mini-icon" />
              <div className="promo-mini-pulse"></div>
            </div>
            <div className="promo-mini-text">
              <span className="promo-mini-title">Watch Video</span>
              <span className="promo-mini-subtitle">Discover Our Services</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PromoVideoPlayer
