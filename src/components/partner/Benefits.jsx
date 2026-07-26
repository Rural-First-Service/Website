import {
  IndianRupee,
  Clock3,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import technician from "../../assets/images/partner/technician.jpg";
import workshop from "../../assets/images/partner/workshop.jpg";

export default function Benefits() {
  return (
    <section  id="partner-benefits" className="partner-benefits">

      <div className="container">

        <div className="section-heading">

          <span>Benefits</span>

          <h2>Why Partner With Rural First?</h2>

          <p>
            We provide the customers, technology and support. You focus on
            delivering excellent service.
          </p>

        </div>

        <div className="benefits-grid">

          {/* BIG CARD */}

          <div className="benefit-card featured">

            <div>

              <div className="benefit-icon">
                <IndianRupee size={34} />
              </div>

              <h3>Weekly Earnings</h3>

              <p>
                Receive secure weekly payouts directly into your bank account
                with complete transparency.
              </p>

            </div>

            <div className="benefit-bg">
              ₹
            </div>

          </div>

          {/* CARD */}

          <div className="benefit-card">

            <div className="benefit-icon green">

              <Clock3 size={30} />

            </div>

            <h3>Flexible Schedule</h3>

            <p>
              Accept only the jobs you want and work according to your own
              availability.
            </p>

          </div>

          {/* CARD */}

          <div className="benefit-card">

            <div className="benefit-icon yellow">

              <GraduationCap size={30} />

            </div>

            <h3>Training Provided</h3>

            <p>
              Free onboarding, certification and practical guidance for better
              service quality.
            </p>

          </div>

          {/* LARGE BOTTOM CARD */}

          <div className="benefit-card bottom-card">

            <div className="bottom-left">

              <div className="benefit-icon">

                <ShieldCheck size={30} />

              </div>

              <h3>Verified Quality Leads</h3>

              <p>
                Every customer request is verified before reaching you,
                ensuring genuine work opportunities and higher success rates.
              </p>

            </div>

            <div className="bottom-images">

              <img src={technician} alt="" />

              <img src={workshop} alt="" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}