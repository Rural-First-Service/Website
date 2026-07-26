import ContactInfo from "./ContactInfo";

const services = [
  "AC Repair & Service",
  "AC Installation",
  "AC Uninstallation",
  "Refrigerator Repair",
  "Washing Machine Repair",
  "Microwave Repair",
  "Water Purifier (RO) Service",
  "Geyser Repair",
  "Chimney Repair",
  "Hob & Cooktop Repair",
  "Television (TV) Repair",
  "Laptop Repair",
  "Desktop Computer Repair",
  "Printer Repair",
  "CCTV Installation & Repair",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Home Cleaning",
  "Deep Home Cleaning",
  "Bathroom Cleaning",
  "Kitchen Cleaning",
  "Sofa Cleaning",
  "Carpet Cleaning",
  "Mattress Cleaning",
  "Water Tank Cleaning",
  "Pest Control",
  "Termite Treatment",
  "Disinfection Service",
  "Packers & Movers",
  "Furniture Assembly",
  "Handyman",
  "Door & Window Repair",
  "Tile & Marble Work",
  "False Ceiling",
  "POP Work",
  "Glass Work",
  "Aluminium Fabrication",
  "Welding & Fabrication",
  "Gardening",
  "Housekeeping",
  "Solar Panel Installation",
  "Solar Panel Maintenance",
  "Inverter & Battery Service",
  "Generator Repair",
  "Salon at Home",
  "Haircut",
  "Hair Spa",
  "Hair Color",
  "Facial",
  "Waxing",
  "Manicure",
  "Pedicure",
  "Bridal Makeup",
  "Massage Therapy",
  "Spa at Home",
  "Baby Care",
  "Elder Care",
  "Patient Care",
  "Cook",
  "Driver",
  "Laundry & Ironing",
  "Bike Repair",
  "Car Wash",
  "Agricultural Equipment Repair",
  "Borewell Pump Repair",
  "Water Motor Repair",
  "Construction & Civil Work",
  "Interior Design",
  "Exterior Painting",
  "Roof Repair",
  "Other"
];

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-form-card">
            <h2>Send us a Message</h2>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Service Needed</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select a Service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="How can we assist you today?"
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT */}
          <ContactInfo />

        </div>
      </div>
    </section>
  );
}