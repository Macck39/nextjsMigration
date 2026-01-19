'use client'

import { FaExternalLinkAlt, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import "./HelpfulLinks.css"

const HelpfulLinks = () => {
  // Service areas
  const serviceAreas = [
    "Pitampura", "Rohini", "Azadpur", "Civil Line", "Panjabi Bagh", 
    "Paschim Vihar", "Janakpuri", "Rajouri Garden", "Tilak Nagar", 
    "Dwarka", "New Delhi", "New Gurugram", "Gurugram", "Faridabad", 
    "Noida", "Delhi NCR"
  ]

  // Types of home care services
  const serviceTypes = [
    {
      title: "Personal Care",
      description: "Assistance with activities like bathing, dressing, grooming, and mobility."
    },
    {
      title: "Nursing Care",
      description: "Skilled nursing services such as medication management, wound care, and monitoring vital signs."
    },
    {
      title: "Physiotherapy",
      description: "Rehabilitation and exercise programs to improve mobility and physical function."
    },
    {
      title: "Companionship",
      description: "Providing social interaction, emotional support, and engaging in activities."
    },
    {
      title: "Home Attendant Services",
      description: "Assisting with daily tasks like meal preparation, light housekeeping, and errands."
    },
    {
      title: "Elderly Care",
      description: "Specific services tailored to the needs of older adults, including assistance with age-related challenges."
    }
  ]

  // Benefits of home care
  const benefits = [
    {
      title: "Staying in a Familiar Environment",
      description: "Home care allows individuals to remain in their own homes, surrounded by familiar belongings and routines."
    },
    {
      title: "Personalized Care",
      description: "Services are tailored to individual needs and preferences."
    },
    {
      title: "Improved Quality of Life",
      description: "Home care can enhance independence, comfort, and overall well-being."
    },
    {
      title: "Cost-Effective",
      description: "In some cases, home care can be a more affordable option than institutional care."
    },
    {
      title: "Reduced Risk of Infections",
      description: "By minimizing exposure to healthcare settings, home care can reduce the risk of infections."
    }
  ]

  // Social media and directory links
  const onlinePresence = [
    {
      name: "Website",
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
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/posts/ragini-nursing-bureau_elderycaresefty-activity-7319251713406705664-CkB1",
      icon: "💼"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1BdL9fmENZ/",
      icon: "📘"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ragininursingbureau",
      icon: "📷"
    },
    {
      name: "Pinterest",
      url: "https://pin.it/1YR2F8ESB",
      icon: "📌"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@RAGININURSINGBUREAU1",
      icon: "📺"
    },
    {
      name: "LikeMe",
      url: "https://www.likeme.co.in/delhi/ragini-nursing-bureau/head-office-h-29-shakurpur-near-samrat-cinema-pitam-pura-delhi/000115208",
      icon: "👍"
    },
    {
      name: "BharatiBiz",
      url: "https://www.bharatibiz.com/en/ragini-nursing-bureau-male-female-076782-67005",
      icon: "🏢"
    }
  ]

  return (
    <div className="helpful-links-container">
      <section className="helpful-links-section">
        <h1 className="helpful-links-title">Helpful Links & Resources</h1>
        
        {/* Introduction */}
        <div className="intro-block">
          <h2 className="section-title">About Home Care Support</h2>
          <p>
            Home care support provides old age care services and assistance to individuals who need 
            help with daily living activities, medical care, or companionship while remaining in their 
            homes. It encompasses a range of services, including nursing care, personal care, physiotherapy, 
            and assistance with daily tasks. This type of care is particularly beneficial for the elderly, 
            individuals recovering from surgery or illness, or those with disabilities.
          </p>
        </div>

        {/* Types of Home Care Support */}
        <div className="services-block">
          <h2 className="section-title">Types of Home Care Support</h2>
          <div className="services-grid">
            {serviceTypes.map((service, index) => (
              <div className="service-card" key={index}>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits of Home Care */}
        <div className="benefits-block">
          <h2 className="section-title">Benefits of Home Care</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="service-areas-block">
          <h2 className="section-title">
            <FaMapMarkerAlt className="section-icon" /> Our Service Areas
          </h2>
          <div className="areas-list">
            {serviceAreas.map((area, index) => (
              <span className="area-tag" key={index}>{area}</span>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-block">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div className="contact-details">
                <h3>Helpline</h3>
                <a href="tel:+917859989007">+91 7859989007</a>
              </div>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon whatsapp" />
              <div className="contact-details">
                <h3>WhatsApp</h3>
                <a href="https://wa.me/917678267005" target="_blank" rel="noopener noreferrer">
                  +91 7678267005
                </a>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:info@ragininursingbureau.com">info@ragininursingbureau.com</a>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-details">
                <h3>Address</h3>
                <p>H-29, Shakurpur, Near Samrat Cinema, Pitam Pura, Delhi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Online Presence */}
        <div className="online-presence-block">
          <h2 className="section-title">Connect With Us Online</h2>
          <div className="links-grid">
            {onlinePresence.map((link, index) => (
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="online-link-card"
                key={index}
              >
                <span className="link-icon">{link.icon}</span>
                <span className="link-name">{link.name}</span>
                <FaExternalLinkAlt className="external-icon" />
              </a>
            ))}
          </div>
        </div>

        {/* Organizations Section */}
        <div className="organizations-block">
          <h2 className="section-title">Ragini Nursing Bureau Services</h2>
          <div className="org-list">
            <div className="org-item">
              <h3>Ragini Nursing Bureau LifeCare</h3>
              <p>Provides a range of home healthcare services, including nursing, physiotherapy, and companionship.</p>
            </div>
            <div className="org-item">
              <h3>Ragini Nursing Bureau Homecare</h3>
              <p>Offers comprehensive home care services, including doctor visits, nurse care, and rehabilitation programs.</p>
            </div>
            <div className="org-item">
              <h3>Ragini Nursing Bureau Caregivers</h3>
              <p>Connects individuals with experienced and compassionate caregivers in Delhi.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HelpfulLinks
