import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How does the billing work for an AMC?",
    answer:
      "AMC fees are typically paid annually upfront. This secures your priority status and covers all scheduled preventive maintenance visits for the next 12 months.",
  },
  {
    question: "What happens if a part needs replacement?",
    answer:
      "While the AMC covers labor and service fees, spare parts are charged separately. However, all AMC members receive priority access to our inventory and significant discounts on genuine spares.",
  },
  {
    question:
      "Are electrical and mechanical issues both covered?",
    answer:
      "Yes, our AMC covers comprehensive maintenance for both mechanical and electrical components of the equipment listed in your agreement.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="amc-faq">

      <div className="container">

        <div className="faq-heading">

          <h2>Frequently Asked Questions</h2>

        </div>

        <div className="faq-list">

          {faqData.map((item, index) => (

            <div
              key={index}
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span>{item.question}</span>

                <ChevronDown size={22} />

              </button>

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}