import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/about/heroabout.png";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay"></div>

      <img
        src={heroImage}
        alt="Rural First Service"
        className="about-hero-bg"
      />

      <div className="container">
        <div className="about-hero-content">

          <span className="about-tag">
            India's Trusted Home Service Platform
          </span>

          <h1>
            Building Better Homes.
            <span> Empowering Better Lives.</span>
          </h1>

          <p>
            Rural First Service is committed to bringing trusted,
            affordable and professional home services to every town,
            village and city across India through one simple platform.
          </p>

          <div className="about-buttons">
            <a href="/services" className="about-primary-btn">
              Explore Services
            </a>

            <a href="/partner" className="about-secondary-btn">
              Become Partner
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}