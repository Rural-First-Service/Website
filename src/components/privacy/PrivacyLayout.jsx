import PrivacyHero from "./PrivacyHero";
import PrivacySidebar from "./PrivacySidebar";
import PrivacyContent from "./PrivacyContent";
import PrivacyCTA from "./PrivacyCTA";

export default function PrivacyLayout({ data }) {
  return (
    <>
      <PrivacyHero hero={data.hero} />

      <section className="privacy-layout">
        <div className="container privacy-grid">

          <PrivacySidebar sections={data.sections} />

          <PrivacyContent sections={data.sections} />

        </div>
      </section>

      <PrivacyCTA cta={data.cta} />
    </>
  );
}