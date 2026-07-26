import { ShieldCheck, BadgeIndianRupee } from "lucide-react";
import team from "../../assets/images/team.png";

function CompanyIntro() {
  return (
    <section className="company-intro">

      <div className="container intro-grid">

        {/* Left Side */}

        <div className="intro-content">

          <h2>
            Bridging the Gap in
            <span> Rural Services</span>
          </h2>

          <p>
            Rural First Service is more than just a maintenance company.
            We are a technology-driven platform dedicated to bringing
            high-end, reliable and professional services to every corner
            of the country.
          </p>

          <div className="intro-features">

            <div className="feature-card">

              <div className="feature-icon">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h4>Verified Professionals</h4>

                <p>
                  100% Background Verified
                  Service Partners.
                </p>
              </div>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <BadgeIndianRupee size={28} />
              </div>

              <div>

                <h4>Transparent Pricing</h4>

                <p>
                  No Hidden Charges.
                  Honest Pricing.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="intro-image">

          <img
            src={team}
            alt="Rural First Team"
          />

        </div>

      </div>

    </section>
  );
}

export default CompanyIntro;