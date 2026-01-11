'use client'

import "./map.css"

const MapComponent = () => {
  const handleMapClick = () => {
    const latitude = 28.68541 // Replace with your latitude
    const longitude = 77.14232 // Replace with your longitude
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`
    window.open(url, "_blank") // Open the map in a new tab
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

