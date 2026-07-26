const CareBanner = () => {
  const handleExplore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <section className="care-banner">
      <div className="care-banner-content">
        <div className="care-text">
          <span className="care-tag">Trusted Care</span>
          <h2>
            Professional Care Services
            <br />
            At Your Doorstep
          </h2>
          <p>
            Compassionate and verified professionals providing elderly care,
            baby care, nursing assistance, and patient support whenever your
            family needs them.
          </p>
          <button onClick={handleExplore}>Explore Care Services</button>
        </div>
        <div className="care-image">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200"
            alt="Care Services"
          />
        </div>
      </div>
    </section>
  );
};

export default CareBanner;