export default function PrivacySidebar({ sections }) {
  return (
    <aside className="privacy-sidebar">

      <div className="privacy-sidebar-inner">

        <h3>Contents</h3>

        <nav>

          {sections.map((section) => (

            <a
              key={section.id}
              href={`#${section.id}`}
            >
              {section.title}
            </a>

          ))}

        </nav>

      </div>

    </aside>
  );
}