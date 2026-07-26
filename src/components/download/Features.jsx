function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-heading">
          <h2>Everything You Need In One Place</h2>
          <p>
            Our app bridges the gap between rural needs and urban
            service standards.
          </p>
        </div>

        <div className="features-grid">
          {/* Feature 1 - Real-Time Tracking */}
          <div className="feature-card large">
            <div className="feature-content">
              <div className="feature-text">
                <span className="material-symbols-outlined filled feature-icon">
                  location_on
                </span>
                <h3>Real-Time Tracking</h3>
                <p>
                  Watch your service expert arrive in real-time.
                  No more waiting all day—know exactly when help
                  will be at your gate.
                </p>
                <ul>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Live GPS updates
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Estimated arrival time
                  </li>
                </ul>
              </div>
              <div className="feature-image">
                <div
                  className="tracking-image"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjl6rRrHbz0PIClvmzzKe0VeWD9bXzmxK_lVburgl2OEuGLFBAFO1xTS3wzJVna3WlU9HYS8MBX15_EkYJ843IDC1I_0h9ZbvgOtIS5j_2ruyw7wyxYiU5giCeL0RmI29yo2qj5FSyqI8iMnN4QEXvCyFEz6pYWun31OIeKMVCTSD9OPxtSMUj75mH-wxXrbbig5kKtLY_nui79fPet4ONXsWJZwZgbETNmnu42wHo1sFmO0scv9LbFw')",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - Verified Experts */}
          <div className="feature-card verified">
            <span className="material-symbols-outlined filled feature-icon yellow">
              shield_with_heart
            </span>
            <h3>Verified Experts</h3>
            <p>
              Every partner is background checked and skill-verified
              to ensure safety and quality for your home.
            </p>
            <div className="verified-bottom">
              <div className="avatars">
                <div></div>
                <div></div>
                <div></div>
                <div className="count">+150</div>
              </div>
              <strong>Join 5,000+ happy users</strong>
            </div>
          </div>

          {/* Feature 3 - Secure Payments */}
          <div className="feature-card payment">
            <span className="material-symbols-outlined filled feature-icon green">
              payments
            </span>
            <h3>Secure Payments</h3>
            <p>
              Pay via UPI, Cards, or Wallet with end-to-end encryption.
              Transparent pricing with no hidden charges.
            </p>
            <div className="payment-methods">
              <span>UPI</span>
              <span>VISA</span>
              <span>RuPay</span>
            </div>
          </div>

          {/* Feature 4 - Booking History & AMC */}
          <div className="feature-card amc">
            <div className="amc-left">
              <span className="material-symbols-outlined filled feature-icon white">
                history
              </span>
              <h3>Booking History & AMC</h3>
              <p>
                Manage all your annual maintenance plans and past service
                records in one dashboard. Never miss a scheduled tune-up
                again.
              </p>
            </div>
            <div className="amc-right">
              <div className="stat-box">
                <h2>12</h2>
                <small>SERVICES DONE</small>
              </div>
              <div className="stat-box">
                <h2>Active</h2>
                <small>AMC STATUS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;