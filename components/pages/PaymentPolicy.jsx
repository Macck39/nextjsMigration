'use client'

import "./PaymentPolicy.css"

const PaymentPolicy = () => {
  return (
    <div className="payment-container">
      <section className="payment-section">
        <h1 className="payment-main-title">Payment Policy</h1>

        <div className="payment-block">
          <h2 className="payment-block-title">1. Applicable Services</h2>
          <p>
            This Payment Policy applies to all services provided by Ragini Nursing Bureau, including 
            Attendant, Nursing Care, Critical Care, Infant Care, Medical Equipment, and Medicine 
            Delivery System.
          </p>
          <p>
            <strong>Note:</strong> Payment is required before service delivery, except for Laboratory 
            Services and Short-term Intervention Services.
          </p>
        </div>

        <div className="payment-block">
          <h2 className="payment-block-title">2. Direct Payment to Ragini Nursing Bureau</h2>
          <p>
            You are not required to pay the caregiver directly in cash or cheque unless specifically 
            instructed by the Ragini Nursing Bureau Customer Service team. All payments should be 
            made directly to Ragini Nursing Bureau through online transfer or by requesting a 
            cash/cheque pickup.
          </p>
        </div>

        <div className="payment-block">
          <h2 className="payment-block-title">3. Payment Mode</h2>
          <p>Ragini Nursing Bureau accepts the following payment methods:</p>
          <ul>
            <li><strong>Online UPI</strong> (Google Pay, PhonePe, Paytm, etc.)</li>
            <li><strong>NEFT</strong> (Bank Transfer)</li>
            <li><strong>Cheque</strong></li>
            <li><strong>Cash</strong></li>
          </ul>
          <p>
            Ragini Nursing Bureau promotes and prefers online payment in advance, which enables us 
            to pay our caregivers on time without hassle.
          </p>
          <p>
            <strong>Important:</strong> For Cash/Cheque pickup, the amount should be more than 
            Rs. 1,500/-. Any amount below that should be paid online.
          </p>
        </div>

        <div className="payment-block">
          <h2 className="payment-block-title">4. Taxes</h2>
          <p>
            A <strong>5% tax</strong> will apply to all services provided by Ragini Nursing Bureau. 
            This is in accordance with prevailing tax regulations.
          </p>
        </div>

        <div className="payment-block">
          <h2 className="payment-block-title">5. Payment Facilities</h2>
          
          <div className="payment-sub-block">
            <h3 className="payment-sub-title">Weekly Payment</h3>
            <p>
              Every 7 days, a weekly invoice will be generated and payment for the same needs to be 
              paid in advance.
            </p>
            <p>
              <strong>Penalty:</strong> Non-advance payment will add a penalty of Rs. 100/- on a 
              daily basis.
            </p>
          </div>

          <div className="payment-sub-block">
            <h3 className="payment-sub-title">Monthly Payment</h3>
            <p>
              This is an advance payment service. You will need to pay 30 days payment in advance.
            </p>
            <p>
              <strong>Note:</strong> If advance payment is not made, the default Weekly payment 
              cycle will be applied.
            </p>
          </div>

          <div className="payment-sub-block">
            <h3 className="payment-sub-title">Festival Surcharge</h3>
            <p>
              Surcharge will be applicable during the festival season as an add-on incentive for 
              the Caregiver to work and support the patient.
            </p>
            <p>
              <strong>Surcharge Range:</strong> Rs. 100 to Rs. 300 per 12-hour visit, depending 
              on the festival.
            </p>
            <p>
              <strong>Notice:</strong> Surcharge fee will be informed two days prior to any festival.
            </p>
          </div>
        </div>

        <div className="payment-block">
          <h2 className="payment-block-title">6. General Terms and Conditions on Payments</h2>
          <ul>
            <li>
              Ragini Nursing Bureau will not be accountable for any amount paid directly to the 
              Caregiver (CG). The service fee must be paid to Ragini Nursing Bureau, and under no 
              circumstances will the amount paid to the CG be adjusted with the service fee.
            </li>
            <li>
              If payment is not made within 30 days after the overdue date, the case will be 
              legally filed and the dispute will be resolved in Rohini District Court.
            </li>
            <li>
              The invoiced amount only includes payment charges for those visits where the 
              attendance of the caregiver has been verified. The mentioned amount is not for all 
              visits till date and should not be considered as the final amount. Charges for 
              unverified visits will be added after getting confirmation from both the customer 
              and the caregiver.
            </li>
          </ul>
        </div>

        <div className="payment-block payment-block-last">
          <p className="payment-note">
            Ragini Nursing Bureau reserves the right to modify or update this Payment Policy at 
            any time without prior notice. The updated policy will be effective immediately upon 
            posting on our website.
          </p>
        </div>
      </section>
    </div>
  )
}

export default PaymentPolicy
