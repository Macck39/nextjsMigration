'use client'

import { useState } from 'react'
import "./PaymentPolicy.css"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const PaymentPolicy = () => {
  // State to track which accordion sections are open
  const [openSections, setOpenSections] = useState({
    applicable: false,
    facilities: false,
    terms: false,
    refund: false,
    cancellation: false
  })

  // Toggle function for sections
  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    })
  }

  return (
    <div className="payment-container">
      <section className="payment-section">
        <h1 className="payment-main-title">Payment Policy</h1>
        
        {/* Applicable Services */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.applicable ? 'active' : ''}`}
            onClick={() => toggleSection('applicable')}
          >
            <h2>1. Applicable Services</h2>
            {openSections.applicable ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.applicable ? 'active' : ''}`}>
            <p>
              This Payment Policy applies to all services provided by Ragini Nursing Bureau, including but not limited to:
            </p>
            <ul>
              <li>Nursing Care Services</li>
              <li>Elderly Care Services</li>
              <li>Physiotherapy Services</li>
              <li>Medical Equipment Rental</li>
              <li>Doctor Consultation Services</li>
              <li>Laboratory Services</li>
              <li>Ambulance Services</li>
              <li>Any other healthcare services offered by Ragini Nursing Bureau</li>
            </ul>
          </div>
        </div>

        {/* Payment Facilities */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.facilities ? 'active' : ''}`}
            onClick={() => toggleSection('facilities')}
          >
            <h2>2. Payment Facilities</h2>
            {openSections.facilities ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.facilities ? 'active' : ''}`}>
            <p>
              Ragini Nursing Bureau accepts the following payment methods:
            </p>
            <ul>
              <li><strong>Cash Payment:</strong> Direct cash payment to our authorized representatives.</li>
              <li><strong>Online Banking:</strong> Bank transfers to our designated account.</li>
              <li><strong>UPI Payments:</strong> Through popular UPI apps like Google Pay, PhonePe, Paytm, etc.</li>
              <li><strong>Credit/Debit Cards:</strong> Major credit and debit cards are accepted.</li>
              <li><strong>Digital Wallets:</strong> Selected digital wallet payments are accepted.</li>
            </ul>
            <p>
              All payments are subject to applicable taxes and surcharges as per government regulations. A receipt will be provided for all payments made.
            </p>
          </div>
        </div>

        {/* General Terms and Conditions on Payments */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.terms ? 'active' : ''}`}
            onClick={() => toggleSection('terms')}
          >
            <h2>3. General Terms and Conditions on Payments</h2>
            {openSections.terms ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.terms ? 'active' : ''}`}>
            <ul>
              <li>All payments must be made in Indian Rupees (INR).</li>
              <li>For ongoing services, payment must be made in advance as per the agreed payment schedule.</li>
              <li>For one-time services, full payment is required before or at the time of service delivery.</li>
              <li>For equipment rental, a security deposit may be required in addition to the rental fee.</li>
              <li>Late payment may result in service interruption or additional charges.</li>
              <li>Any bank charges or transaction fees associated with the payment will be borne by the client.</li>
              <li>Prices for services are subject to change without prior notice. However, once a service is booked and paid for, the price will remain fixed for the duration of that service.</li>
              <li>All applicable taxes will be charged as per government regulations.</li>
            </ul>
          </div>
        </div>

        {/* Refund Policy */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.refund ? 'active' : ''}`}
            onClick={() => toggleSection('refund')}
          >
            <h2>4. Refund Policy</h2>
            {openSections.refund ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.refund ? 'active' : ''}`}>
            <p>
              Our refund policy is designed to be fair and transparent. Please note the following conditions:
            </p>
            <ul>
              <li>Refunds will be processed only if the service has not been rendered or if there is a legitimate reason for dissatisfaction with the service provided.</li>
              <li>Refund requests must be submitted within 7 days of the service date or payment date, whichever is earlier.</li>
              <li>Refunds for unused portions of ongoing services will be calculated on a pro-rata basis after deducting administrative charges.</li>
              <li>Refunds for equipment rental will be processed after the equipment is returned and inspected for any damages.</li>
              <li>Refund processing may take 7-14 business days depending on the payment method used.</li>
              <li>Refunds will be made through the same payment method used for the original transaction whenever possible.</li>
              <li>No refunds will be provided for services that have been fully rendered and completed.</li>
            </ul>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="accordion-item">
          <div 
            className={`accordion-header ${openSections.cancellation ? 'active' : ''}`}
            onClick={() => toggleSection('cancellation')}
          >
            <h2>5. Cancellation Policy</h2>
            {openSections.cancellation ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`accordion-content ${openSections.cancellation ? 'active' : ''}`}>
            <p>
              Our cancellation policy is as follows:
            </p>
            <ul>
              <li><strong>For Regular Services:</strong>
                <ul>
                  <li>Cancellation more than 24 hours before the scheduled service: Full refund</li>
                  <li>Cancellation between 12-24 hours before the scheduled service: 75% refund</li>
                  <li>Cancellation between 6-12 hours before the scheduled service: 50% refund</li>
                  <li>Cancellation less than 6 hours before the scheduled service: No refund</li>
                </ul>
              </li>
              <li><strong>For Emergency Services:</strong>
                <ul>
                  <li>Due to the nature of emergency services, cancellation charges may be waived at the discretion of Ragini Nursing Bureau.</li>
                </ul>
              </li>
              <li><strong>For Long-term Care Services:</strong>
                <ul>
                  <li>Cancellation requires a minimum 7-day notice period.</li>
                  <li>Cancellation with less than 7 days' notice will result in charges for the notice period.</li>
                </ul>
              </li>
              <li><strong>For Equipment Rental:</strong>
                <ul>
                  <li>Cancellation before equipment delivery: Full refund minus administrative charges</li>
                  <li>Cancellation after equipment delivery: Charges for the minimum rental period plus delivery and pickup charges</li>
                </ul>
              </li>
            </ul>
            <p>
              Ragini Nursing Bureau reserves the right to modify or update this Payment Policy at any time without prior notice. 
              The updated policy will be effective immediately upon posting on our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaymentPolicy



