import {
  Users,
  BriefcaseBusiness,
  MapPinned,
  Smile,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "25K+",
    title: "Happy Customers",
    description:
      "Families trust Rural First Service for reliable home solutions.",
  },
  {
    icon: BriefcaseBusiness,
    number: "5K+",
    title: "Verified Professionals",
    description:
      "Experienced service partners trained for quality and safety.",
  },
  {
    icon: MapPinned,
    number: "150+",
    title: "Cities & Towns",
    description:
      "Expanding our services across urban and rural India.",
  },
  {
    icon: Smile,
    number: "98%",
    title: "Customer Satisfaction",
    description:
      "Thousands of successful bookings with excellent ratings.",
  },
];

export default function Stats() {
  return (
    <section className="about-stats">

      <div className="container">

        <div className="section-heading">

          <span>Our Growth</span>

          <h2>Numbers That Reflect Our Journey</h2>

          <p>
            Every booking, every customer and every partner contributes to our
            mission of building India's most trusted home service platform.
          </p>

        </div>

        <div className="stats-grid-about">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="stats-card-about" key={index}>

                <div className="stats-icon-about">
                  <Icon size={34} />
                </div>

                <h2>{item.number}</h2>

                <h4>{item.title}</h4>

                <p>{item.description}</p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}