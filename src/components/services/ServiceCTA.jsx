import { ArrowRight, Phone } from "lucide-react";

const ServiceCTA = () => {
  const handleBookNow = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share",
      "_blank"
    );
  };

  const handleContact = () => {
    // You can add contact functionality here
    // For example: window.location.href = "tel:+1234567890";
    // Or navigate to contact page
  };

  return (
    <section className="service-cta">
      <div className="service-cta-overlay">
        <div className="service-cta-content">
          <span className="cta-badge">
            ⭐ Trusted by Thousands of Customers
          </span>
          <h2>
            Book Trusted Home Services
            <br />
            In Just a Few Clicks
          </h2>
          <p>
            From AC repair and plumbing to salon, cleaning, appliance
            repair, and elderly care — our verified professionals are
            ready to serve you at your doorstep.
          </p>
          <div className="service-cta-buttons">
            <button className="cta-primary-btn" onClick={handleBookNow}>
              Book a Service
              <ArrowRight size={18} />
            </button>
            <button className="cta-secondary-btn" onClick={handleContact}>
              <Phone size={18} />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;