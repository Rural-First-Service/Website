import mapImage from "../../assets/images/contact/map.png";
// Replace with your own map image

export default function ContactMap() {
  return (
    <section className="contact-map-section">

      <div className="container">

        <div className="contact-map">

          <img
            src={mapImage}
            alt="Rural First Service Office"
          />

          <div className="location-card">

            <div className="location-top">

              <span className="location-dot"></span>

              <span className="location-label">
                Live Location
              </span>

            </div>

            <h3>Rural First Service HQ</h3>

            <p>
              Centralized Command Center for Rural Infrastructure
              Management.
            </p>

            <button
              className="direction-btn"
              onClick={() =>
                window.open(
                  "https://maps.google.com",
                  "_blank"
                )
              }
            >
              Get Directions
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}