import { Search } from "lucide-react";

const ServicesHero = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // You can implement search functionality or redirect to play store
    window.open(
      "https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <section className="services-hero">
      <div className="services-hero-container">
        <h1 className="services-title">
          Professional Services, Delivered to Your Doorstep
        </h1>
        <p className="services-subtitle">
          Premium maintenance, cleaning, and care services tailored for
          modern rural living. Reliable. Professional. Guaranteed.
        </p>
        <div className="services-search-wrapper">
          <form className="services-search" onSubmit={handleSearch}>
            <Search className="search-icon" size={22} />
            <input
              type="text"
              placeholder="Search for 'AC Repair', 'Painting', or 'Salon'..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;