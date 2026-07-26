import { ArrowRight, Plus } from "lucide-react";

const services = [
  {
    id: 1,
    title: "AC Servicing & Repair",
    description:
      "Expert cleaning, gas charging and major repairs for all AC types.",
    price: "Starts at ₹499",
    badge: "Top Rated",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxJkSFcbhd2cD0F3ndQqeq47st5XjRkfp2mZ-xwNTGVMRFJBCUICCAjMsbEiDGOwup-v9rQ4lyk6E5fcJ7L0ETB-xq9lmgPNMVI-tCqsMMUsjGU9pYhsh-EBcqqmyOGHo9hh9mq9G6AHl3t4gg1PprBQAHqcBR0X7VZsx6v1GtE8oRobG7LvGn5KIoNMlx41tR9mZu1BHlDR8VZS9aVd7kRSHGgWuoy119OTz29ThLqazdEagP_4ZM9A",
  },
  {
    id: 2,
    title: "RO Water Purifier",
    description:
      "Filter changes, TDS adjustment and complete maintenance.",
    price: "Starts at ₹349",
    badge: "Most Booked",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCl6pCkqkCvYmcCKj83xnYrBobk6W1DWoPwv2qeDWuzhgPLfzXZIACvou9yl0GazIrSakTd9t_kJQCnTY1uOJto1a9PmiO2M5LjVWwISB5CtfM0JdUDYk-_itXxV6DRcm1p9Mhej0AF_dB4af_Uow0o_eZkVZEOlXw1sP8XL7X4QuDAq7QcoSyVnoLEgqwf3O3k4uXcFFpjZIIy6YJHvnkHMxFZ_GWq92vfp6SX1BwkqYijRa_fj1ggcg",
  },
  {
    id: 3,
    title: "Deep Home Cleaning",
    description:
      "Eco-friendly deep cleaning for your complete home.",
    price: "Starts at ₹1,299",
    badge: "",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYMF56Ahe1f01R_pszPznMaaseCtX5g397KubVNSje1ix2EojJ-HQwfjbOO5zId7xSRc2w-c8uUsdDqOEGjULQQns-Q90g3MM9-RJZfWVewBN5fghTZA9u0dMb344F9JmXmpMIJ9SUayb6SrNDKD0YWBKlgRo9me3mh0gmlGxii9Bx3NYw4FS6VUcj-x8KberNMwh21zEt_KjM-kPgxHSLKzLB4dj6Ob3DRqZu7nRZJjwONwIh4Olx-w",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">

        <div className="services-header">

          <div>

            <h2>
              Our Most Popular
              <span> Services</span>
            </h2>

            <p>
              Expert solutions for your home and business,
              delivered by specialists you can trust.
            </p>

          </div>

          <button className="explore-btn">
            Explore All 40+ Services
            <ArrowRight size={18} />
          </button>

        </div>

        <div className="services-grid">

          {services.map((service) => (

            <div className="service-card" key={service.id}>

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

                {service.badge && (
                  <span className="service-badge">
                    {service.badge}
                  </span>
                )}

              </div>

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-bottom">

                  <span>{service.price}</span>

                  <button>
                    <Plus size={20} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;