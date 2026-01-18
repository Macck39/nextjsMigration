'use client'

import { useState } from "react"
import "./Videos.css"


const VideosPage = () => {
  const [currentVideo, setCurrentVideo] = useState({
    src: "https://youtube.com/embed/duwQNtb-7rw?si=SKld_sSO0AT36jbL",
    title: "Default Video",
  })

  
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

    

    </section>
  )
}

export default VideosPage



