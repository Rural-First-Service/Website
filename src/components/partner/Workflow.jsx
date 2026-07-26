import {
  AppWindow,
  BadgeCheck,
  Bell,
  Wallet,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Register",
    description:
      "Download the Partner App and create your account in just a few minutes.",
    icon: AppWindow,
  },
  {
    number: "2",
    title: "Get Verified",
    description:
      "Submit your documents and skills for quick verification by our team.",
    icon: BadgeCheck,
  },
  {
    number: "3",
    title: "Receive Jobs",
    description:
      "Start getting verified customer requests directly in your app based on your location.",
    icon: Bell,
  },
  {
    number: "4",
    title: "Earn Money",
    description:
      "Complete jobs, receive customer ratings and get paid every week directly into your bank account.",
    icon: Wallet,
  },
];

export default function Workflow() {
  return (
    <section className="partner-workflow">

      <div className="container">

        <div className="section-heading">

          <span>Simple Process</span>

          <h2>How It Works</h2>

          <p>
            Start your journey with Rural First Service in just four simple
            steps.
          </p>

        </div>

        <div className="workflow-wrapper">

          <div className="workflow-line"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

              return (
                  <div className={`workflow-step ${index % 2 === 0 ? "left" : "right"}`}>

                      <div className="workflow-number">
                          {step.number}
                      </div>

                      <div className="workflow-card">

                          <div className="workflow-icon">
                              <Icon size={32} />
                          </div>

                          <h3>{step.title}</h3>

                          <p>{step.description}</p>

                      </div>

                  </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}