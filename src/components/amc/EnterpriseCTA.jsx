import { ArrowRight } from "lucide-react";

export default function EnterpriseCTA() {
  return (
    <section className="enterprise-cta">

      <div className="container">

        <div className="enterprise-box">

          {/* Decorative Background */}

          <div className="enterprise-circle enterprise-circle-1"></div>
          <div className="enterprise-circle enterprise-circle-2"></div>

          <div className="enterprise-content">

            <h2>
              Need a solution for a large-scale project?
            </h2>

            <p>
              Our large-scale solutions are designed for cooperatives,
              large farming estates, and rural infrastructure projects.
              Let's build a maintenance plan that fits your exact scale.
            </p>

            <button className="enterprise-btn">
              Get a Custom Quote
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}