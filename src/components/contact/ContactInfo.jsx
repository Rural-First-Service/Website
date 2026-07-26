import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="contact-info">

      {/* Direct Connect */}

      <div className="direct-card">

        <h3>Direct Connect</h3>

        <div className="contact-links">

          <a href="tel:+911800000000" className="contact-link">

            <div className="contact-icon">
              <Phone size={22} />
            </div>

            <div>

              <small>Toll Free</small>

              <h4>1800-RURAL-FIRST</h4>

            </div>

          </a>

          <a
            href="mailto:support@ruralfirstservice.com"
            className="contact-link"
          >

            <div className="contact-icon">
              <Mail size={22} />
            </div>

            <div>

              <small>Support Email</small>

              <h4>support@ruralfirstservice.com</h4>

            </div>

          </a>

        </div>

      </div>

      {/* Office Card */}

      <div className="office-card">

        <div className="office-header">

          <div className="office-icon">
            <MapPin size={22} />
          </div>

          <div>

            <h3>Corporate Office</h3>

            <p>
              
              <br />
              Mohoba, Uttar Pradesh , India
              
            </p>

          </div>

        </div>

        <div className="office-hours">

          <span className="status-dot"></span>

          <span>Business Hours: 24/7 Support</span>

        </div>

      </div>

      {/* WhatsApp */}

      <a
        href="https://wa.me/6306075097"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-card"
      >

        <div className="whatsapp-left">

          <MessageCircle size={28} />

          <span>Instant Help on WhatsApp</span>

        </div>

        <ArrowRight size={22} />

      </a>

    </div>
  );
}