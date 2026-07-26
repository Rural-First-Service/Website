import CategoryTitle from "./CategoryTitle";
import ServiceCard from "./ServiceCard";
import { homeMaintenance } from "../../data/servicesData";

const HomeMaintenance = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <CategoryTitle
          icon="home_repair_service"  // This will now work
          title="Home Maintenance"
        />
        <div className="service-grid">
          {homeMaintenance.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMaintenance;