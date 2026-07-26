import { ChevronRight } from "lucide-react";
import {
  Home,
  Sparkles,
  Droplets,
  Wrench,
  Heart,
} from "lucide-react";

const iconMap = {
  home_repair_service: Home,
  cleaning_services: Sparkles,
  spa: Droplets,
  build: Wrench,
  volunteer_activism: Heart,
};

const CategoryTitle = ({
  icon: iconName,
  title,
  buttonText = "View All",
  showButton = true,
}) => {
  const IconComponent = iconMap[iconName];

  const handleViewAll = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <div className="category-title">
      <div className="category-heading">
        <div className="category-icon">
          {IconComponent && <IconComponent size={28} strokeWidth={2} />}
        </div>
        <h2>{title}</h2>
      </div>
      {showButton && (
        <button className="view-all-btn" onClick={handleViewAll}>
          {buttonText}
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
};

export default CategoryTitle;