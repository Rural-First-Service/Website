import { useState } from "react";

const categories = [
  "All Services",
  "Home Maintenance",
  "Personal Care",
  "Repair & Tech",
  "Care Services",
  "Lifestyle",
];

const CategoryFilter = () => {
  const [active, setActive] = useState("All Services");

  const handleCategoryClick = (category) => {
    setActive(category);
    // Optional: Redirect to play store or filter services
    window.open(
      "https://play.google.com/store/apps/details?id=com.customer.ruralfirst&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <section className="category-filter-section">
      <div className="category-filter-container">
        {categories.map((item) => (
          <button
            key={item}
            className={`category-btn ${
              active === item ? "active-category" : ""
            }`}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter;