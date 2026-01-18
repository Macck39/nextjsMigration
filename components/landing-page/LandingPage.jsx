'use client'

import { useState } from "react"
import "./landing-page.css"
import Image from "next/image"
import Link from "next/link"
import AppointmentModal from "../appointment-modal/AppointmentModal"

import { FaUserNurse, FaHospital, FaSmile, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import cards from "../../util/serviceList"
import { createEnquiry } from "../../util/api"
import { useNotification } from "../NotificationContext"

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
  
  // Service locations
  const serviceLocations = [
    "Pitampura Delhi", "Gurgaon", "Faridabad", "Noida", 
    "Ghaziabad", "Panjab", "Mumbai", "Kolkata"
  ]

  const [testimonials] = useState([
    {
      text: '"Very professional at home medical services offered by Ragini Nursing Bureau. Will definitely recommend it to everyone who is in need! Thank you team."',
      author: {
        name: "Swati Bansal",
      },
    },
    {
      text: '"Ragini nursing is the best nursing service provider in Delhi NCR."',
      author: {
        name: "Dev Mandal",
      },
    },
    {
      text: '"Service is good. But behaviour is best."',
      author: {
        name: "Manita Sharma",
      },
    },
    {
      text: '"Their service is very good, I have taken service from all over Delhi."',
      author: {
        name: "Bunty studio B.R",
      },
    },
  ])

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

  const videos = [
   {
      id: 1,
      src: "https://www.youtube.com/embed/uEXSBuhJ1AA?si=thCqm7RBzg6vlleI",
      title: "Experiment",
      description: "Short Description.",
      thumbnail: "/assets/Mask group.png",
    },
    {
      id: 2,
      src: "https://youtube.com/embed/duwQNtb-7rw?si=SKld_sSO0AT36jbL",
      title: "Home Service",
      description: "Bahut Dino se Office nahi aa rahe.",
      thumbnail: "/assets/IVF.png",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/saYYa6rbjb0",
      title: "Home Service",
      description: "Surgery ke baad sankraman",
      thumbnail: "/assets/IVF.png",
    },
  ]

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await createEnquiry(enquiryData)
      console.log(response)
      if (response) {
        addNotification("Enquiry Submitted Successfully", "success", 3000)
        clearForm()
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
        <div className="wrapper">
          <div className="banner-content">
            <h1>Your Health Is Our Concern!</h1>
            <h1>Your Personal Healthcare Assistant</h1>
            <button className="btn" onClick={handleClick}>
              Book an Appointment
            </button>
          </div>
        </div>
        <AppointmentModal show={showModal} handleClose={handleClose} />
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
              <img src="/assets/Frame 427318620.png" alt="Service" />
            </div>
            <div className="service-right-section">
              <div className="service">
                <h2 className="text-center">Services & Enquiry</h2>
                <div className="cards-container">
                  {limitedItems.map((card, index) => (
                    <div className="card"
                      key={index}
                      onClick={() => handleClick(card)}>
                      <img
                        className="card-img-top"
                        src={card.image}
                        alt={`Card ${index + 1}`}
                      />
                      <div className="card-body">
                        <h6>{card.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
               <div id="show-more">
              <Link href="/services">
                Show More
                <span className="p-2">
                  <i className="fa-solid fa-angles-right"></i>
                </span>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center">
        <div className="about-us-section">
          <div className="about-us-content">
            <div className="text-content">
              <h2 className="text-center">About Us</h2>
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
              <img src="/assets/aboutUsDescImg.png" alt="aboutUsDescImg" />
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-section mt-5">
        <div>
          <h2 className="text-center">Why Choose Us ?</h2>
        </div>
        <div className="why-choose-container">
          <div className="product_card">
            <div className="image">
              <img src="/assets/home-service.webp" alt="Home Service" />
            </div>
            <div className="product_info">
              <h2 className="product_name">Home Service</h2>
              <p className="product_description">
                All the nurses are trained to give the best patient care at
                home.
              </p>
            </div>
          </div>
          <div className="product_card">
            <div className="image">
              <img src="/assets/chooseUsImg.png" alt="Care" />
            </div>
            <div className="product_info">
              <h2 className="product_name">Care</h2>
              <p className="product_description">
                We help recover faster at Home by giving proper care.
              </p>
            </div>
          </div>
          <div className="product_card">
            <div className="image">
              <img src="/assets/best-protocol.jpg" alt="Best Protocols" />
            </div>
            <div className="product_info">
              <h2 className="product_name">Best Protocols</h2>
              <p className="product_description">
                All clinical procedures performed are based on best protocols.
              </p>
            </div>
          </div>
          <div className="product_card">
            <div className="image">
              <img src="/assets/happier-you.jpg" alt="Convenience" />
            </div>
            <div className="product_info">
              <h2 className="product_name">Convenience</h2>
              <p className="product_description">
                Be assured for high standards of trusted quality & service
                consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div>
        <div>
        <h2 className="text-center">Our Videos & Real Stories</h2>
      </div>
          <div className="container">
        <div className="left-section">
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
            <img
              src="/assets/youtube-profile-image.jpg"
              alt="Profile"
              className="youtube-profile-photo"
            />
            <div className="youtube-channel-details">
              <p className="youtube-channel-name">Ragini Nursing Bureau</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          {videos.map((video) => (
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
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          <div className="link-container">
            <Link href="/videos" className="d-flex align-items-center">
              <span>Show More </span>
              <span className="ml-1">
                <i className="fa-solid fa-angles-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 className="text-center">Testimonials</h2>
        </div>
        <div className="testimonial-section">
          <div className="testimonial-left">
            <div className="ratings-icon">
              <img src="/assets/Group 89.png" alt="Rating" />
            </div>
          </div>
          <div className="testimonial-right">
            <img src="/assets/,,.png" alt="Colons" className="colons" />
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
        <div>
          <h2 className="text-center">Enquiry</h2>
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
                    type="number"
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
            <img src="/assets/Enquiry-Image.png" alt="Enquiry" className="enquiry-image" />
          </div>
        </div>
        <div className="enquiry-btn-container">
          <button className="enquiry-submit bg-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </section>
    </>
  )
}

export default LandingPage

