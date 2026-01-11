import Link from "next/link"
import "./footer.css"
import {
  FaLocationDot,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa6"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { LuPhoneCall } from "react-icons/lu";
import { BiPhoneCall, BiSolidTime } from "react-icons/bi"
import { ImLink } from "react-icons/im"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-column">
          <p>
            <FaLocationDot /> Our Office Address
          </p>
          <p>
            H-29, Anandvas, DDA <br />
            Market Block, H, Shakurpur <br />
            Colony, Shakurpur, Samrat Cinema, <br />
            Shakurpur Colony, Delhi 110034
          </p>
        </div>

        <div className="footer-column">
          <p>
            <BiPhoneCall /> Contact us
          </p>
          <a
            href="mailto:info@ragininursingbureau.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@ragininursingbureau.com
          </a>
          <br />
          <div className="contact-number">
            <a href="tel:+91-7859989007">+91-7859989007</a>,
            <a href="tel:+91-7678267005">+91-7678267005</a>
          </div>
          <div className="social-icons-footer text-center">
            <a href="https://g.co/kgs/WNdj3id">
              <FaGoogle />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61556923493398&mibextid=ZbWKwL">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/ragininursingbureau?igsh=MWJlc3B6dGV3dXRmMw==">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@RAGININURSINGBUREAU1">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/ragini-nursing-bureau/">
              <FaLinkedin />
            </a>
            <a href="https://pin.it/2mRtLZyTG">
              <FaPinterest />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <p>
            <BiSolidTime /> Opening Hours
          </p>
          <p>
            Mon - Sun : 12:00 PM - 12:00 PM / <br />
            12:00 AM - 12:00 AM
          </p>
        </div>

        <div className="footer-column">
          <p>
            <ImLink /> Helpful Links
          </p>
          <Link href="/terms-conditions">Terms & Conditions</Link>
          <br />
          <Link href="/privacy-policy">Privacy Policy</Link>
          <br />
          <Link href="/payment-policy">Payment Policy</Link>
          <br />
          <Link href="/helpful-links">Resources</Link>
        </div>
      </div>
      <div className="copyrights">
        <span className="copyright-icon">&#169;</span> Copyrights 2024-2025.
        Ragini Nursing Bureau. All Rights Reserved
      </div>
       <section>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=7859989007&text=Hello, Thank you for reaching out to our nursing service. How can we assist you today?"
            className="float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineWhatsApp className="my-float" />
          </a>
        </div>
        <div>
          <a
            href="tel:+917859989007"
            className="float float-call"
            target="_blank"
            rel="noopener noreferrer"
          >
          <LuPhoneCall className="float-dialer" />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer

