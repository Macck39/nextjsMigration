'use client'

import { useState } from "react"
import "./Videos.css"
import { FaUserNurse,FaHospital,FaBrain,FaLungs,FaHome,FaPills,FaPlus,FaMinus,FaCheckCircle, FaChevronDown, FaChevronUp, FaPlay } from "react-icons/fa"
import { detailedServices, videoPageVideos, dementiaTips } from "../../util/commonData"


const VideosPage = () => {

  const [activeAccordion, setActiveAccordion] = useState(null)
  const [isVideoListExpanded, setIsVideoListExpanded] = useState(true)

  const [currentVideo, setCurrentVideo] = useState({
    src: "https://youtube.com/embed/duwQNtb-7rw?si=SKld_sSO0AT36jbL",
    title: "Default Video",
  })
  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section)
  }
  
  const handleVideoClick = (video) => {
    setCurrentVideo({
      src: video.src,
      title: video.title,
    })
  }

  const toggleVideoList = () => {
    setIsVideoListExpanded(!isVideoListExpanded)
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
        </div>
        
        {/* Collapsible Video List Widget */}
        <div className="video-list-widget">
          <div className="video-list-header" onClick={toggleVideoList}>
            <div className="video-list-header-content">
              <FaPlay className="video-list-icon" />
              <span className="video-list-title">More Videos ({videoPageVideos.length})</span>
            </div>
            {isVideoListExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          
          <div className={`video-list-content ${isVideoListExpanded ? 'expanded' : ''}`}>
            <div className="video-list-scroll">
              {videoPageVideos.map((video) => (
                <div
                  className={`video-list-item ${currentVideo.src === video.src ? 'active' : ''}`}
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="video-list-thumbnail">
                    <img
                      src={video.thumbnail}
                      alt={`Thumbnail for ${video.title}`}
                    />
                    <div className="video-play-overlay">
                      <FaPlay />
                    </div>
                  </div>
                  <div className="video-list-info">
                    <h4>{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
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



