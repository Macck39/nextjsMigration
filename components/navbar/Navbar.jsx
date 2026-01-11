'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RiBarChartHorizontalLine } from "react-icons/ri"
import { IoCloseSharp } from "react-icons/io5"
import Image from "next/image"
import "./navbar.css"
// import Logo from "../../../public/Ragini-Logo.png"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleShowNavbar = () => setShowNavbar(!showNavbar)

  const closeNavbar = () => setShowNavbar(false)
  
  useEffect(() => {
    closeNavbar()
  }, [pathname])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">
            <img src="/assets/Ragini-Logo.png" alt="logo" id="logo-img" className="logo-image" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <IoCloseSharp size={32} className="close-icon" />
          ) : (
            <RiBarChartHorizontalLine size={38} className="bar-icon" />
          )}
        </div>
        <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "nav-active" : ""}>
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={pathname === "/about-us" ? "nav-active" : ""}>
                <span>ABOUT US</span>
              </Link>
            </li>
            <li>
              <Link href="/videos" className={pathname === "/videos" ? "nav-active" : ""}>
                <span>VIDEOS</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className={pathname === "/services" ? "nav-active" : ""}>
                <span>SERVICES</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === "/contact" ? "nav-active" : ""}>
                <span>CONTACT US</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

