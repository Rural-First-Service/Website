import { ArrowRight } from "lucide-react";

export default function CustomPlan() {
  return (
    <section className="custom-plan-section">
      <div className="container">

        <div className="custom-plan-content">

          <h2>
            Customized Plans for Your Needs
          </h2>

          <p>
            We believe in transparent, value-driven pricing. Since every farm
            and household has unique infrastructure, we offer customized annual
            plans tailored specifically to your equipment and scale of operation.
          </p>

          <div className="custom-plan-buttons">

            <button className="custom-primary-btn">
              Request a Quote
              <ArrowRight size={18} />
            </button>

            <button className="custom-outline-btn">
              Get a Custom Plan
            </button>

          </div>

          <span className="custom-note">
            Starting from as low as ₹999 per year for basic household
            maintenance.
          </span>

        </div>

      </div>
    </section>
  );
}