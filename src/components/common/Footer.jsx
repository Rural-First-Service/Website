import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Company Info */}

        <div className="footer-column">

          <h2 className="footer-logo">
            Rural First Service
          </h2>

          <p>
            One Call. All Solutions.
            <br />
            Bringing trusted professional home services
            to every town and village across India.
          </p>

        </div>

        {/* Quick Links */}

        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/amc">AMC Plans</a></li>
            <li><a href="/download">Download App</a></li>
            <li><a href="/partner">Partner App</a></li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <div className="contact-item">
            <Phone size={18} />
            <span>+91 6306075097</span>
          </div>

          <div className="contact-item">
            <Mail size={18} />
            <span>support@ruralfirstservice.com</span>
          </div>

          <div className="contact-item">
            <MapPin size={18} />
            <span>Mahoba, Uttar Pradesh</span>
          </div>

        </div>

        {/* Social */}

        <div className="footer-column">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF size={18} />
            </a>

            <a href="#">
              <FaInstagram size={18} />
            </a>

            <a href="#">
              <FaLinkedinIn size={18} />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Rural First Service Pvt. Ltd.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;