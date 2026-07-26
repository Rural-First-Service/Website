export default function PrivacyList({ items }) {
  return (

    <ul className="privacy-list">

      {items.map((item, index) => (

        <li key={index}>{item}</li>

      ))}

    </ul>

  );
}