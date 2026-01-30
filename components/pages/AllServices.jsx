'use client'

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import "./all-services.css"
import cards from "../../util/serviceList"

// Dynamic import for AppointmentModal - Only loaded when user clicks
const AppointmentModal = dynamic(
  () => import("../appointment-modal/AppointmentModal"),
  { 
    loading: () => null,
    ssr: false 
  }
)
import { FaPlus, FaMinus, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaUserNurse, FaHospital, FaBrain, FaLungs, FaHome, FaPills, FaStethoscope, FaHeartbeat, FaShieldAlt, FaPrescriptionBottleAlt, FaArrowRight } from 'react-icons/fa'
import { serviceLocations, serviceDescriptions, detailedServices, benefits } from "../../util/commonData"

// Featured services with new category images
const featuredServices = [
  { image: "/assets/NursingService.jpeg", title: "Nursing Service", description: "Professional care at home" },
  { image: "/assets/BabyCareAndVaccinationAtHome.jpeg", title: "Baby Care & Vaccination at Home", description: "Expert infant care" },
  { image: "/assets/GetTrainedAttendentServiceAtHome.jpeg", title: "Trained Attendant Service at Home/Hospital Near You", description: "Dedicated caregivers" },
  { image: "/assets/ICUSetupAtHome.jpeg", title: "ICU Setup at Home", description: "Hospital-grade equipment" },
  { image: "/assets/LabTestAtHome.jpeg", title: "Lab Test at Home", description: "Convenient diagnostics" },
  { image: "/assets/MedicineDeliveryAtHomeDelhi.jpeg", title: "Medicine Delivery at Home", description: "Doorstep delivery" },
]

const AllServices = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [expandedService, setExpandedService] = useState(null)
  const [activeAccordion, setActiveAccordion] = useState(null)
  
  // Add animation on scroll effect
  useEffect(() => {
    const cards = document.querySelectorAll('.all_services-card')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })
    
    cards.forEach(card => {
      observer.observe(card)
    })
    
    return () => {
      cards.forEach(card => {
        observer.unobserve(card)
      })
    }
  }, [])

  const handleCardClick = (service, index) => {
    setSelectedService(service);
    setShowModal(true);
  }

  const handleAppointmentClick = (service) => {
    setSelectedService(service)
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section)
  }

  return (
    <>
      <section>
        <div className="all-services-wrapper">
          <div className="all-services-banner">
            <h1 className="all-services-text">OUR SERVICES</h1>
          </div>
        </div>
        <div className="services-intro">
          <h2>Comprehensive Healthcare Solutions</h2>
          <p>At Ragini Nursing Bureau, we offer a wide range of healthcare services designed to meet your needs in the comfort of your home. Our professional team is dedicated to providing high-quality care with compassion and expertise.</p>
          
          <div className="service-locations-banner">
            <h3><FaMapMarkerAlt /> Available in These Locations</h3>
            <div className="location-tags">
              {serviceLocations.map((location, index) => (
                <span key={index} className="location-tag">{location}</span>
              ))}
            </div>
            <div className="service-contact-info">
              <p><FaPhone /> +91 7859989007</p>
                <p><FaEnvelope /> info@ragininursingbureau.com</p>
            </div>
          </div>
        </div>

        {/* All Services List - Text Only Section */}
        <section className="all-services-list-section">
          <div className="services-list-container">
            <h2 className="services-list-title">
              <span className="title-highlight">Our Complete</span> Services
            </h2>
            <p className="services-list-subtitle">Comprehensive healthcare solutions tailored to your needs</p>
            <div className="services-text-grid">
              {cards.map((service, index) => (
                <div 
                  key={index} 
                  className="service-text-item"
                  onClick={() => handleCardClick(service, index)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="service-name">{service.title}</span>
                  <FaArrowRight className="service-arrow" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Care Services Gallery */}
        <section className="featured-services-section">
          <div className="featured-services-container">
            <h2 className="featured-title">
              Featured <span className="title-accent">Care Services</span>
            </h2>
            <p className="featured-subtitle">Specialized healthcare delivered to your doorstep</p>
            <div className="featured-services-grid">
              {featuredServices.map((service, index) => (
                <div 
                  key={index} 
                  className="featured-service-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleAppointmentClick({ title: service.title })}
                >
                  <div className="featured-image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                    />
                    <div className="featured-image-shine"></div>
                  </div>
                  <div className="featured-overlay">
                    <div className="featured-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <span className="featured-cta">Book Now</span>
                    </div>
                  </div>
                  <div className="featured-ring"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section>
          <div className="all_services_wrapper">
            <div className="all_services-cards-container">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={"all_services-card"}
                >
                  <div className="all_services-card-header" onClick={() => handleCardClick(card, index)}>
                    <img
                      className="all_services-card-img-top"
                      src={card.image}
                      alt={`${card.title} service`}
                    />
                    <div className="all_services-card-title">
                      <h6>{card.title}</h6>
                    </div>
                  </div>
                  
                  {expandedService === index && (
                    <div className="all_services-card-content">
                      <p>{serviceDescriptions[card.title]}</p>
                      <div className="service-availability">
                        <h4>Available in:</h4>
                        <div className="location-tags-small">
                          {serviceLocations.slice(0, 4).map((location, idx) => (
                            <span key={idx} className="location-tag-small">{location}</span>
                          ))}
                          {serviceLocations.length > 4 && (
                            <span className="location-tag-small more-locations">+{serviceLocations.length - 4} more</span>
                          )}
                        </div>
                      </div>
                      <button 
                        className="book-service-btn"
                        onClick={() => handleAppointmentClick(card)}
                      >
                        Book Service
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Specialized Premium Services Section */}
        <section className="specialized-care-section" id="specialized-care">
          <div className="specialized-care-container">
            <h2 className="section-title">Our Specialized Premium Care Services</h2>
            <p className="section-subtitle">Expert care for complex medical conditions, delivered with compassion in the comfort of your home</p>
            
            <div className="specialized-cards-staggered">
              {/* Neuro Care */}
              <div className="specialized-card card-left">
                <div className="specialized-card-icon">
                  <FaBrain />
                </div>
                <div className="specialized-card-content">
                  <h3>{detailedServices.neuroCare.title}</h3>
                  <p className="card-subtitle">{detailedServices.neuroCare.subtitle}</p>
                  <p className="card-description">{detailedServices.neuroCare.description}</p>
                  <div className="card-benefits">
                    <h4>Key Services:</h4>
                    <ul>
                      {detailedServices.neuroCare.benefits.slice(0, 4).map((benefit, index) => (
                        <li key={index}>
                          <FaCheckCircle className="list-check-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    className="specialized-btn"
                    onClick={() => handleAppointmentClick({ title: detailedServices.neuroCare.title })}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>

              {/* Cancer Care */}
              <div className="specialized-card card-right">
                <div className="specialized-card-icon">
                  <FaLungs />
                </div>
                <div className="specialized-card-content">
                  <h3>{detailedServices.cancerCare.title}</h3>
                  <p className="card-subtitle">{detailedServices.cancerCare.subtitle}</p>
                  <p className="card-description">Comprehensive oncology care with specialized support for cancer patients and their families.</p>
                  <div className="card-benefits">
                    <h4>Our Services Include:</h4>
                    <ul>
                      {detailedServices.cancerCare.services.slice(0, 4).map((service, index) => (
                        <li key={index}>
                          <FaCheckCircle className="list-check-icon" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="diet-highlight">
                    <FaPills className="diet-icon" />
                    <p>{detailedServices.cancerCare.dietInfo}</p>
                  </div>
                  <button 
                    className="specialized-btn"
                    onClick={() => handleAppointmentClick({ title: detailedServices.cancerCare.title })}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>

              {/* ICU Setup at Home */}
              <div className="specialized-card card-left">
                <div className="specialized-card-icon">
                  <FaHome />
                </div>
                <div className="specialized-card-content">
                  <h3>{detailedServices.icuSetup.title}</h3>
                  <p className="card-subtitle">{detailedServices.icuSetup.subtitle}</p>
                  <p className="card-description">Transform your home into a fully equipped ICU with hospital-grade equipment and 24/7 professional monitoring.</p>
                  <div className="icu-highlights">
                    <div className="highlight-box">
                      <h4>Equipment Includes:</h4>
                      <ul>
                        {detailedServices.icuSetup.components.slice(0, 4).map((component, index) => (
                          <li key={index}>
                            <FaCheckCircle className="list-check-icon" />
                            <span>{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="highlight-box">
                      <h4>Benefits:</h4>
                      <ul>
                        {detailedServices.icuSetup.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index}>
                            <FaShieldAlt className="list-check-icon" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button 
                    className="specialized-btn"
                    onClick={() => handleAppointmentClick({ title: detailedServices.icuSetup.title })}
                  >
                    Setup Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="detailed-services-section" id="detailed-services">
          <div className="detailed-services-container">
            <h2 className="section-title">Additional Care Services</h2>
            <p className="section-subtitle">Comprehensive healthcare support tailored to your needs</p>
            
            <div className="service-criteria-accordion">
              {/* Care Giver Services */}
              <div className="accordion-item">
                <div 
                  className={`accordion-header ${activeAccordion === "careGiver" ? "active" : ""}`}
                  onClick={() => toggleAccordion("careGiver")}
                >
                  {(() => {
                    const IconComponent = detailedServices.careGiver.icon;
                    return <IconComponent className="accordion-icon" />;
                  })()}
                  <div className="accordion-header-content">
                    <h3>{detailedServices.careGiver.title}</h3>
                    <p className="accordion-subtitle">{detailedServices.careGiver.subtitle}</p>
                  </div>
                  {activeAccordion === "careGiver" ? <FaMinus /> : <FaPlus />}
                </div>
                <div className={`accordion-content ${activeAccordion === "careGiver" ? "active" : ""}`}>
                  <ul className="service-list">
                    {detailedServices.careGiver.services.map((service, index) => (
                      <li key={index} className="service-list-item">
                        <FaCheckCircle className="check-icon" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ICU Nurse Services */}
              <div className="accordion-item">
                <div 
                  className={`accordion-header ${activeAccordion === "icuNurse" ? "active" : ""}`}
                  onClick={() => toggleAccordion("icuNurse")}
                >
                  {(() => {
                    const IconComponent = detailedServices.icuNurse.icon;
                    return <IconComponent className="accordion-icon" />;
                  })()}
                  <div className="accordion-header-content">
                    <h3>{detailedServices.icuNurse.title}</h3>
                    <p className="accordion-subtitle">{detailedServices.icuNurse.subtitle}</p>
                  </div>
                  {activeAccordion === "icuNurse" ? <FaMinus /> : <FaPlus />}
                </div>
                <div className={`accordion-content ${activeAccordion === "icuNurse" ? "active" : ""}`}>
                  <ul className="service-list">
                    {detailedServices.icuNurse.services.map((service, index) => (
                      <li key={index} className="service-list-item">
                        <FaCheckCircle className="check-icon" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Medicine Delivery */}
              <div className="accordion-item">
                <div 
                  className={`accordion-header ${activeAccordion === "medicineDelivery" ? "active" : ""}`}
                  onClick={() => toggleAccordion("medicineDelivery")}
                >
                  {(() => {
                    const IconComponent = detailedServices.medicineDelivery.icon;
                    return <IconComponent className="accordion-icon" />;
                  })()}
                  <div className="accordion-header-content">
                    <h3>{detailedServices.medicineDelivery.title}</h3>
                    <p className="accordion-subtitle">{detailedServices.medicineDelivery.subtitle}</p>
                  </div>
                  {activeAccordion === "medicineDelivery" ? <FaMinus /> : <FaPlus />}
                </div>
                <div className={`accordion-content ${activeAccordion === "medicineDelivery" ? "active" : ""}`}>
                  <div className="medicine-delivery-info">
                    <div className="info-section">
                      <h4>Features</h4>
                      <ul className="service-list">
                        {detailedServices.medicineDelivery.features.map((feature, index) => (
                          <li key={index} className="service-list-item">
                            <FaCheckCircle className="check-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="info-section">
                      <h4>Delivery Process</h4>
                      <ol className="process-list">
                        {detailedServices.medicineDelivery.process.map((step, index) => (
                          <li key={index} className="process-item">
                            <span className="process-number">{index + 1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="benefits-section" id="benefits">
          <div className="benefits-container">
            <h2 className="section-title">Service Benefits</h2>
            <p className="section-subtitle">Discover the advantages of choosing our home healthcare services</p>

            {/* Doctor Visit Benefits */}
            <div className="benefit-category">
              <div className="benefit-category-header">
                {(() => {
                  const IconComponent = benefits.doctorVisit.icon;
                  return <IconComponent className="category-icon" />;
                })()}
                <h3>{benefits.doctorVisit.title}</h3>
              </div>
              <div className="benefits-grid">
                {benefits.doctorVisit.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon-wrapper">
                      <FaStethoscope className="benefit-icon" />
                    </div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="target-audience">
                <h4>Ideal For:</h4>
                <div className="audience-tags">
                  {benefits.doctorVisit.targetPatients.map((patient, index) => (
                    <span key={index} className="audience-tag">{patient}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Nurse on Call Benefits */}
            <div className="benefit-category">
              <div className="benefit-category-header">
                {(() => {
                  const IconComponent = benefits.nurseOnCall.icon;
                  return <IconComponent className="category-icon" />;
                })()}
                <h3>{benefits.nurseOnCall.title}</h3>
              </div>
              <div className="benefits-grid">
                {benefits.nurseOnCall.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon-wrapper">
                      <FaHeartbeat className="benefit-icon" />
                    </div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="target-audience">
                <h4>Use Cases:</h4>
                <div className="audience-tags">
                  {benefits.nurseOnCall.useCases.map((useCase, index) => (
                    <span key={index} className="audience-tag">{useCase}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Medicine Delivery Benefits */}
            <div className="benefit-category">
              <div className="benefit-category-header">
                {(() => {
                  const IconComponent = benefits.medicineDelivery.icon;
                  return <IconComponent className="category-icon" />;
                })()}
                <h3>{benefits.medicineDelivery.title}</h3>
              </div>
              <div className="benefits-grid">
                {benefits.medicineDelivery.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon-wrapper">
                      <FaPrescriptionBottleAlt className="benefit-icon" />
                    </div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="medicine-delivery-details">
                <div className="detail-box">
                  <h4>How It Works</h4>
                  <ol className="process-list">
                    {benefits.medicineDelivery.howItWorks.map((step, index) => (
                      <li key={index} className="process-item">
                        <span className="process-number">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="detail-box">
                  <h4>Important Considerations</h4>
                  <ul className="service-list">
                    {benefits.medicineDelivery.considerations.map((consideration, index) => (
                      <li key={index} className="service-list-item">
                        <FaShieldAlt className="check-icon" />
                        <span>{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {selectedService && (
        <AppointmentModal
          show={showModal}
          handleClose={handleModalClose}
          service={selectedService}
        />
      )}
    </>
  )
}

export default AllServices



