'use client'

import { useState } from "react"
import "./Videos.css"
import { FaUserNurse,FaHospital,FaBrain,FaLungs,FaHome,FaPills,FaPlus,FaMinus,FaCheckCircle } from "react-icons/fa"


const VideosPage = () => {

  const [activeAccordion, setActiveAccordion] = useState(null)

  const [currentVideo, setCurrentVideo] = useState({
    src: "https://youtube.com/embed/duwQNtb-7rw?si=SKld_sSO0AT36jbL",
    title: "Default Video",
  })
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
  
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/uEXSBuhJ1AA?si=thCqm7RBzg6vlleI",
      title: "#Medicall #exbihition",
      description: "all hospital requiredment Medical Equipment Pan India",
      thumbnail: "/assets/Mask group.png",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/cC5sdwRsu4g",
      title: "#घाव की ड्रेसिंग करने का तरीका",
      description: "Dressing kaise karte hai by Dr.ANMOL KUMAR",
      thumbnail: "/assets/dressing.jpg",
    },
    {
      id: 3,
      src: "https://youtube.com/embed/duwQNtb-7rw?si=SKld_sSO0AT36jbL",
      title: "Home Service",
      description: "Bahut Dino se Office nahi aa rahe.",
      thumbnail: "/assets/IVF.png",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/saYYa6rbjb0",
      title: "Home Service",
      description: "Surgery ke baad sankraman",
      thumbnail: "/assets/surgery.jpg",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/5XXRNJE2iMU",
      title: "homehealthcare",
      description: "आपके माता पिता आपके बच्चे आपके अपनों का ख्याल हम रखते",
      thumbnail: "/assets/homeheathcare.jpg",
    },
  ]
  
  const handleVideoClick = (video) => {
    setCurrentVideo({
      src: video.src,
      title: video.title,
    })
  }




  // Dementia Care Tips (moved from Services page)
  const dementiaTips = {
    title: "Tips for Caregivers & Family's of People With Dementia",
    tips: [
      {
        title: "Dementia Care Services at Home",
        content:
          "Dementia care services at home provide personalized support tailored to each individual's needs. Our trained caregivers understand the unique challenges of dementia and provide compassionate, patient-centered care that maintains dignity and quality of life.",
      },
      {
        title: "Personal Care Assistance",
        content:
          "Personal care assistance with daily activities including bathing, dressing, grooming, and toileting. Our caregivers are trained in dementia-specific techniques to reduce anxiety and maintain independence as much as possible.",
      },
      {
        title: "Staff Care Approach",
        content:
          "Our staff follows a person-centered care approach, focusing on the individual's remaining abilities rather than limitations. We create a safe, structured environment with consistent routines that help reduce confusion and agitation.",
      },
      {
        title: "Communication Strategies",
        content:
          "Our caregivers use effective communication techniques including simple, clear language, maintaining eye contact, and providing reassurance. We understand that non-verbal communication is equally important.",
      },
      {
        title: "Safety Management",
        content:
          "We implement safety measures to prevent wandering, falls, and other risks while maintaining the patient's sense of freedom and autonomy. This includes environmental modifications and constant supervision.",
      },
      {
        title: "Family Support",
        content:
          "We provide education and support to family members, helping them understand the condition and learn effective caregiving techniques. Regular updates and communication ensure families stay informed and involved.",
      },
    ],
  }
 
  return (
    <section>
      <div className="videos-container">
      
      <div className="image-conatiner">
        <div className="about-banner"></div>
      </div>

      {/* <h2 className="videos-title">Health Videos & Helpful Information</h2> */}

      <div className="container">
        <div className="left-section">
          <div className="video corner-wrapper">
            <iframe
              width="720"
              height="315"
              src={currentVideo.src}
              title={`YouTube video player - ${currentVideo.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* <div className="youtube-channel-info">
            <img
              src="/assets/youtube-profile-image.jpg"
              alt="Profile"
              className="youtube-profile-photo"
            />
            <div className="youtube-channel-details">
              <p className="youtube-channel-name">Ragini Nursing Bureau</p>
            </div>
          </div> */}
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

      </div>

      

      {/* Dementia Care Tips Section (moved from Services page) */}
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

    </section>
  )
}

export default VideosPage



