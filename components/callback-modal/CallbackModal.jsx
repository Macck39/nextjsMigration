'use client'

import { useState, useEffect } from "react"
import { Modal, message } from "antd"
import "./callback-modal.css"
import cards from "../../util/serviceList"
import { callbackRequest } from "../../util/api"
import { 
  FaTimes, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaHeadset,
  FaCheckCircle,
  FaPaperPlane,
  FaSpinner
} from "react-icons/fa"
import { MdMedicalServices } from "react-icons/md"

const CallbackModal = ({ show, handleClose, serviceName }) => {
  const servicesOptions = cards.map((item) => item.title)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    service: serviceName ||"",
    location: "",
  })

  // Update service when modal opens or serviceName changes
  useEffect(() => {
    if (show && serviceName) {
      // Find matching service from options (case-insensitive match)
      const matchedService = servicesOptions.find(
        option => option.toLowerCase() === serviceName.toLowerCase()
      ) || serviceName
      
      setFormData(prev => ({ ...prev, service: matchedService }))
    }
  }, [show, serviceName, servicesOptions])

  // Reset form and success state when modal opens
  useEffect(() => {
    if (show) {
      setIsSuccess(false)
    }
  }, [show])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await callbackRequest(formData)
      setIsSuccess(true)
      message.success("Callback request submitted successfully!")
      
      // Close modal after showing success
      setTimeout(() => {
        handleClose()
        setFormData({
          fullname: "",
          email: "",
          mobile: "",
          service: serviceName || "",
          location: "",
        })
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      console.error("Error submitting callback request:", error)
      message.error("Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal
      open={show}
      onCancel={handleClose}
      centered
      footer={null}
      className="callback-modal-redesigned"
      width={300}
      closeIcon={null}
    >
      <div className="callback-content-wrapper">
        {/* Background Decoration */}
        <div className="callback-bg-decoration">
          <div className="callback-bg-circle callback-bg-1"></div>
          <div className="callback-bg-circle callback-bg-2"></div>
        </div>

        {/* Close Button */}
        <button className="callback-close-btn" onClick={handleClose}>
          <FaTimes />
        </button>

        {/* Success State */}
        {isSuccess ? (
          <div className="callback-success">
            <div className="success-icon-wrapper">
              <FaCheckCircle className="success-icon" />
            </div>
            <h3>Request Submitted!</h3>
            <p>We'll call you back shortly</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="callback-header">
              <div className="callback-icon-wrapper">
                <FaHeadset className="callback-main-icon" />
              </div>
              <h2 className="callback-title">Request a Callback</h2>
              {serviceName && (
                <div className="selected-service-badge">
                  <MdMedicalServices className="badge-service-icon" />
                  <span>{serviceName}</span>
                </div>
              )}
              <p className="callback-subtitle">Fill in your details & we'll reach out</p>
            </div>

            {/* Form */}
            <form className="callback-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <div className="field-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Your Name"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-field">
                <div className="field-icon">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-field">
                <div className="field-icon">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-field">
                <div className="field-icon">
                  <MdMedicalServices />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Service</option>
                  {servicesOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <div className="field-icon">
                  <FaMapMarkerAlt />
                </div>
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="callback-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="btn-spinner" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-send-icon" />
                    <span>Request Callback</span>
                  </>
                )}
              </button>
            </form>

            {/* Footer Note */}
            <p className="callback-footer-note">
              We respect your privacy. Your information is safe with us.
            </p>
          </>
        )}
      </div>
    </Modal>
  )
}

export default CallbackModal
