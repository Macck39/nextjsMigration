'use client'

import { useState } from "react"
import { Modal, Button, Form, Input, Select, message } from "antd"
import "./callback-modal.css"
import cards from "../../util/serviceList"
import { callbackRequest } from "../../util/api"

const CallbackModal = ({ show, handleClose }) => {
  const servicesOptions = cards.map((item) => item.title)

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    service: "",
    location: "",
  })

  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await callbackRequest(formData)
      setSuccessMessage("Callback request submitted successfully!")
      message.success("Callback request submitted successfully!")
      console.log("Callback request submitted successfully!")
      handleClose() // Close modal after successful submission
    } catch (error) {
      console.error("Error submitting callback request:", error)
      message.error("Failed to submit callback request. Please try again.")
    }
  }

  return (
    <Modal
      open={show}
      onCancel={handleClose}
      centered
      footer={null}
      className="callback-modal"
      width={"300px"}
    >
      <form onSubmit={handleSubmit}>
        <h4 className="m-3">Request a Callback</h4>
        {/* Your form inputs go here */}
        <Form.Item>
          <Input
            placeholder="Name"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item name="service" initialValue="Select Service">
          <Select
            defaultValue="Select Service"
            name="service"
            value={formData.service}
            onChange={(value) => {
              handleInputChange({ target: { name: "service", value } })
            }}
            placeholder="Select Service"
          >
            {servicesOptions.map((option, index) => (
              <Select.Option key={index} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Button type="primary" block htmlType="submit">
          Submit
        </Button>
      </form>
    </Modal>
  )
}

export default CallbackModal

