'use client'

import { useState, useEffect } from "react"
import "./all-services.css"
import AppointmentModal from "../appointment-modal/AppointmentModal"
import cards from "../../util/serviceList"
import { FaPlus, FaMinus, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaUserNurse, FaHospital, FaBrain, FaLungs, FaHome, FaPills, FaStethoscope, FaHeartbeat, FaClock, FaShieldAlt, FaUsers, FaHandHoldingHeart, FaUserMd, FaAmbulance, FaPrescriptionBottleAlt } from 'react-icons/fa'

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
  
  // Service locations
  const serviceLocations = [
    "Pitampura, Delhi",
    "Gurgaon",
    "Faridabad",
    "Noida",
    "Ghaziabad",
    "Punjab",
    "Mumbai",
    "Kolkata"
  ]
  
  // Service descriptions based on the PDF content
  const serviceDescriptions = {
    "Nurse": "Our professional nursing services provide skilled care at home, including medication management, wound care, IV therapy, and vital signs monitoring. Our nurses are trained to handle post-operative care, chronic disease management, and specialized treatments.",
    "Physiotherapy Center": "Our physiotherapy services help patients recover mobility and function through personalized exercise programs, manual therapy, and rehabilitation techniques. We treat conditions like arthritis, sports injuries, post-surgery recovery, and neurological disorders.",
    "Doctor Visit": "Our home doctor visits bring medical expertise to your doorstep. Our physicians provide consultations, diagnoses, prescriptions, and follow-up care for acute illnesses, chronic conditions, and routine check-ups without the need to travel.",
    "Elderly Care": "Our specialized elderly care services focus on maintaining dignity and independence for seniors. We provide assistance with daily activities, medication management, companionship, and specialized care for conditions like dementia and Alzheimer's.",
    "Mother & Child Care": "Our mother and child care services support new mothers and infants with postnatal care, breastfeeding support, infant care education, and monitoring of both mother and baby's health during the crucial early weeks and months.",
    "Medical Equipment": "We provide a wide range of medical equipment for home use, including hospital beds, wheelchairs, oxygen concentrators, CPAP machines, and mobility aids. All equipment is professionally installed with training provided.",
    "Medicine At Home": "Our medicine delivery service brings prescribed medications directly to your door, ensuring you never miss a dose. We handle regular prescriptions, emergency medications, and can coordinate with your healthcare providers.",
    "Patient Assistant": "Our patient assistants provide non-medical support for daily activities, including bathing, dressing, meal preparation, light housekeeping, and companionship, allowing patients to maintain independence and quality of life at home.",
    "ECG, Xray at Home": "Our diagnostic services bring essential tests to your home, including ECGs, X-rays, and other imaging services. Our technicians use portable, hospital-grade equipment to provide accurate results without the need for hospital visits.",
    "Ambulance Services": "Our 24/7 ambulance services provide emergency medical transportation with fully equipped vehicles and trained paramedics. We ensure safe, prompt transport for emergencies, hospital transfers, and scheduled medical appointments.",
    "Blood Test Packages": "Our comprehensive blood testing services include various health packages for preventive screening, chronic disease monitoring, and diagnostic purposes. Our phlebotomists collect samples at home with results delivered electronically.",
    "Sample Collection": "Our home sample collection service provides convenient, professional collection of blood, urine, and other specimens for laboratory testing. Our technicians use proper protocols to ensure sample integrity and accurate results."
  }

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

  // Detailed Services Data
  const detailedServices = {
    careGiver: {
      title: "Care Giver Trained Care Attendants",
      subtitle: "@Home For 12/24 Hours Delhi NCR",
      icon: FaUserNurse,
      services: [
        "Caregivers In Activities Of Daily Living",
        "Sponge Bath Hygiene",
        "Wheelchair Mobilization",
        "Bedridden Patient Care",
        "Medication Reminders",
        "Meal Preparation & Feeding Assistance",
        "Personal Hygiene Assistance",
        "Dressing & Grooming Support",
        "Companionship & Emotional Support",
        "Light Housekeeping",
        "Vital Signs Monitoring",
        "Emergency Response Coordination"
      ]
    },
    icuNurse: {
      title: "Professional Qualified ICU Nurse Care",
      subtitle: "@Home 12/24 Hours Near you services",
      icon: FaHospital,
      services: [
        "Vital Sign Check & Monitoring",
        "IM Injections/IV Infusion/Injections & Patient Monitoring",
        "Tracheostomy Care & Management",
        "Ventilator Management",
        "Central Line Care",
        "Wound Dressing & Care",
        "Nasogastric Tube Management",
        "Catheter Care",
        "Oxygen Therapy Management",
        "Post-Operative Care",
        "Critical Care Monitoring"
      ]
    },
    neuroCare: {
      title: "Best Neuro Care Services",
      subtitle: "Specialized Neurological Care at Home",
      icon: FaBrain,
      benefits: [
        "Specialized care for stroke patients",
        "Parkinson's disease management",
        "Alzheimer's and dementia care",
        "Spinal cord injury rehabilitation",
        "Seizure management and monitoring",
        "Cognitive therapy support",
        "Mobility assistance for neurological conditions",
        "Speech and swallowing therapy coordination"
      ],
      description: "Our neuro care services provide specialized support for patients with neurological conditions, ensuring comprehensive care in the comfort of your home."
    },
    cancerCare: {
      title: "Cancer Caring Services Oncology",
      subtitle: "Comprehensive Cancer Care Support",
      icon: FaLungs,
      services: [
        "Chemotherapy support and monitoring",
        "Pain management",
        "Nutritional counseling and diet management",
        "Wound care for surgical sites",
        "Emotional and psychological support",
        "Medication management",
        "Symptom monitoring and reporting",
        "Coordination with oncologists"
      ],
      dietInfo: "Our cancer care includes specialized diet management focusing on maintaining strength, managing side effects, and supporting recovery through proper nutrition."
    },
    icuSetup: {
      title: "ICU Setup @Home",
      subtitle: "Complete ICU Environment at Your Home",
      icon: FaHome,
      components: [
        "Hospital-grade beds with adjustable positions",
        "Ventilator systems",
        "Oxygen concentrators",
        "Cardiac monitors",
        "IV pumps and infusion systems",
        "Suction machines",
        "Emergency equipment and supplies",
        "Professional installation and training"
      ],
      benefits: [
        "Cost-effective alternative to hospital ICU",
        "Familiar and comfortable environment",
        "Reduced risk of hospital-acquired infections",
        "24/7 professional monitoring",
        "Family involvement in care",
        "Personalized care plans"
      ],
      challenges: [
        "Requires adequate space",
        "Need for reliable power supply",
        "Regular equipment maintenance",
        "Coordination with multiple healthcare providers"
      ]
    },
    medicineDelivery: {
      title: "Medicine Delivered @Home",
      subtitle: "Convenient Prescription Delivery Service",
      icon: FaPills,
      features: [
        "Prescription medication delivery",
        "Over-the-counter medications",
        "Medical supplies and equipment",
        "Scheduled refills",
        "Emergency medication delivery",
        "Prescription verification",
        "Temperature-controlled storage for sensitive medications",
        "Insurance coordination"
      ],
      process: [
        "Submit prescription via phone or online",
        "Verification by licensed pharmacists",
        "Same-day or scheduled delivery",
        "Secure packaging and handling",
        "Delivery confirmation"
      ]
    }
  }

  // Dementia Care Tips
  const dementiaTips = {
    title: "Tips for Caregivers & Family's of People With Dementia",
    tips: [
      {
        title: "Dementia Care Services at Home",
        content: "Dementia care services at home provide personalized support tailored to each individual's needs. Our trained caregivers understand the unique challenges of dementia and provide compassionate, patient-centered care that maintains dignity and quality of life."
      },
      {
        title: "Personal Care Assistance",
        content: "Personal care assistance with daily activities including bathing, dressing, grooming, and toileting. Our caregivers are trained in dementia-specific techniques to reduce anxiety and maintain independence as much as possible."
      },
      {
        title: "Staff Care Approach",
        content: "Our staff follows a person-centered care approach, focusing on the individual's remaining abilities rather than limitations. We create a safe, structured environment with consistent routines that help reduce confusion and agitation."
      },
      {
        title: "Communication Strategies",
        content: "Our caregivers use effective communication techniques including simple, clear language, maintaining eye contact, and providing reassurance. We understand that non-verbal communication is equally important."
      },
      {
        title: "Safety Management",
        content: "We implement safety measures to prevent wandering, falls, and other risks while maintaining the patient's sense of freedom and autonomy. This includes environmental modifications and constant supervision."
      },
      {
        title: "Family Support",
        content: "We provide education and support to family members, helping them understand the condition and learn effective caregiving techniques. Regular updates and communication ensure families stay informed and involved."
      }
    ]
  }

  // Benefits Data
  const benefits = {
    doctorVisit: {
      title: "Benefits doctor visit @home on call support",
      icon: FaStethoscope,
      benefits: [
        {
          title: "Convenience",
          description: "No need to travel to clinics or hospitals. Receive expert medical consultation in the comfort of your home, saving time and reducing stress."
        },
        {
          title: "Reduced Exposure",
          description: "Minimize exposure to infections and illnesses commonly found in hospital waiting rooms, especially important for immunocompromised patients."
        },
        {
          title: "Personalized Attention",
          description: "One-on-one consultations with dedicated time for thorough examination and discussion of health concerns without the rush of clinic visits."
        },
        {
          title: "Comprehensive Assessment",
          description: "Doctors can assess your home environment, lifestyle factors, and family dynamics that may impact your health, providing more holistic care."
        },
        {
          title: "Follow-up Care",
          description: "Easy scheduling of follow-up visits to monitor progress, adjust treatments, and ensure continuity of care without repeated hospital visits."
        },
        {
          title: "Emergency Response",
          description: "Quick access to medical professionals for urgent but non-emergency situations, providing peace of mind and timely intervention."
        },
        {
          title: "Family Involvement",
          description: "Family members can participate in consultations, ask questions, and better understand the patient's condition and care requirements."
        }
      ],
      targetPatients: [
        "Elderly patients",
        "Patients with mobility issues",
        "Post-surgical patients",
        "Chronic disease patients",
        "Children and infants",
        "Patients with disabilities"
      ]
    },
    nurseOnCall: {
      title: "Nurse on Call Benefits",
      icon: FaHeartbeat,
      benefits: [
        {
          title: "24/7 Availability",
          description: "Round-the-clock access to professional nursing care for emergencies, medication administration, and health monitoring whenever needed."
        },
        {
          title: "Skilled Medical Care",
          description: "Expert nursing services including wound care, IV therapy, injections, vital signs monitoring, and post-operative care at home."
        },
        {
          title: "Medication Management",
          description: "Professional administration of medications, monitoring for side effects, and ensuring proper dosage and timing for optimal treatment outcomes."
        },
        {
          title: "Health Monitoring",
          description: "Regular monitoring of vital signs, symptoms, and overall health status with detailed reporting to primary physicians."
        },
        {
          title: "Patient Education",
          description: "Education on disease management, medication compliance, lifestyle modifications, and self-care techniques to improve health outcomes."
        },
        {
          title: "Coordination of Care",
          description: "Seamless coordination with doctors, specialists, and other healthcare providers to ensure comprehensive and integrated care."
        }
      ],
      useCases: [
        "Post-surgical recovery",
        "Chronic disease management",
        "Elderly care",
        "Palliative care",
        "Rehabilitation support",
        "Emergency medical situations"
      ]
    },
    medicineDelivery: {
      title: "Medicine Delivery Benefits",
      icon: FaPrescriptionBottleAlt,
      benefits: [
        {
          title: "Never Miss a Dose",
          description: "Timely delivery ensures you never miss important medications, improving treatment adherence and health outcomes."
        },
        {
          title: "Time Saving",
          description: "Save valuable time by avoiding trips to pharmacies, especially beneficial for those with mobility issues or busy schedules."
        },
        {
          title: "Expert Verification",
          description: "All prescriptions are verified by licensed pharmacists to ensure accuracy, proper dosage, and drug interaction safety."
        },
        {
          title: "Privacy and Discretion",
          description: "Discreet delivery of sensitive medications with proper packaging and handling to maintain privacy and dignity."
        },
        {
          title: "Cost Effective",
          description: "Competitive pricing with options for insurance coordination and bulk ordering discounts for long-term medications."
        },
        {
          title: "Emergency Availability",
          description: "Emergency medication delivery service for urgent situations, ensuring critical medications are available when needed most."
        }
      ],
      howItWorks: [
        "Submit prescription via phone, app, or website",
        "Our pharmacy team verifies and processes the order",
        "Medications are carefully prepared and packaged",
        "Secure delivery to your doorstep",
        "Confirmation and receipt provided"
      ],
      considerations: [
        "Prescription validity requirements",
        "Storage instructions for temperature-sensitive medications",
        "Refrigeration needs for certain medications",
        "Delivery timeframes and scheduling options"
      ]
    }
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
        <section>
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
        </section>

        {/* Detailed Services Section */}
        <section className="detailed-services-section" id="detailed-services">
          <div className="detailed-services-container">
            <h2 className="section-title">Explore comprehensive details about our specialized healthcare services</h2>
            {/* <p className="section-subtitle">Explore comprehensive details about our specialized healthcare services</p> */}
            
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

              {/* Neuro Care Services */}
              <div className="accordion-item">
                <div 
                  className={`accordion-header ${activeAccordion === "neuroCare" ? "active" : ""}`}
                  onClick={() => toggleAccordion("neuroCare")}
                >
                  {(() => {
                    const IconComponent = detailedServices.neuroCare.icon;
                    return <IconComponent className="accordion-icon" />;
                  })()}
                  <div className="accordion-header-content">
                    <h3>{detailedServices.neuroCare.title}</h3>
                    <p className="accordion-subtitle">{detailedServices.neuroCare.subtitle}</p>
                  </div>
                  {activeAccordion === "neuroCare" ? <FaMinus /> : <FaPlus />}
                </div>
                <div className={`accordion-content ${activeAccordion === "neuroCare" ? "active" : ""}`}>
                  <p className="service-description">{detailedServices.neuroCare.description}</p>
                  <ul className="service-list">
                    {detailedServices.neuroCare.benefits.map((benefit, index) => (
                      <li key={index} className="service-list-item">
                        <FaCheckCircle className="check-icon" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cancer Care Services */}
              <div className="accordion-item">
                <div 
                  className={`accordion-header ${activeAccordion === "cancerCare" ? "active" : ""}`}
                  onClick={() => toggleAccordion("cancerCare")}
                >
                  {(() => {
                    const IconComponent = detailedServices.cancerCare.icon;
                    return <IconComponent className="accordion-icon" />;
                  })()}
                  <div className="accordion-header-content">
                    <h3>{detailedServices.cancerCare.title}</h3>
                    <p className="accordion-subtitle">{detailedServices.cancerCare.subtitle}</p>
                  </div>
                  {activeAccordion === "cancerCare" ? <FaMinus /> : <FaPlus />}
                </div>
                <div className={`accordion-content ${activeAccordion === "cancerCare" ? "active" : ""}`}>
                  <ul className="service-list">
                    {detailedServices.cancerCare.services.map((service, index) => (
                      <li key={index} className="service-list-item">
                        <FaCheckCircle className="check-icon" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="diet-info-box">
                    <h4>Diet Management</h4>
                    <p>{detailedServices.cancerCare.dietInfo}</p>
                  </div>
                </div>
              </div>

              {/* ICU Setup */}
              <div className="accordion-item">
                <div 
                  className={`accordion-header ${activeAccordion === "icuSetup" ? "active" : ""}`}
                  onClick={() => toggleAccordion("icuSetup")}
                >
                  {(() => {
                    const IconComponent = detailedServices.icuSetup.icon;
                    return <IconComponent className="accordion-icon" />;
                  })()}
                  <div className="accordion-header-content">
                    <h3>{detailedServices.icuSetup.title}</h3>
                    <p className="accordion-subtitle">{detailedServices.icuSetup.subtitle}</p>
                  </div>
                  {activeAccordion === "icuSetup" ? <FaMinus /> : <FaPlus />}
                </div>
                <div className={`accordion-content ${activeAccordion === "icuSetup" ? "active" : ""}`}>
                  <div className="icu-setup-info">
                    <div className="info-section">
                      <h4>Components Included</h4>
                      <ul className="service-list">
                        {detailedServices.icuSetup.components.map((component, index) => (
                          <li key={index} className="service-list-item">
                            <FaCheckCircle className="check-icon" />
                            <span>{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="info-section">
                      <h4>Benefits</h4>
                      <ul className="service-list">
                        {detailedServices.icuSetup.benefits.map((benefit, index) => (
                          <li key={index} className="service-list-item">
                            <FaCheckCircle className="check-icon" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="info-section">
                      <h4>Considerations</h4>
                      <ul className="service-list">
                        {detailedServices.icuSetup.challenges.map((challenge, index) => (
                          <li key={index} className="service-list-item">
                            <FaClock className="check-icon" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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

        {/* Dementia Care Tips Section */}
        <section className="dementia-tips-section" id="dementia-care">
          <div className="dementia-tips-container">
            <h2 className="section-title">{dementiaTips.title}</h2>
            <div className="tips-grid">
              {dementiaTips.tips.map((tip, index) => (
                <div key={index} className="tip-card">
                  <h3>{tip.title}</h3>
                  <p>{tip.content}</p>
                </div>
              ))}
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



