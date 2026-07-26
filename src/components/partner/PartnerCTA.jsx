import { Download, Smartphone } from "lucide-react";

export default function PartnerCTA() {
  return (
    <section className="partner-cta">

      <div className="container">

        <div className="partner-cta-content">

          <span className="partner-cta-badge">
            Join 5,000+ Service Partners
          </span>

          <h2>
            Start Your Journey Today
          </h2>

          <p>
            Join thousands of trusted service partners across India.
            Download the Rural First Partner App and start receiving
            verified jobs in your area.
          </p>

          <div className="partner-download-buttons">

            <a href="https://play.google.com/store/apps/details?id=com.ruralfirstservice.partner" className="store-btn">

              <Download size={28} />

              <div>

                <small>GET IT ON</small>

                <strong>Google Play</strong>

              </div>

            </a>

            <a href="" className="store-btn">

              <Smartphone size={28} />

              <div>

                <small>DOWNLOAD ON THE</small>

                <strong>App Store</strong>

              </div>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

