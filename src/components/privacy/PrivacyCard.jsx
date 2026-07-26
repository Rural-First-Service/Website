export default function PrivacyCard({
  title,
  children,
}) {
  return (

    <div className="privacy-card">

      <h4>{title}</h4>

      {children}

    </div>

  );
}