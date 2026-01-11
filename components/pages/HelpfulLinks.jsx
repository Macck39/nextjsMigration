'use client'

import { FaExternalLinkAlt } from 'react-icons/fa'
import "./HelpfulLinks.css"

const HelpfulLinks = () => {
  // Categories of helpful links
  const linkCategories = [
    {
      title: "Government Health Resources",
      links: [
        {
          name: "Ministry of Health and Family Welfare",
          url: "https://www.mohfw.gov.in/",
          description: "Official website of the Ministry of Health and Family Welfare, Government of India."
        },
        {
          name: "National Health Portal",
          url: "https://www.nhp.gov.in/",
          description: "Gateway to authentic health information in India."
        },
        {
          name: "Ayushman Bharat",
          url: "https://pmjay.gov.in/",
          description: "Information about India's national health protection scheme."
        }
      ]
    },
    {
      title: "Medical Information",
      links: [
        {
          name: "WebMD",
          url: "https://www.webmd.com/",
          description: "Trusted source for medical information and health advice."
        },
        {
          name: "MedlinePlus",
          url: "https://medlineplus.gov/",
          description: "Health information from the U.S. National Library of Medicine."
        },
        {
          name: "Mayo Clinic",
          url: "https://www.mayoclinic.org/",
          description: "Comprehensive medical information and research from Mayo Clinic."
        }
      ]
    },
    {
      title: "Elderly Care Resources",
      links: [
        {
          name: "HelpAge India",
          url: "https://www.helpageindia.org/",
          description: "Organization working for the cause and care of disadvantaged older persons in India."
        },
        {
          name: "Age Well Foundation",
          url: "https://www.agewellfoundation.org/",
          description: "NGO working for the welfare of older persons."
        },
        {
          name: "National Institute on Aging",
          url: "https://www.nia.nih.gov/",
          description: "Leading research on aging and age-related diseases."
        }
      ]
    },
    {
      title: "Mental Health Resources",
      links: [
        {
          name: "National Mental Health Programme",
          url: "https://www.nhp.gov.in/national-mental-health-programme_pg",
          description: "Information about India's mental health initiatives."
        },
        {
          name: "NIMHANS",
          url: "https://nimhans.ac.in/",
          description: "National Institute of Mental Health and Neurosciences, India."
        },
        {
          name: "The Live Love Laugh Foundation",
          url: "https://thelivelovelaughfoundation.org/",
          description: "Foundation focused on mental health awareness in India."
        }
      ]
    },
    {
      title: "Emergency Services",
      links: [
        {
          name: "National Emergency Number",
          url: "#",
          description: "Dial 112 for all emergency services in India."
        },
        {
          name: "National Ambulance Service",
          url: "#",
          description: "Dial 108 for ambulance services across India."
        },
        {
          name: "COVID-19 Helpline",
          url: "#",
          description: "Dial 1075 for COVID-19 related assistance."
        }
      ]
    }
  ]

  return (
    <div className="helpful-links-container">
      <section className="helpful-links-section">
        <h1 className="helpful-links-title">Helpful Resources</h1>
        <p className="helpful-links-intro">
          We've compiled a list of valuable resources to help you access important health information, 
          government services, and support organizations. These links are provided for informational 
          purposes and do not constitute an endorsement by Ragini Nursing Bureau.
        </p>
        
        <div className="links-categories">
          {linkCategories.map((category, index) => (
            <div className="link-category" key={index}>
              <h2 className="category-title">{category.title}</h2>
              <div className="links-list">
                {category.links.map((link, linkIndex) => (
                  <div className="link-card" key={linkIndex}>
                    <h3 className="link-title">
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name} <FaExternalLinkAlt className="external-icon" />
                      </a>
                    </h3>
                    <p className="link-description">{link.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="disclaimer">
          <h3>Disclaimer</h3>
          <p>
            The links provided on this page are for informational purposes only. Ragini Nursing Bureau 
            does not endorse, control, or take responsibility for the content of external websites. 
            Users should exercise their own discretion when accessing these resources and should refer 
            to each website's terms of use and privacy policies.
          </p>
        </div>
      </section>
    </div>
  )
}

export default HelpfulLinks



