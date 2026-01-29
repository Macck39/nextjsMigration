'use client'

import { useState } from "react"
import "./contact-us.css"
import { BiPhoneCall, BiSolidTime } from "react-icons/bi"
import { FaLocationDot, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaExternalLinkAlt } from "react-icons/fa"
import MapComponent from "../map/MapComponent"
import cards from "../../util/serviceList"
import { createRequest } from "../../util/api"
import { socialLinks, quickLinks, contactInfo } from "../../util/commonData"
import { message } from "antd"

const ContactPage = () => {
  const servicesOptions = cards.map((item) => item.title)

  const [enquiryData, setEnquiryData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
    service: "",
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setEnquiryData({ ...enquiryData, [name]: value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await createRequest({ ...enquiryData, type: "enquiry" })
      if (response) {
        message.success("Enquiry Submitted Successfully")
        setEnquiryData({
          fullname: "",
          email: "",
          mobile: "",
          location: "",
          message: "",
          service: "",
        })
      } else {
        message.error("Enquiry Submission Failed")
      }
    } catch (error) {
      console.error("Error Submitting Enquiry", error)
      message.error(error.message)
    }
  }

  // Map social media names to their icon components
  const getSocialIcon = (name) => {
    const icons = {
      "Facebook": <FaFacebook />,
      "Instagram": <FaInstagram />,
      "LinkedIn": <FaLinkedin />,
      "YouTube": <FaYoutube />,
      "Pinterest": <FaPinterest />
    }
    return icons[name] || null
  }
  
  return (
    <>
      <section>
        <div className="contact-wrapper">
          <div className="contact-banner">
            <h1 className="contact-text">CONTACT US</h1>
            <p className="contact-subtitle">We're Here to Help You 24/7</p>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-intro-section">
          <h2 className="contact-main-heading">Get In Touch With Us</h2>
          <p className="contact-intro-text">
            Have questions or need assistance? We're here to help! Reach out to us through any of the 
            following channels, and our dedicated team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section>
        <div className="contact-container">
          <div className="contact-column">
            <div className="contact-icon-wrapper">
              <FaLocationDot className="contact-main-icon" />
            </div>
            <h3 className="contact-column-title">Our Office Address</h3>
            <p className="contact-column-text">
              {contactInfo.address.line1} <br />
              {contactInfo.address.line2} <br />
              {contactInfo.address.line3} <br />
              {contactInfo.address.line4}
            </p>
          </div>

          <div className="contact-column">
            <div className="contact-icon-wrapper">
              <BiPhoneCall className="contact-main-icon" />
            </div>
            <h3 className="contact-column-title">Contact Us</h3>
            <div className="contact-links">
              <a
                href={`mailto:${contactInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <FaEnvelope className="inline-icon" />
                {contactInfo.email}
              </a>
              <div className="contact-number">
                <a href={`tel:${contactInfo.phone.primary}`} className="contact-link-item">
                  <FaPhone className="inline-icon" />
                  {contactInfo.phone.primary}
                </a>
                <a href={`tel:${contactInfo.phone.whatsapp}`} className="contact-link-item">
                  <FaWhatsapp className="inline-icon whatsapp-color" />
                  {contactInfo.phone.whatsapp}
                </a>
              </div>
            </div>
          </div>

          <div className="contact-column">
            <div className="contact-icon-wrapper">
              <BiSolidTime className="contact-main-icon" />
            </div>
            <h3 className="contact-column-title">Opening Hours</h3>
            <p className="contact-column-text">
              <strong>{contactInfo.hours.availability}</strong><br />
              {contactInfo.hours.description}
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section">
        <div className="social-container">
          <h2 className="social-heading">Connect With Us</h2>
          <p className="social-subheading">Follow us on social media for updates and health tips</p>
          <div className="social-icons-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-card"
                style={{ '--social-color': social.color }}
              >
                <div className="social-icon-wrapper">
                  {getSocialIcon(social.name)}
                </div>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="quick-links-container">
          <h3 className="quick-links-title">Quick Links</h3>
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-card"
              >
                <span className="quick-link-icon">{link.icon}</span>
                <span className="quick-link-name">{link.name}</span>
                <FaExternalLinkAlt className="external-link-icon" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="promo-banner-section">
        <div className="promo-banner-container">
          <div className="promo-banner-content">
            <h2 className="promo-banner-title">Know Your Health, Own Your Life</h2>
            <p className="promo-banner-text">
              Ragini Nursing Bureau - Your trusted partner for quality home healthcare services across Delhi NCR
            </p>
            <div className="promo-banner-stats">
              <div className="promo-stat">
                <span className="stat-number">1200+</span>
                <span className="stat-label">Staff</span>
              </div>
              <div className="promo-stat">
                <span className="stat-number">24x7</span>
                <span className="stat-label">Service</span>
              </div>
              <div className="promo-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Daily Services</span>
              </div>
            </div>
          </div>
          <div className="promo-banner-image">
            <img 
              src="/updates/Banner.jpeg" 
              alt="Ragini Nursing Bureau Services Banner" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="contact-section">
        <div className="contact-map-form-container">
          <div className="map-container">
            <h3 className="map-heading">
              <b>Head office:</b> <br /> 
              {contactInfo.address.line1}, {contactInfo.address.line2}, {contactInfo.address.line3}, {contactInfo.address.line4}
            </h3>
            <MapComponent />
          </div>
          <div className="contact-enquiry-container">
            <div className="form-header">
              <h3 className="form-title">Send Us a Message</h3>
              <p className="form-subtitle">Fill out the form below and we'll get back to you shortly</p>
            </div>
            <form className="contact-enquiry-form" onSubmit={handleSubmit}>
              <div className="contact-form-fields">
                <div className="contact-input-wrapper">
                  <i className="fas fa-user"></i>
                  <input 
                    type="text"
                    name="fullname"
                    value={enquiryData.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="contact-input-wrapper">
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email"
                    name="email"
                    value={enquiryData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="contact-input-wrapper">
                  <i className="fas fa-phone"></i>
                  <input 
                    type="tel"
                    name="mobile"
                    value={enquiryData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                    required
                  />
                </div>
                <div className="contact-input-wrapper">
                  <i className="fas fa-briefcase"></i>
                  <select
                    name="service"
                    value={enquiryData.service}
                    onChange={handleChange}
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

                <div className="contact-input-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    name="location"
                    value={enquiryData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    required
                  />
                </div>

                <div className="contact-input-wrapper">
                  <textarea
                    name="message"
                    value={enquiryData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center my-1">
                  <button type="submit" className="submit-button">
                    <i className="fas fa-paper-plane"></i> Submit Enquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
