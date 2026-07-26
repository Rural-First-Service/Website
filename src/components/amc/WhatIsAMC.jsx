import {
  Home,
  CalendarDays,
  Headset,
} from "lucide-react";

export default function WhatIsAMC() {
  return (
    <section className="amc-about">

      <div className="container">

        <div className="amc-about-wrapper">

          <div className="amc-about-heading">

            <h2>What is AMC?</h2>

            <p>
              Our Annual Maintenance Contract is a comprehensive commitment
              to the health of your essential home and agricultural
              infrastructure. Instead of worrying about sudden breakdowns,
              you secure a year of proactive, professional care.
            </p>

          </div>

          <div className="amc-about-grid">

            <div className="amc-about-card">

              <div className="amc-about-icon">
                <Home size={24} />
              </div>

              <h3>Total Coverage</h3>

              <p>
                We cover everything from pump sets and tractors to solar
                installations and electrical panels. One contract protects
                your entire operation.
              </p>

            </div>

            <div className="amc-about-card">

              <div className="amc-about-icon">
                <CalendarDays size={24} />
              </div>

              <h3>Scheduled Care</h3>

              <p>
                Our experts perform regular preventive checkups, catching
                small issues before they become expensive failures that halt
                your work.
              </p>

            </div>

            <div className="amc-about-card">

              <div className="amc-about-icon">
                <Headset size={24} />
              </div>

              <h3>Expert Support</h3>

              <p>
                Access our network of certified technicians who understand
                rural infrastructure and prioritize AMC members for all
                service requests.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}