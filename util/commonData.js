import { FaUserNurse, FaHospital, FaBrain, FaLungs, FaHome, FaPills, FaStethoscope, FaHeartbeat, FaPrescriptionBottleAlt } from 'react-icons/fa'

/**
 * Service locations where Ragini Nursing Bureau operates
 */
export const serviceLocations = [
  "Pitampura Delhi",
  "Gurgaon",
  "Faridabad",
  "Noida",
  "Ghaziabad",
  "Panjab",
  "Mumbai",
  "Kolkata"
]

/**
 * Customer testimonials and reviews
 */
export const testimonials = [
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
]

/**
 * Videos for landing page
 */
export const landingVideos = [
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

]

/**
 * Videos for videos page
 */
export const videoPageVideos = [
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

/**
 * Why families choose us - reasons and benefits
 */
export const whyChooseUs = [
  {
    image: "/assets/home-service.webp",
    title: "Home Service",
    description: "All the nurses are trained to give the best patient care at home."
  },
  {
    image: "/assets/chooseUsImg.png",
    title: "Care",
    description: "We help recover faster at Home by giving proper care."
  },
  {
    image: "/assets/best-protocol.jpg",
    title: "Best Protocols",
    description: "All clinical procedures performed are based on best protocols."
  },
  {
    image: "/assets/happier-you.jpg",
    title: "Convenience",
    description: "Be assured for high standards of trusted quality & service consistency."
  }
]

/**
 * Service descriptions for all services
 */
export const serviceDescriptions = {
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

/**
 * Detailed services information for specialized care
 */
export const detailedServices = {
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

/**
 * Dementia care tips for caregivers and families
 */
export const dementiaTips = {
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

/**
 * Service benefits for different healthcare offerings
 */
export const benefits = {
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

/**
 * Team members of Ragini Nursing Bureau
 */
export const teamMembers = [
  {
    name: "Dr. Anmol kumar",
    position: "Founder & CEO",
    bio: "EX. RMO MKW hospital, MEDENTA, MAX- Healthcare,Maharaja Agersen Hospital , AIIMS Delhi Critical care experts unit.  ",
    image: "/assets/DrAnmol.jpg"
  },
  {
    name: "Dr. Pradeep Mishra",
    position: "Co-founder",
    bio: "(G.P) Apollo Healthcare ICU Experts Director - Research& Academic",
    image: "/assets/DrPradeep.jpg"
  },
  {
    name: "Mr. Vivek Rawat",
    position: "Suppliers Head",
    bio: "Suppliers Head Delhi NCR - Ragini Nursing Bureau",
    image: "/assets/Vivek.jpg"
  },
  {
    name: "Mr. Rajesh (HR) ",
    position: "Resources Management",
    bio: "Resources Management Guide. ( Accounts).",
    image: "/assets/Rajesh.jpg"
  },
  {
    name: "Mrs. Sejal Saini",
    position: "Life & End Care Expert",
    bio: "Life & End care experts ICU Unit & Medicals Equipment Delhi Hospital (DNC ).",
    image: "/assets/SejalSaini.jpg"
  }
]

/**
 * Company history timeline
 */
export const historyTimeline = [
  {
    year: "2016",
    title: "Foundation",
    description: "Ragini Nursing Bureau was established in Delhi with a mission to provide quality home healthcare services to patients in need."
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Expanded our services to include specialized care for elderly patients, post-surgical recovery, and maternal care services."
  },
  {
    year: "2020",
    title: "Growth",
    description: "Added physiotherapy services, ICU setups at home, and medical equipment rental to our comprehensive offerings."
  },
  {
    year: "2022",
    title: "Regional Expansion",
    description: "Extended our services to Gurgaon, Faridabad, Noida, and Ghaziabad to serve more patients across the NCR region."
  },
  {
    year: "2024",
    title: "National Presence",
    description: "Established presence in major cities including Mumbai, Kolkata, and Punjab, reaching the milestone of serving over 500 satisfied clients."
  }
]

/**
 * Social media links
 */
export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1BdL9fmENZ/",
    color: "#1877f2"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ragininursingbureau",
    color: "#e4405f"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/posts/ragini-nursing-bureau_elderycaresefty-activity-7319251713406705664-CkB1",
    color: "#0077b5"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@RAGININURSINGBUREAU1",
    color: "#ff0000"
  },
  {
    name: "Pinterest",
    url: "https://pin.it/1YR2F8ESB",
    color: "#e60023"
  }
]

/**
 * Quick external links to the business
 */
export const quickLinks = [
  {
    name: "Our Website",
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

/**
 * Contact information for Ragini Nursing Bureau
 */
export const contactInfo = {
  address: {
    line1: "H-29, Anandvas, DDA",
    line2: "Market Block, H, Shakurpur",
    line3: "Colony, Shakurpur, Samrat Cinema,",
    line4: "Shakurpur Colony, Delhi 110034"
  },
  phone: {
    primary: "+91-7859989007",
    whatsapp: "+91-7678267005"
  },
  email: "info@ragininursingbureau.com",
  hours: {
    availability: "24/7",
    description: "Mon - Sun : Open All Day, 24 Hours Service"
  }
}
