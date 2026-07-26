const stats = [
  {
    number: "50k+",
    label: "Active Users",
  },
  {
    number: "20min",
    label: "Avg Response Time",
  },
  {
    number: "98%",
    label: "Service Quality",
  },
  {
    number: "100+",
    label: "Rural Hubs",
  },
];

export default function ContactStats() {
  return (
    <section className="contact-stats">

      <div className="container">

        <div className="stats-grid">

          {stats.map((item, index) => (
            <div
              className="stat-card"
              key={index}
            >
              <h3>{item.number}</h3>

              <p>{item.label}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}