import {
  ShieldCheck,
  Users,
  BadgeCheck,
  HeartHandshake,
  Leaf,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Every professional is verified and every service follows transparent pricing with no hidden charges.",
  },
  {
    icon: BadgeCheck,
    title: "Quality First",
    description:
      "We never compromise on service quality and continuously monitor customer satisfaction.",
  },
  {
    icon: Users,
    title: "Customer Centric",
    description:
      "Everything we build is designed to create a simple, reliable and delightful customer experience.",
  },
  {
    icon: HeartHandshake,
    title: "Empowering Partners",
    description:
      "Helping skilled professionals grow their business through technology and consistent opportunities.",
  },
  {
    icon: Leaf,
    title: "Sustainable Growth",
    description:
      "Building a long-term ecosystem that benefits customers, partners and communities together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Using technology to simplify home services and make them accessible to everyone.",
  },
];

export default function Values() {
  return (
    <section className="values-section">

      <div className="container">

        <div className="section-heading">

          <span>Our Core Values</span>

          <h2>What Drives Rural First Service</h2>

          <p>
            These principles guide every decision we make and every service we
            deliver across India.
          </p>

        </div>

        <div className="values-grid">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div className="value-card" key={index}>

                <div className="value-icon">
                  <Icon size={34} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}