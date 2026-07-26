import PrivacySection from "./PrivacySection";

export default function PrivacyContent({ sections }) {

  return (

    <div className="privacy-content">

      {sections.map((section) => (

        <PrivacySection
          key={section.id}
          section={section}
        />

      ))}

    </div>

  );

}