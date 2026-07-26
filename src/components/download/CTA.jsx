import { Link } from "react-router-dom";

// Import QR code image from assets
import qrCodeImg from '../../assets/images/download/qrcode.png'; // Adjust path as needed

function CTA() {
  return (
    <section className="download-cta">
      {/* Background Glow Effects */}
      <div className="cta-glow cta-glow-1"></div>
      <div className="cta-glow cta-glow-2"></div>

      <div className="container">
        <div className="cta-card">
          <div className="cta-badge">📱 Download Now</div>
          
          <h2>
            Ready to Experience <span>Rural Excellence</span>?
          </h2>

          <p>
            Join thousands of households making their lives easier
            with the Rural First Service app.
          </p>

          <div className="cta-content">
            {/* Download Buttons */}
            <div className="cta-downloads">
              <Link to="https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share" className="store-btn google-play">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M17.523 16.65l-1.965-1.965 1.477-1.477 2.107 2.107c.293.293.293.768 0 1.061l-1.619 1.619c-.274.274-.717.274-.991 0l-.009-.009.009-.345v.009zM3.003 3.003c-.166.166-.293.427-.293.704v16.586c0 .277.127.538.293.704l8.978-8.978-8.978-8.978v.006zM12.243 12.243l-1.477 1.477-1.965-1.965 1.477-1.477 1.965 1.965zm.992-.992l3.975-3.975c.293-.293.768-.293 1.061 0l1.619 1.619c.274.274.274.717 0 .991l-2.107 2.107-1.477-1.477-1.071-1.071v.806zM3.003 20.997c-.166-.166-.293-.427-.293-.704v-8.387l4.293 4.293-4 4.798v.006zM6.706 16.293l-4.293-4.293 4.293-4.293 5.098 5.098-5.098 5.098v-1.61z"/>
                </svg>
                <div className="btn-text">
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </div>
              </Link>

              <Link to="/" className="store-btn app-store">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="btn-text">
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </Link>
            </div>

            {/* Divider with OR text */}
            <div className="cta-divider">
              <span>OR</span>
            </div>

            {/* QR Code Section - Using local asset */}
            <div className="cta-qr">
              <div className="qr-wrapper">
                <img
                  src={qrCodeImg}
                  alt="QR Code"
                />
              </div>
              <div className="qr-info">
                <small>📲 QUICK SCAN</small>
                <h3>Instant Link</h3>
                <p>Scan with your phone camera</p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="cta-trust">
            <div className="trust-item">
              <span className="trust-icon">⭐</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-icon">👥</span>
              <span>5,000+ Users</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-icon">🔒</span>
              <span>100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;