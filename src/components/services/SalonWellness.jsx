import CategoryTitle from "./CategoryTitle";
import ServiceCard from "./ServiceCard";
import { salonServices } from "../../data/servicesData";

const SalonWellness = () => {
  return (
    <section className="service-section salon-section">
      <div className="service-container">
        <CategoryTitle
          icon="spa"  // This will now work
          title="Salon & Wellness"
        />
        <div className="service-grid">
          {salonServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonWellness;   