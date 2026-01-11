'use client'

import { useState } from 'react'
import "./TermsConditions.css"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const TermsConditions = () => {
  // State to track which accordion sections are open
  const [openSections, setOpenSections] = useState({
    introduction: false,
    acceptance: false,
    services: false,
    eligibility: false,
    userAccounts: false,
    payment: false,
    cancellation: false,
    intellectualProperty: false,
    userContent: false,
    prohibited: false,
    disclaimer: false,
    limitation: false,
    indemnification: false,
    termination: false,
    governing: false,
    changes: false,
    contact: false
  })

  // Toggle function for sections
  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    })
  }

  return (
    <div className="terms-container">
      <section className="terms-section">
        <h1 className="terms-main-title">Terms and Conditions</h1>
        
        {/* Introduction */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.introduction ? 'active' : ''}`}
            onClick={() => toggleSection('introduction')}
          >
            <h2>Introduction</h2>
            {openSections.introduction ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.introduction ? 'active' : ''}`}>
            <p>
              Welcome to Ragini Nursing Bureau. These Terms and Conditions govern your use of our website and services. 
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of 
              these terms, you may not access our website or use our services.
            </p>
          </div>
        </div>

        {/* Acceptance of Terms */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.acceptance ? 'active' : ''}`}
            onClick={() => toggleSection('acceptance')}
          >
            <h2>1. Acceptance of Terms</h2>
            {openSections.acceptance ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.acceptance ? 'active' : ''}`}>
            <p>
              By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these 
              Terms and Conditions. These Terms constitute a legally binding agreement between you and Ragini Nursing Bureau. 
              If you do not agree to these Terms, please do not use our services.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.services ? 'active' : ''}`}
            onClick={() => toggleSection('services')}
          >
            <h2>2. Services</h2>
            {openSections.services ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.services ? 'active' : ''}`}>
            <p>
              Ragini Nursing Bureau provides healthcare services including but not limited to nursing care, elderly care, 
              physiotherapy, medical equipment rental, and other related services. The specific services available may vary 
              and are subject to change without notice.
            </p>
            <p>
              We strive to provide high-quality services, but we do not guarantee that our services will meet your specific 
              requirements or expectations. Services are provided on an "as is" and "as available" basis.
            </p>
          </div>
        </div>

        {/* Eligibility */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.eligibility ? 'active' : ''}`}
            onClick={() => toggleSection('eligibility')}
          >
            <h2>3. Eligibility</h2>
            {openSections.eligibility ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.eligibility ? 'active' : ''}`}>
            <p>
              To use our services, you must be at least 18 years of age or have the consent of a parent or guardian. By using 
              our services, you represent and warrant that you meet all eligibility requirements. If you are using our services 
              on behalf of another person, you confirm that you are authorized to do so.
            </p>
          </div>
        </div>

        {/* User Accounts */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.userAccounts ? 'active' : ''}`}
            onClick={() => toggleSection('userAccounts')}
          >
            <h2>4. User Accounts</h2>
            {openSections.userAccounts ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.userAccounts ? 'active' : ''}`}>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible 
              for safeguarding your account credentials and for any activities or actions under your account. You agree to notify us 
              immediately of any unauthorized use of your account.
            </p>
            <p>
              We reserve the right to disable any user account if, in our opinion, you have violated any provision of these Terms.
            </p>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.payment ? 'active' : ''}`}
            onClick={() => toggleSection('payment')}
          >
            <h2>5. Payment Terms</h2>
            {openSections.payment ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.payment ? 'active' : ''}`}>
            <p>
              All payments for our services must be made in accordance with the payment methods and terms specified at the time of 
              service booking. Prices for services are subject to change without notice. We reserve the right to refuse service to 
              anyone for any reason at any time.
            </p>
            <p>
              You agree to provide current, complete, and accurate payment information for all purchases made through our website. 
              You further agree to promptly update your account and payment information, including email address, payment method, 
              and payment card expiration date, so that we can complete your transactions and contact you as needed.
            </p>
          </div>
        </div>

        {/* Cancellation and Refund Policy */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.cancellation ? 'active' : ''}`}
            onClick={() => toggleSection('cancellation')}
          >
            <h2>6. Cancellation and Refund Policy</h2>
            {openSections.cancellation ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.cancellation ? 'active' : ''}`}>
            <p>
              Cancellation and refund policies vary depending on the service. Please refer to our specific cancellation and refund 
              policies provided at the time of booking. In general, cancellations must be made within the specified timeframe to be 
              eligible for a refund.
            </p>
            <p>
              We reserve the right to cancel or reschedule services due to unforeseen circumstances, emergencies, or staff availability. 
              In such cases, we will make reasonable efforts to notify you and reschedule the service or provide a refund as appropriate.
            </p>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.intellectualProperty ? 'active' : ''}`}
            onClick={() => toggleSection('intellectualProperty')}
          >
            <h2>7. Intellectual Property</h2>
            {openSections.intellectualProperty ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.intellectualProperty ? 'active' : ''}`}>
            <p>
              The website, its content, and all related materials are the property of Ragini Nursing Bureau and are protected by 
              copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative 
              works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website 
              without our prior written consent.
            </p>
          </div>
        </div>

        {/* User Content */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.userContent ? 'active' : ''}`}
            onClick={() => toggleSection('userContent')}
          >
            <h2>8. User Content</h2>
            {openSections.userContent ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.userContent ? 'active' : ''}`}>
            <p>
              By submitting content to our website (such as reviews, feedback, or testimonials), you grant us a non-exclusive, 
              perpetual, royalty-free, transferable, sublicensable right to use, reproduce, modify, adapt, publish, translate, 
              create derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            <p>
              You represent and warrant that you own or control all rights to the content you submit and that the content does not 
              infringe upon the rights of any third party.
            </p>
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.prohibited ? 'active' : ''}`}
            onClick={() => toggleSection('prohibited')}
          >
            <h2>9. Prohibited Activities</h2>
            {openSections.prohibited ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.prohibited ? 'active' : ''}`}>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul>
              <li>Using our services for any unlawful purpose or in violation of any applicable laws or regulations</li>
              <li>Impersonating any person or entity or falsely stating or misrepresenting your affiliation with a person or entity</li>
              <li>Interfering with or disrupting the functionality of our website or services</li>
              <li>Attempting to gain unauthorized access to our systems or user accounts</li>
              <li>Collecting or harvesting any personally identifiable information from our website</li>
              <li>Using our services in any manner that could damage, disable, overburden, or impair our website or interfere with any other party's use of our services</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer of Warranties */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.disclaimer ? 'active' : ''}`}
            onClick={() => toggleSection('disclaimer')}
          >
            <h2>10. Disclaimer of Warranties</h2>
            {openSections.disclaimer ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.disclaimer ? 'active' : ''}`}>
            <p>
              Our services are provided on an "as is" and "as available" basis without any warranties, expressed or implied. 
              We do not warrant that our services will be uninterrupted, timely, secure, or error-free. We make no warranties 
              regarding the accuracy, reliability, or quality of any information, content, or services obtained through our website.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.limitation ? 'active' : ''}`}
            onClick={() => toggleSection('limitation')}
          >
            <h2>11. Limitation of Liability</h2>
            {openSections.limitation ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.limitation ? 'active' : ''}`}>
            <p>
              To the maximum extent permitted by law, Ragini Nursing Bureau shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>
          </div>
        </div>

        {/* Indemnification */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.indemnification ? 'active' : ''}`}
            onClick={() => toggleSection('indemnification')}
          >
            <h2>12. Indemnification</h2>
            {openSections.indemnification ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.indemnification ? 'active' : ''}`}>
            <p>
              You agree to indemnify, defend, and hold harmless Ragini Nursing Bureau and its officers, directors, employees, agents, 
              and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including 
              reasonable attorneys' fees) arising from your use of our services, your violation of these Terms, or your violation of 
              any rights of another person or entity.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.termination ? 'active' : ''}`}
            onClick={() => toggleSection('termination')}
          >
            <h2>13. Termination</h2>
            {openSections.termination ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.termination ? 'active' : ''}`}>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason 
              whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use our services will 
              immediately cease.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.governing ? 'active' : ''}`}
            onClick={() => toggleSection('governing')}
          >
            <h2>14. Governing Law</h2>
            {openSections.governing ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.governing ? 'active' : ''}`}>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of 
              law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts 
              located in Delhi, India.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.changes ? 'active' : ''}`}
            onClick={() => toggleSection('changes')}
          >
            <h2>15. Changes to Terms</h2>
            {openSections.changes ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.changes ? 'active' : ''}`}>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 
              30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole 
              discretion. By continuing to access or use our services after those revisions become effective, you agree to be bound by 
              the revised terms.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.contact ? 'active' : ''}`}
            onClick={() => toggleSection('contact')}
          >
            <h2>16. Contact Us</h2>
            {openSections.contact ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.contact ? 'active' : ''}`}>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p>
              Ragini Nursing Bureau<br />
              Email: info@ragininursing.com<br />
              Phone: +91-9999999999<br />
              Address: Shakurpur Colony, Delhi, India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsConditions



