'use client'

import { useState } from "react"
import Image from "next/image"
import "./AboutUs.css"
import { FaCheckCircle, FaHistory, FaUsers, FaHandshake, FaAward, FaHospital, FaUserNurse, FaHeartbeat } from 'react-icons/fa'
import { teamMembers, historyTimeline } from "../../util/commonData"

const AboutUs = () => {
  const [activeAccordion, setActiveAccordion] = useState("mission")

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section)
  }

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="about-hero-section">
        <div className="about-hero-content">
          <h1>About Ragini Nursing Bureau</h1>
          <p className="hero-subtitle">Your trusted partner in home healthcare</p>
        </div>
        <div className="about-hero-image">
          <Image 
            src="/assets/about-banner.png" 
            alt="Ragini Nursing Bureau" 
            width={600}
            height={400}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      {/* Introduction Section */}
      <section className="about-intro-section">
        <div className="about-intro-content">
          <div className="section-header">
            <h2 className="section-title">Who We Are</h2>
          </div>
          <p>
            Ragini Nursing Bureau at Shakurpur Colony, Delhi, provides expertise nursing care through our qualified and trained caregivers. 
            We are well known for excellent care and personalized service that perfectly meets our clients' requirements. 
            Our trained nurses provide high-quality care to patients at home. We are here for you and your family during 
            life's most challenging moments.
          </p>
          <p>
            We aim to help people grow healthier faster by requiring less effort while paying more attention to their well-being. 
            With over 8 years of experience, we've supported more than 500 satisfied clients with our team of 100+ expert nurses.
          </p>
        </div>
      </section>

      {/* Values Accordion Section */}
      <section className="about-values-section">
        <div className="section-header">
          <h2 className="section-title">Our Core Values</h2>
        </div>
        <div className="accordion-container">
          <div className="accordion-item">
            <div 
              className={`accordion-header ${activeAccordion === "mission" ? "active" : ""}`}
              onClick={() => toggleAccordion("mission")}
            >
              <FaHandshake className="accordion-icon" />
              <h3>Our Mission</h3>
            </div>
            <div className={`accordion-content ${activeAccordion === "mission" ? "active" : ""}`}>
              <p>
                At <strong>Ragini Nursing Bureau</strong>, our mission is to improve quality of life 
                by providing <strong>compassionate, personalized healthcare</strong>. We strive to make 
                healthcare <strong>accessible</strong> and <strong>convenient</strong>, ensuring each patient feels 
                <strong> supported, safe,</strong> and <strong>valued</strong>.
              </p>
              <p>
                We are committed to delivering the highest standard of care through our experienced and dedicated team of healthcare professionals. 
                Our goal is to enhance the recovery process and promote overall well-being in the comfort of your home.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <div 
              className={`accordion-header ${activeAccordion === "vision" ? "active" : ""}`}
              onClick={() => toggleAccordion("vision")}
            >
              <FaCheckCircle className="accordion-icon" />
              <h3>Our Vision</h3>
            </div>
            <div className={`accordion-content ${activeAccordion === "vision" ? "active" : ""}`}>
              <p>
                We envision a world where <strong>high-quality healthcare</strong> is 
                <strong> accessible to everyone</strong>, enhancing quality of life for 
                patients and families alike. As we expand our reach and refine our 
                services, we aim to become a trusted name in <strong>home healthcare services</strong>.
              </p>
              <p>
                <strong>To enable</strong> people to <strong>live well</strong> by delivering 
                best-in-class health outcomes and quality 
                care while building the <strong>most affordable</strong> and 
                <strong> accessible</strong> healthcare ecosystem.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <div 
              className={`accordion-header ${activeAccordion === "why-us" ? "active" : ""}`}
              onClick={() => toggleAccordion("why-us")}
            >
              <FaAward className="accordion-icon" />
              <h3>Why Choose Us</h3>
            </div>
            <div className={`accordion-content ${activeAccordion === "why-us" ? "active" : ""}`}>
              <ul>
                <li>
                  <strong>Experienced Team</strong>: Our skilled team includes male and female caregivers, 
                  ICU nurses, general nurses, and dedicated attendants focused on patient well-being.
                </li>
                <li>
                  <strong>Comprehensive Care Services</strong>: Our offerings include specialized baby care, 
                  nanny and japa care, elderly care, ICU setups at home, and rental or purchase options 
                  for medical equipment.
                </li>
                <li>
                  <strong>Convenient Doctor Visits</strong>: With a network of qualified doctors, we bring 
                  healthcare to you, providing easy access to consultations from the comfort of your home 
                  or hospital.
                </li>
                <li>
                  <strong>Commitment to Excellence</strong>: We strive for excellence every day, maintaining 
                  high standards of discipline and integrity. Using the latest healthcare technology, our 
                  team continually improves to provide care that is compassionate and effective.
                </li>
                <li>
                  <strong>Personalized Care Plans</strong>: We develop customized care plans tailored to each patient's 
                  specific needs, ensuring the most effective treatment and recovery process.
                </li>
                <li>
                  <strong>24/7 Availability</strong>: Our services are available round the clock, providing you with 
                  peace of mind knowing that professional care is always accessible when needed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Timeline Section */}
      <section className="about-history-section">
        <div className="section-header">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">From humble beginnings to becoming a trusted healthcare partner</p>
        </div>
        <div className="timeline-container">
          {historyTimeline.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Team Section */}
      <section className="about-team-section">
        <div className="section-header">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet the dedicated professionals who make our mission possible</p>
        </div>
        <div className="team-cards-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-card-image">
                <img 
                  src={member.image} 
                  alt={member.name} 
                />
              </div>
              <div className="team-card-content">
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="about-closing-section">
        <div className="section-header">
          <h2 className="section-title">Join Us on Our Mission</h2>
        </div>
        <p>
          Thank you for considering <strong>Ragini Nursing Bureau</strong>. Together, 
          let's make healthcare more <strong>personal, accessible,</strong> and 
          <strong> impactful</strong>.
        </p>
      </section>
    </div>
  )
}

export default AboutUs

