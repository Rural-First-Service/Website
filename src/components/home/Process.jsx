import {
  Smartphone,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Smartphone size={40} />,
    title: "1. Call or Book Online",
    description:
      "Choose your service on our app or give us a quick call.",
    active: false,
  },
  {
    id: 2,
    icon: <Wrench size={40} />,
    title: "2. Expert Arrives",
    description:
      "A background-verified professional arrives at your location on time.",
    active: true,
  },
  {
    id: 3,
    icon: <CheckCircle2 size={40} />,
    title: "3. Total Satisfaction",
    description:
      "Pay securely after the work is completed and you're 100% satisfied.",
    active: false,
  },
];

function Process() {
  return (
    <section className="process">

      <div className="container">

        <div className="section-title">

          <h2>
            Your Service, Just
            <span> 3 Steps Away</span>
          </h2>

          <p>
            Simple, fast and completely hassle-free process.
          </p>

        </div>

        <div className="process-wrapper">

          <div className="process-line"></div>

          {steps.map((step) => (

            <div className="process-card" key={step.id}>

              <div
                className={`process-icon ${
                  step.active ? "active-process" : ""
                }`}
              >
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;