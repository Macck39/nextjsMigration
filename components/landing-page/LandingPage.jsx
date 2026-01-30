'use client'

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import "./landing-page.css"
import Image from "next/image"
import Link from "next/link"

// Dynamic import for AppointmentModal - Only loaded when user clicks
const AppointmentModal = dynamic(
  () => import("../appointment-modal/AppointmentModal"),
  { 
    loading: () => null,
    ssr: false 
  }
)

import { FaUserNurse, FaHospital, FaSmile, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import cards from "../../util/serviceList"
import { createRequest } from "../../util/api"
import { useNotification } from "../NotificationContext"
import { serviceLocations, testimonials, landingVideos, whyChooseUs } from "../../util/commonData"
import { message } from "antd"

const LandingPage = () => {
  const limitedItems = cards.slice(0, 8)
  const servicesOptions = cards.map((item) => item.title)
  const { addNotification } = useNotification()
  const initialEnquiryData = {
    fullname: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
    service: "",
  }
  const [enquiryData, setEnquiryData] = useState(initialEnquiryData)
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const [currentVideo, setCurrentVideo] = useState({
    src: "https://youtube.com/embed/duwQNtb-7rw?si=SKld_sSO0AT36jbL",
    title: "Default Video",
  })

  const handleNextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 2
      return nextIndex >= testimonials.length ? 0 : nextIndex
    })
  }

  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleClick = (service = null) => {
    setSelectedService(service)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setSelectedService(null)
  }

  const clearForm = () => {
    setEnquiryData(initialEnquiryData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEnquiryData({ ...enquiryData, [name]: value })
  }
  
  const handleVideoClick = (video) => {
    setCurrentVideo({
      src: video.src,
      title: video.title,
    })
  }

  const getFieldValue = (value) => (typeof value === "string" ? value.trim() : "")

  const getFriendlyError = (error) => {
    if (!error) return "Failed to submit. Please try again."
    if (error.statusCode === 400) {
      return "Please fill all required fields."
    }
    const messageText = error.message || ""
    if (/validation|required|path\s+`/i.test(messageText)) {
      return "Please fill all required fields."
    }
    return messageText || "Failed to submit. Please try again."
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const requiredFields = ["fullname", "email", "mobile", "location", "service"]
    const hasMissing = requiredFields.some((field) => !getFieldValue(enquiryData[field]))
    if (hasMissing) {
      message.error("Please fill all required fields.")
      return
    }
    try {
      const response = await createRequest({ ...enquiryData, type: "callback" })
      console.log(response)
      if (response) {
        message.success("Callback request submitted successfully!")
        clearForm()
      } else {
        message.error("Failed to submit. Please try again.")
      }
    } catch (error) {
      console.error("Error Submitting Enquiry", error)
      const friendlyMessage = getFriendlyError(error)
      message.error(friendlyMessage)
    }
  }

  return (
    <div className="landing-page">
      <section>
        <div className="wrapper">
          <div className="banner-content">
            <h1>Your Health Is Our Concern!</h1>
            <p className="hero-subtitle">Your personal healthcare assistant</p>
            <button className="btn" onClick={handleClick}>
              Book an Appointment
            </button>
          </div>
        </div>
        <AppointmentModal show={showModal} handleClose={handleClose} service={selectedService} />
      </section>
      <section className="three-button-section">
        <div className="three-button">
          <button className="three-btn">
            <div className="three-btn-icontext">
            <FaHospital style={{ fontSize: '20px', marginBottom: '2px', color: '#4ba889' }} />
            <p className="three-btn-text">8+</p>
            </div>
            <p className="three-btn-text-desc">Years Experience</p>
          </button>
          <button className="three-btn green-btn">
             <div className="three-btn-icontext">
            <FaSmile style={{ fontSize: '22px', marginBottom: '2px', color: '#fff' }} />
            <p className="three-btn-text green-text">500+</p>
             </div>
            <p className="three-btn-text-desc green-text">Satisfied Clients</p>
          </button>
          <button className="three-btn">
             <div className="three-btn-icontext">
            <FaUserNurse style={{ fontSize: '24px', marginBottom: '2px', color: '#4ba889' }} />
            <p className="three-btn-text">100+</p>
             </div>
            <p className="three-btn-text-desc">Expert Nurses</p>
          </button>
        </div>
      </section>
      <section>
        <div className="service-enquiry-container">
          <div className="available-in-section">
            <div className="service-locations-mini">
              <h5><FaMapMarkerAlt /> Available in These Locations</h5>
              <div className="location-tags-mini">
                {serviceLocations.map((location, index) => (
                  <span key={index} className="location-tag-mini">{location}</span>
                ))}
              </div>
              <div className="service-contact-mini">
                <p><FaPhone /> +91 7859989007</p>
                <p><FaEnvelope /> info@ragininursingbureau.com</p>
              </div>
            </div>
          </div>
          
          <div className="service-content">
            <div className="service-left-section">
              <Image 
                src="/assets/Frame 427318620.png" 
                alt="Home Healthcare Services" 
                width={400} 
                height={350}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="service-right-section">
              <div className="service">
                <div className="section-header">
                  <h2 className="section-title">Our Services</h2>
                  <p className="section-subtitle">Choose a service and we’ll call you back.</p>
                </div>
                <div className="cards-container">
                  {limitedItems.map((card, index) => (
                    <div className="card"
                      key={index}
                      onClick={() => handleClick(card)}>
                      <img
                        className="card-img-top"
                        src={card.image}
                        alt={card.title}
                      />
                      <div className="card-body">
                        <h6>{card.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="section-cta">
                  <Link href="/services" className="cta-link">
                    Show all services
                    <span className="p-2">
                      <i className="fa-solid fa-angles-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center">
        <div className="about-us-section">
          <div className="about-us-content">
            <div className="text-content">
              <div className="section-header">
                <h2 className="section-title">About Ragini Nursing Bureau</h2>
              </div>
              <p>
                We Ragini Nursing Bureau at Shakurpur Colony, Delhi, provide
                expertise nursing care by our qualified and trained care takers.
                We are well known for excellent care and personal tailored
                service, which strives to meet our clients requirements
                perfectly. Our trained nurses provide high end quality care to
                patients at home. We are here for you and your family during
                lifes most challenging moments. We aim to give the idea of
                availing services that makes people grow healthy faster by
                putting in less effort and more attention being paid to their
                well being.
              </p>
            </div>
            <div className="image-content">
              {/* <div className="background-image">
                <img src="/assets/Rectangle 57.png" alt="About Us Background" />
              </div>
              <div className="foreground-images">
                <img src="/assets/image 22.png" alt="Vector Image 2" />
                <img
                  src="/assets/Vector.png"
                  alt="Vector Image 1"
                  className="plus-vector"
                />
              </div> */}
              <Image 
                src="/assets/aboutUsDescImg.png" 
                alt="About Ragini Nursing Bureau" 
                width={400} 
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-section mt-5">
        <div className="section-header">
          <h2 className="section-title">Why families choose us</h2>
        </div>
        <div className="why-choose-container">
          {whyChooseUs.map((item, index) => (
            <div className="product_card" key={index}>
              <img 
                src={item.image} 
                alt={item.title} 
              />
              <div className="product_info">
                <h2 className="product_name">{item.title}</h2>
                <p className="product_description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-5">
        <div className="section-header">
          <h2 className="section-title">Patient stories & videos</h2>
        </div>
        <div className="landing-videos-container">
          <div className="landing-videos-left">
            <div className="video corner-wrapper">
              <iframe
                className="video-embed"
                width="100%"
                height="100%"
                src={currentVideo.src}
                title={`YouTube video player - ${currentVideo.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="youtube-channel-info">
              <Image
                src="/assets/youtube-profile-image.jpg"
                alt="Ragini Nursing Bureau YouTube Profile"
                width={50}
                height={50}
                className="youtube-profile-photo"
              />
              <div className="youtube-channel-details">
                <p className="youtube-channel-name">Ragini Nursing Bureau</p>
              </div>
            </div>
          </div>
          <div className="landing-videos-right">
            {landingVideos.map((video) => (
              <div
                className="thumbnail"
                key={video.id}
                onClick={() => handleVideoClick(video)}
              >
                <img
                  className="thumbnail-image"
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                />
                <div className="thumbnail-description">
                  <h4>{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="link-container">
          <Link href="/videos" className="d-flex align-items-center">
            <span>Show more</span>
            <span className="ml-1">
              <i className="fa-solid fa-angles-right"></i>
            </span>
          </Link>
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2 className="section-title">What our clients say</h2>
        </div>
        <div className="testimonial-section">
          <div className="testimonial-left">
            <div className="ratings-icon">
              <Image 
                src="/assets/Group 89.png" 
                alt="Customer Ratings" 
                width={150} 
                height={150}
              />
            </div>
          </div>
          <div className="testimonial-right">
            <Image 
              src="/assets/,,.png" 
              alt="Quotation marks" 
              width={50} 
              height={40}
              className="colons" 
            />
            <div className="testimonial-cards">
              {testimonials
                .slice(currentIndex, currentIndex + 2)
                .map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div>
                        <h5>{testimonial.author.name}</h5>
                        <p>{testimonial.author.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="slider-icon" onClick={handleNextTestimonial}>
              <i className="fas fa-circle-chevron-right"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="section-header">
          <h2 className="section-title">Request a callback</h2>
          <p className="section-subtitle">Tell us what you need — we’ll contact you shortly.</p>
        </div>
        <div className="d-flex container">
          <div className="enquiry-container col-md-9">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="left-fields">
                <div className="input-wrapper">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="fullname"
                    value={enquiryData.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>
                <div className="input-wrapper">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    value={enquiryData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="input-wrapper">
                  <i className="fas fa-phone"></i>
                  <input
                    type="tel"
                    name="mobile"
                    value={enquiryData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                  />
                </div>
                <div className="input-wrapper">
                  <i className="fa-solid fa-square-check"></i>
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
                <div className="input-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    name="location"
                    value={enquiryData.location}
                    onChange={handleChange}
                    placeholder="Location"
                  />
                </div>
              </div>
              <div className="right-field">
                <textarea
                  name="message"
                  value={enquiryData.message}
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="col-md-3">
            <Image 
              src="/assets/Enquiry-Image.png" 
              alt="Request a Callback" 
              width={300} 
              height={350}
              className="enquiry-image"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <div className="enquiry-btn-container">
          <button className="enquiry-submit bg-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

