import {
  BadgeCheck,
  Gauge,
} from "lucide-react";

import heroImage from "../../assets/heroamc.jpg";

export default function Hero() {
  return (
    <section className="amc-hero">

      <div className="container">

        <div className="amc-hero-grid">

          {/* Left */}

          <div className="amc-hero-content">

            <span className="amc-tag">
              Maintenance Simplified
            </span>

            <h1>
              Annual Maintenance Contracts
            </h1>

            <p className="amc-description">
              An Annual Maintenance Contract (AMC) is our promise to keep your
              essential equipment running flawlessly year-round. From
              agricultural machinery to water systems, we provide expert care
              so you can focus on what matters.
            </p>

            <div className="amc-feature-list">

              <div className="amc-feature">

                <div className="amc-feature-icon">
                  <BadgeCheck size={24} />
                </div>

                <div>

                  <h4>Peace of Mind</h4>

                  <p>
                    Regular health checks prevent costly breakdowns.
                  </p>

                </div>

              </div>

              <div className="amc-feature">

                <div className="amc-feature-icon">
                  <Gauge size={24} />
                </div>

                <div>

                  <h4>Priority Response</h4>

                  <p>
                    AMC members jump to the front of the queue.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="amc-hero-image">

            <img
              src={heroImage}
              alt="AMC Technician"
            />

            <div className="amc-saving-card">

              <h2>15%</h2>

              <p>
                Average saving on annual repair costs
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}