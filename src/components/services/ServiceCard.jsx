const ServiceCard = ({ service }) => {
  const handleBookNow = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.title} />
        {service.badge && (
          <span
            className={`service-badge ${
              service.badge === "Popular" ? "popular" : "sustainable"
            }`}
          >
            {service.badge}
          </span>
        )}
      </div>
      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <button onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default ServiceCard;