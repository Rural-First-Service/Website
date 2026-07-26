import { Mail } from "lucide-react";

export default function PrivacyCTA({ cta }) {
  return (

    <section className="privacy-cta">

      <div className="container">

        <div className="privacy-cta-card">

          <Mail size={45} />

          <h2>{cta.title}</h2>

          <p>{cta.description}</p>

          <a
            href={`mailto:${cta.email}`}
            className="privacy-btn"
          >
            Contact Us
          </a>

        </div>

      </div>

    </section>

  );
}