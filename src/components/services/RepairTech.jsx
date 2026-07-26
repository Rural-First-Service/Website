import CategoryTitle from "./CategoryTitle";
import TechCard from "./TechCard";
import { repairTech } from "../../data/servicesData";

const RepairTech = () => {
  return (
    <section className="service-section repair-tech-section">
      <div className="service-container">
        <CategoryTitle
          icon="build"  // This will now work
          title="Repair & Tech Support"
        />
        <div className="tech-grid">
          {repairTech.map((service) => (
            <TechCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairTech;