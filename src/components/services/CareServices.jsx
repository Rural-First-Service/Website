import CategoryTitle from "./CategoryTitle";
import CareBanner from "./CareBanner";
import ServiceCard from "./ServiceCard";
import { careServices } from "../../data/servicesData";

const CareServices = () => {
  return (
    <section className="service-section">
      <CareBanner />
      <div className="service-container">
        <CategoryTitle
          icon="volunteer_activism"  // This will now work
          title="Care Services"
        />
        <div className="service-grid">
          {careServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareServices;