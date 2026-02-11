'use client'

import { usePathname } from 'next/navigation'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const isLoginRoute =
    pathname === "/login" || pathname.startsWith("/portal-8f3c2a")

  return (
    <>
      {!isLoginRoute && <Navbar />}
      <div className="main-content-wrapper">
        <main>{children}</main>
        {!isLoginRoute && <Footer />}
      </div>
    </>
  )
}

