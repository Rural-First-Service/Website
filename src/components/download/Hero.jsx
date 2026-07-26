import { Link } from "react-router-dom";

// Import your images from assets
import serviceQR from "../../assets/images/download/partner.png";
import partnerQR from "../../assets/images/download/partner.png";
import homeScreen from "../../assets/images/download/phone2.jpeg";
import servicesScreen from "../../assets/images/download/phone1.png";

function Hero() {
  return (
    <section className="download-hero">
      <div className="hero-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="hero-left">

          <div className="hero-badge">
            <span className="material-symbols-outlined">
              stars
            </span>
            Rated 4.8/5 
          </div>

          <h1>
            Professional Services,
            <span> One Tap </span>
            Away.
          </h1>

          <p>
            Bring expert maintenance, repairs, and annual care plans directly
            to your doorstep. Rural First Service connects you with trusted
            professionals for home maintenance, repairs, cleaning, and much
            more across India.
          </p>

          {/* Download Buttons */}

          <div className="download-buttons">

            <Link to="https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share">
              <div className="store-btn">

                <span className="material-symbols-outlined">
                  cloud_download
                </span>

                <div>
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </div>

              </div>
            </Link>

            <Link to="/">
              <div className="store-btn">

                <span className="material-symbols-outlined">
                  file_download
                </span>

                <div>
                  <small>DOWNLOAD ON THE</small>
                  <strong>App Store</strong>
                </div>

              </div>
            </Link>

          </div>

          {/* QR Section */}

          <div className="qr-card">

            <h4 className="qr-title">
              Scan to Download
            </h4>

            <div className="qr-wrapper">

              {/* Service App */}

              <div className="qr-item">

                <div className="qr-image">
                  <img
                    src={serviceQR}
                    alt="Rural First Service QR"
                  />
                </div>

                <h5>Rural First Service</h5>

              </div>

              {/* Partner App */}

              <div className="qr-item">

                <div className="qr-image">
                  <img
                    src={partnerQR}
                    alt="Rural First Partner QR"
                  />
                </div>

                <h5>Rural First Partner</h5>

              </div>

            </div>

            <p className="qr-text">
              Scan the QR code to instantly download the app.
            </p>

          </div>

        </div>

        {/* ================= RIGHT CONTENT ================= */}

        <div className="hero-right">

          <div className="hero-bg-circle"></div>

          {/* Services Screen */}

          <div className="phone secondary-phone">

            <div className="phone-frame">

              <img
                src={servicesScreen}
                alt="Services Screen"
              />

            </div>

          </div>

          {/* Home Screen */}

          <div className="phone primary-phone">

            <div className="phone-notch"></div>

            <div className="phone-frame">

              <img
                src={homeScreen}
                alt="Home Screen"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;