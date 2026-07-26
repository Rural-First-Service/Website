import { Handshake, Star, Receipt, HardHat } from "lucide-react";

const features = [
  {
    icon: <Handshake size={30} />,
    title: "Institutional Trust",
    description:
      "Background-verified professionals you can rely on every time.",
  },
  {
    icon: <Star size={30} />,
    title: "Premium Quality",
    description:
      "Standardized service kits and tools for the highest finish.",
  },
  {
    icon: <Receipt size={30} />,
    title: "Transparent Pricing",
    description: "No hidden charges. Upfront pricing before work starts.",
  },
  {
    icon: <HardHat size={30} />,
    title: "Expert Training",
    description:
      "Every technician undergoes 100+ hours of skill training.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f4f7f3]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Why Rural First Service?
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            We don't just provide services; we build trust through
            transparency and unmatched quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 text-center natural-shadow card-lift"
            >
              <div className="w-16 h-16 rounded-full bg-green-600/10 text-green-600 flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;