const stats = [
  {
    id: 1,
    number: "1M+",
    title: "Active Users",
  },
  {
    id: 2,
    number: "50K+",
    title: "Service Partners",
  },
  {
    id: 3,
    number: "4.8★",
    title: "Average Rating",
  },
  {
    id: 4,
    number: "500+",
    title: "Cities Covered",
  },
];

function Stats() {
  return (
    <section className="stats">

      <div className="container">

        <div className="stats-grid">

          {stats.map((item) => (

            <div
              className="stat-card"
              key={item.id}
            >

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;