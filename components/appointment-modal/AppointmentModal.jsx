'use client'

import { useState } from "react"
import { Modal, Button } from "antd"
import "./appointment-modal.css"
import CallbackModal from "../callback-modal/CallbackModal"

const AppointmentModal = ({ show, handleClose }) => {
  const [showCallbackModal, setShowCallbackModal] = useState(false)

  const handleCallbackClick = () => {
    setShowCallbackModal(true)
  }

  const handleCallbackClose = () => {
    setShowCallbackModal(false)
  }

  return (
    <>
      <Modal
        open={show}
        onCancel={handleClose}
        centered
        footer={null}
        className="appointment-modal"
        width={"300px"}
      >
        <div>
          <h4>24 Hours Home</h4>
          <p>Nursing Services</p>
          <img src="/assets/Group 84.png" alt="Healthcare" className="appointment-modal-img" />
        </div>
        <hr />
        <div className="vertical-buttons">
          <Button className="appointment-btn" block onClick={handleClose}>
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <a href="tel:+91-7859989007" style={{ textDecoration: "none" }}>
              Book Now
            </a>
          </Button>
          <Button className="callback-btn" block onClick={handleCallbackClick}>
            <span>
              <i className="fa-solid fa-rectangle-list"></i>
            </span>
            Request a Callback
          </Button>
        </div>
      </Modal>

      {showCallbackModal && (
        <CallbackModal
          show={showCallbackModal}
          handleClose={handleCallbackClose}
        />
      )}
    </>
  )
}

export default AppointmentModal

