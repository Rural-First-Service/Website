const HorizontalServiceCard = ({ service }) => {
  const handleBookNow = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <div className="horizontal-service-card">
      <div className="horizontal-service-image">
        <img src={service.image} alt={service.title} />
        {service.badge && (
          <span className="horizontal-badge">{service.badge}</span>
        )}
      </div>
      <div className="horizontal-service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <button className="horizontal-book-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HorizontalServiceCard;