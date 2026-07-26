function HowItWorks() {
  return (
    <section className="how-section">

      <div className="container">

        <div className="how-wrapper">

          {/* LEFT SIDE */}

          <div className="how-left">

            <h2>Book in Seconds</h2>

            <p>
              We've simplified the service booking process down to
              4 easy steps. High-quality help is just a moment away.
            </p>

            <div className="support-card">

              <p>Need immediate assistance?</p>

              <button>

                <span className="material-symbols-outlined">
                  call
                </span>

                Call Support

              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="how-right">

            {/* STEP 1 */}

            <div className="step">

              <div className="step-number">
                01
              </div>

              <div className="step-content">

                <h3>Select Your Service</h3>

                <p>
                  Browse through categories like Plumbing,
                  Electrical, Solar Maintenance, or general
                  home repair. Pick what fits your needs.
                </p>

              </div>

            </div>

            {/* STEP 2 */}

            <div className="step">

              <div className="step-number">
                02
              </div>

              <div className="step-content">

                <h3>Choose Your Slot</h3>

                <p>
                  Pick a date and time that works best for you.
                  We offer flexible scheduling, including
                  emergency same-day visits.
                </p>

              </div>

            </div>

            {/* STEP 3 */}

            <div className="step">

              <div className="step-number">
                03
              </div>

              <div className="step-content">

                <h3>Expert Assigned</h3>

                <p>
                  Our algorithm matches you with the best-rated expert
                  near your location. You'll receive their profile and
                  contact details instantly.
                </p>

              </div>

            </div>

            {/* STEP 4 */}

            <div className="step">

              <div className="step-number">
                04
              </div>

              <div className="step-content">

                <h3>Service Delivered</h3>

                <p>
                  The expert arrives, completes the job to your
                  satisfaction, and you pay securely through the app.
                  Don't forget to rate the experience!
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;