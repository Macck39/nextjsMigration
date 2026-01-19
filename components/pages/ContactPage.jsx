'use client'

import { useState } from "react"
import "./contact-us.css"
import { BiPhoneCall, BiSolidTime } from "react-icons/bi"
import { FaLocationDot, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaExternalLinkAlt } from "react-icons/fa"
import MapComponent from "../map/MapComponent"
import cards from "../../util/serviceList"
import { useNotification } from "../NotificationContext"
import { createEnquiry } from "../../util/api"

const ContactPage = () => {
  const servicesOptions = cards.map((item) => item.title)
  const { addNotification } = useNotification()

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
      const response = await createEnquiry(enquiryData)
      if (response) {
        addNotification("Enquiry Submitted Successfully", "success", 3000)
        setEnquiryData({
          fullname: "",
          email: "",
          mobile: "",
          location: "",
          message: "",
          service: "",
        })
      } else {
        addNotification("Enquiry Submission Failed", "error", 3000)
      }
    } catch (error) {
      console.error("Error Submitting Enquiry", error)
      addNotification(error.message, "error", 3000)
    }
  }

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1BdL9fmENZ/",
      icon: <FaFacebook />,
      color: "#1877f2"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ragininursingbureau",
      icon: <FaInstagram />,
      color: "#e4405f"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/posts/ragini-nursing-bureau_elderycaresefty-activity-7319251713406705664-CkB1",
      icon: <FaLinkedin />,
      color: "#0077b5"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@RAGININURSINGBUREAU1",
      icon: <FaYoutube />,
      color: "#ff0000"
    },
    {
      name: "Pinterest",
      url: "https://pin.it/1YR2F8ESB",
      icon: <FaPinterest />,
      color: "#e60023"
    }
  ]

  // Quick links
  const quickLinks = [
    {
      name: "Our Website",
      url: "https://ragininursingbureau.com/",
      icon: "🌐"
    },
    {
      name: "Google Maps",
      url: "https://g.co/kgs/si1G8hY",
      icon: "📍"
    },
    {
      name: "JustDial",
      url: "https://www.justdial.com/Delhi/Ragini-Nursing-Bureau-Near-Shakurpur-Samrat-Cinema-Shakurpur-Colony/011PXX11-XX11-211112125145-V6D9_BZDET",
      icon: "📱"
    }
  ]
  
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
              H-29, Anandvas, DDA <br />
              Market Block, H, Shakurpur <br />
              Colony, Shakurpur, Samrat Cinema, <br />
              Shakurpur Colony, Delhi 110034
            </p>
          </div>

          <div className="contact-column">
            <div className="contact-icon-wrapper">
              <BiPhoneCall className="contact-main-icon" />
            </div>
            <h3 className="contact-column-title">Contact Us</h3>
            <div className="contact-links">
              <a
                href="mailto:info@ragininursingbureau.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <FaEnvelope className="inline-icon" />
                info@ragininursingbureau.com
              </a>
              <div className="contact-number">
                <a href="tel:+91-7859989007" className="contact-link-item">
                  <FaPhone className="inline-icon" />
                  +91-7859989007
                </a>
                <a href="tel:+91-7678267005" className="contact-link-item">
                  <FaWhatsapp className="inline-icon whatsapp-color" />
                  +91-7678267005
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
              <strong>Available 24/7</strong><br />
              Mon - Sun : Open All Day<br />
              24 Hours Service
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
                  {social.icon}
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

      {/* Map and Form Section */}
      <section className="contact-section">
        <div className="contact-map-form-container">
          <div className="map-container">
            <h3 className="map-heading">Find Us Here</h3>
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
                    type="number"
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917678267005"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  )
}

export default ContactPage
