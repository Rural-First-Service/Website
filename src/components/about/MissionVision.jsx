import missionImg from "../../assets/images/about/herovision.png";
import visionImg from "../../assets/images/about/heromission.png";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="container">

        <div className="section-heading">
          <span>Who We Are</span>
          <h2>Driven By Purpose & Innovation</h2>
          <p>
            We are creating India's most trusted home service ecosystem by
            connecting customers with verified professionals while empowering
            local skilled workers through technology.
          </p>
        </div>

        <div className="mission-grid">

          {/* Mission */}

          <div className="mission-card">

            <div className="mission-image">
              <img src={missionImg} alt="Mission" />
            </div>

            <div className="mission-content">

              <div className="mission-icon">
                <Target size={32} />
              </div>

              <h3>Our Mission</h3>

              <p>
                Our mission is to make quality home services accessible,
                affordable and reliable for every household across India,
                especially in Tier-2, Tier-3 cities and rural communities.
              </p>

              <ul>

                <li>Verified Professionals</li>

                <li>Affordable Pricing</li>

                <li>Transparent Service Experience</li>

                <li>Technology Driven Platform</li>

              </ul>

            </div>

          </div>

          {/* Vision */}

          <div className="mission-card">

            <div className="mission-image">
              <img src={visionImg} alt="Vision" />
            </div>

            <div className="mission-content">

              <div className="mission-icon">
                <Eye size={32} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To become India's largest and most trusted digital platform for
                home services while creating employment opportunities for
                millions of skilled professionals nationwide.
              </p>

              <ul>

                <li>Digital India Initiative</li>

                <li>Employment Generation</li>

                <li>Rural Empowerment</li>

                <li>Nationwide Coverage</li>

              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}