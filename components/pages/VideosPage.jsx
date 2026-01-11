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
      title: "Experiment",
      description: "Short Description.",
      thumbnail: "/assets/Mask group.png",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/cC5sdwRsu4g",
      title: "#घाव की ड्रेसिंग करने का तरीका",
      description: "Dressing kaise karte hai by Dr.ANMOL KUMAR",
      thumbnail: "/assets/IVF.png",
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
      thumbnail: "/assets/IVF.png",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/5XXRNJE2iMU",
      title: "homehealthcare",
      description: "आपके माता पिता आपके बच्चे आपके अपनों का ख्याल हम रखते",
      thumbnail: "/assets/IVF.png",
    },
  ]
  
  const handleVideoClick = (video) => {
    setCurrentVideo({
      src: video.src,
      title: video.title,
    })
  }

  const doctorVisitBenefits = [
    {
      title: "Convenience",
      description:
        "No need to travel to clinics or hospitals. Receive expert medical consultation in the comfort of your home, saving time and reducing stress.",
    },
    {
      title: "Reduced Exposure",
      description:
        "Minimize exposure to infections and illnesses commonly found in hospital waiting rooms, especially important for immunocompromised patients.",
    },
    {
      title: "Personalized Attention",
      description:
        "One-on-one consultations with dedicated time for thorough examination and discussion of health concerns without the rush of clinic visits.",
    },
  ]

  return (
    <section>
      <div className="image-conatiner">
        <div className="about-banner"></div>
      </div>

      <h2 className="videos-title">Health Videos & Helpful Information</h2>

      <div className="container">
        <div className="left-section">
          <div className="video corner-wrapper">
            <iframe
              width="720"
              height="315"
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

      <div className="video-info-section">
        <h3>Benefits of Doctor Visit @ Home</h3>
        <p className="video-info-intro">
          Along with helpful videos, here are some key benefits of consulting a doctor at home.
        </p>
        <div className="video-info-grid">
          {doctorVisitBenefits.map((item, index) => (
            <div key={index} className="video-info-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideosPage



