'use client'

import { useState, useEffect } from "react"
import { Modal } from "antd"
import "./appointment-modal.css"
import CallbackModal from "../callback-modal/CallbackModal"
import { 
  FaPhone, 
  FaHeadset, 
  FaUserNurse, 
  FaHospital, 
  FaAmbulance,
  FaHeart,
  FaStar,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaTimes
} from "react-icons/fa"

const AppointmentModal = ({ show, handleClose, service }) => {
  const [showCallbackModal, setShowCallbackModal] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (show) {
      setIsAnimating(true)
    }
  }, [show])

  const handleCallbackClick = () => {
    setShowCallbackModal(true)
  }

  const handleCallbackClose = () => {
    setShowCallbackModal(false)
  }

  const handleBookNow = () => {
    window.location.href = "tel:+91-7859989007"
  }

  // Get service name from the service prop, fallback to common name
  const serviceName = service?.title || "24/7 Home Healthcare"

  return (
    <>
      <Modal
        open={show}
        onCancel={handleClose}
        centered
        footer={null}
        className="appointment-modal-redesigned"
        width={320}
        closeIcon={null}
      >
        <div className="modal-content-wrapper">
          {/* Decorative Background Elements */}
          <div className="modal-bg-decoration">
            <div className="bg-circle bg-circle-1"></div>
            <div className="bg-circle bg-circle-2"></div>
            <div className="bg-circle bg-circle-3"></div>
          </div>

          {/* Close Button */}
          <button className="modal-close-btn" onClick={handleClose}>
            <FaTimes />
          </button>

          {/* Header Section */}
          <div className="modal-header-section">
            <div className="service-icon-wrapper">
              <div className="service-icon-ring"></div>
              <div className="service-icon">
                <FaUserNurse />
              </div>
              <div className="service-icon-pulse"></div>
            </div>
            
            <div className="availability-badge">
              <FaClock className="badge-icon" />
              <span>24/7 Available</span>
            </div>
          </div>

          {/* Service Info Section */}
          <div className="modal-info-section">
            <h2 className="service-title">{serviceName}</h2>
            <p className="service-tagline">Professional Home Healthcare</p>
            
            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <FaStar className="trust-icon star" />
                <span>4.8 Rating</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <FaCheckCircle className="trust-icon check" />
                <span>Verified</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <FaShieldAlt className="trust-icon shield" />
                <span>Trusted</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="modal-actions">
            <button className="action-btn book-now-btn" onClick={handleBookNow}>
              <div className="btn-icon-wrapper">
                <FaPhone className="btn-icon" />
              </div>
              <div className="btn-text-wrapper">
                <span className="btn-main-text">Book Now</span>
                <span className="btn-sub-text">Instant Confirmation</span>
              </div>
              <div className="btn-arrow">→</div>
            </button>

            <button className="action-btn callback-btn" onClick={handleCallbackClick}>
              <div className="btn-icon-wrapper callback-icon">
                <FaHeadset className="btn-icon" />
              </div>
              <div className="btn-text-wrapper">
                <span className="btn-main-text">Request Callback</span>
                <span className="btn-sub-text">We'll call you back</span>
              </div>
              <div className="btn-arrow">→</div>
            </button>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <div className="footer-content">
              <FaHeart className="footer-heart" />
              <span>Your Health, Our Priority</span>
            </div>
          </div>
        </div>
      </Modal>

      {showCallbackModal && (
        <CallbackModal
          show={showCallbackModal}
          handleClose={handleCallbackClose}
          serviceName={serviceName}
        />
      )}
    </>
  )
}

export default AppointmentModal
