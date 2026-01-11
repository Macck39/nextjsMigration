'use client'

import { useState } from "react"
import "./contact-us.css"
import { BiPhoneCall, BiSolidTime } from "react-icons/bi"
import { FaLocationDot } from "react-icons/fa6"
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
  
  return (
    <>
      <section>
        <div className="contact-wrapper">
          <div className="contact-banner">
            <h1 className="contact-text">CONTACT US</h1>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-center my-4">CONTACT FOR ANY QUERY</h2>
        </div>
      </section>
      <section>
        <div className="contact-container">
          <div className="contact-column">
            <p>
              <FaLocationDot /> Our Office Address
            </p>
            <p>
              H-29, Anandvas, DDA <br />
              Market Block, H, Shakurpur <br />
              Colony, Shakurpur, Samrat Cinema, <br />
              Shakurpur Colony, Delhi 110034
            </p>
          </div>

          <div className="contact-column">
            <p>
              <BiPhoneCall /> Contact us
            </p>
            <a
              href="mailto:info@ragininursingbureau.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@ragininursingbureau.com
            </a>
            <br />
            <div className="contact-number">
              <a href="tel:+91-7859989007">+91-7859989007</a>,
              <a href="tel:+91-7678267005">+91-7678267005</a>
            </div>
          </div>

          <div className="contact-column">
            <p>
              <BiSolidTime /> Opening Hours
            </p>
            <p>
              Mon - Sun : 12:00 PM - 12:00 PM / <br />
              12:00 AM - 12:00 AM
            </p>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-map-form-container">
          <div className="map-container">
            <MapComponent />
          </div>
          <div className="contact-enquiry-container">
            <form className="contact-enquiry-form" onSubmit={handleSubmit}>
              <div className="contact-form-fields">
                <div className="contact-input-wrapper">
                  <i className="fas fa-user"></i>
                  <input 
                    type="text"
                    name="fullname"
                    value={enquiryData.fullname}
                    onChange={handleChange}
                    placeholder="Full Name" />
                </div>
                <div className="contact-input-wrapper">
                  <i className="fas fa-envelope"></i>
                  <input 
                    type="email"
                    name="email"
                    value={enquiryData.email}
                    onChange={handleChange}
                    placeholder="Email" />
                </div>
                <div className="contact-input-wrapper">
                  <i className="fas fa-phone"></i>
                  <input 
                  type="number"
                  name="mobile"
                  value={enquiryData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  />
                </div>
                <div className="contact-input-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                  <select
                   name="service"
                   value={enquiryData.service}
                   onChange={handleChange}
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
                  />
                  </div>

                <div className="contact-input-wrapper">
                <textarea
                  name="message"
                  value={enquiryData.message}
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
               </div>
               <div className="d-flex justify-content-center my-1">
                <button type="submit" className="submit-button">
                  Submit
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



