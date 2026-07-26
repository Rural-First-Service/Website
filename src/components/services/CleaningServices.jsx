import CategoryTitle from "./CategoryTitle";
import HorizontalServiceCard from "./HorizontalServiceCard";
import { cleaningServices } from "../../data/servicesData";

const CleaningServices = () => {
  return (
    <section className="service-section cleaning-section">
      <div className="service-container">
        <CategoryTitle
          icon="cleaning_services"  // This will now work
          title="Cleaning Services"
        />
        <div className="horizontal-services-grid">
          {cleaningServices.map((service) => (
            <HorizontalServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;