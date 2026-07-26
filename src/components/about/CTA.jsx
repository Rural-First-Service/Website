import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="about-cta">

      <div className="container">

        <div className="about-cta-box">

          <div className="about-cta-content">

            <span className="about-cta-tag">
              Join Rural First Service
            </span>

            <h2>
              Ready to Experience India's Trusted Home Service Platform?
            </h2>

            <p>
              Whether you're looking for reliable home services or want to grow
              your business as a service partner, Rural First Service is here
              for you.
            </p>

            <div className="about-cta-buttons">

              <Link to="/services" className="about-cta-primary">
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link to="/download" className="about-cta-secondary">
                <Download size={18} />
                Download App
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}