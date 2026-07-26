import { Search, ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg">
        <img src={heroImage} alt="Rural First Service" />
      </div>

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-badge">
          Trusted Home Services
        </span>

        <h1>
          One Call.
          <br />
          <span>All Solutions.</span>
        </h1>

        <p>
          Professional AC Repair, Plumbing, Electrical,
          Home Cleaning, Appliance Repair and 40+ Services
          at your doorstep.
        </p>

        

      </div>

    </section>
  );
}

export default Hero;