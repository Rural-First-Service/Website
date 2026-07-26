import PrivacyList from "./PrivacyList";
import PrivacyCard from "./PrivacyCard";

export default function PrivacySection({ section }) {

  return (

    <section
      id={section.id}
      className="privacy-section"
    >

      <h2>{section.title}</h2>

      {section.description &&
        section.description.map((para, index) => (
          <p key={index}>{para}</p>
        ))}

      {section.groups &&
        section.groups.map((group, index) => (
          <PrivacyCard key={index} title={group.title}>
            <PrivacyList items={group.items} />
          </PrivacyCard>
        ))}

      {section.list && <PrivacyList items={section.list} />}

      {section.note && (
        <div className="privacy-note">
          {section.note}
        </div>
      )}

      {section.contact && (

        <PrivacyCard title="Contact">

          <p>
            <strong>Company :</strong>{" "}
            {section.contact.company}
          </p>

          <p>
            <strong>Website :</strong>{" "}
            <a
              href={section.contact.website}
              target="_blank"
              rel="noreferrer"
            >
              {section.contact.website}
            </a>
          </p>

          <p>
            <strong>Email :</strong>{" "}
            <a href={`mailto:${section.contact.email}`}>
              {section.contact.email}
            </a>
          </p>

        </PrivacyCard>

      )}

    </section>

  );

}