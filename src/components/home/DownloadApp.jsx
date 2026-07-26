import { Download, Users, ArrowRight } from "lucide-react";

function DownloadApp() {
  return (
    <section className="download-app">

      <div className="container">

        <div className="download-grid">

          {/* Customer App */}

          <div className="download-card customer-card">

            <span className="card-tag">
              CUSTOMER APP
            </span>

            <h2>
              Book Trusted Home
              <br />
              Services in Minutes
            </h2>

            <p>
              Download the Rural First Service App and
              book professional AC repair, plumbing,
              electrical, home cleaning, pest control,
              appliance repair and much more.
            </p>

            <button className="download-main-btn">
              <Download size={18} />
              Download App
            </button>

          </div>

          {/* Partner App */}

          <div className="download-card partner-card">

            <span className="card-tag">
              PARTNER APP
            </span>

            <h2>
              Become a Service
              <br />
              Partner Today
            </h2>

            <p>
              Join thousands of verified professionals,
              receive bookings daily, grow your income
              and manage everything from one app.
            </p>

            <button className="partner-btn">
              Join as Partner
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DownloadApp;