import { ShieldCheck } from "lucide-react";

export default function PrivacyHero({ hero }) {
  return (
    <section className="privacy-hero">

      <div className="container">

        <div className="privacy-hero-content">

          <div className="privacy-badge">
            <ShieldCheck size={18} />
            <span>{hero.updated}</span>
          </div>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>

        </div>

      </div>

    </section>
  );
}