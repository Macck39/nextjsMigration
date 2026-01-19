'use client'

import "./map.css"

const MapComponent = () => {
  const handleMapClick = () => {
    const latitude = 28.687936448864285
    const longitude = 77.13462607301385
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`
    // const url = "https://maps.app.goo.gl/qGWKMEhrEEvBR4BY8"
    window.open(url, "_blank")
  }
  return (
    <div className="col2 column1 first">
      <div
        className="sec2map"
        style={{
          overflow: "hidden",
          height: "550px",
          width: "100%",
          cursor: "pointer",
        }}
        onClick={handleMapClick}
      ></div>
    </div>
  )
}

export default MapComponent

const latitude = 28.687936448864285
const longitude = 77.13462607301385