import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ravi Shankar",
    location: "Indore, MP",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Finally a professional service in my rural area! The AC technician was highly skilled and the pricing was exactly what was quoted. Truly a game changer.",
  },
  {
    id: 2,
    name: "Priya Mehra",
    location: "Ludhiana, PB",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I've been using their RO maintenance plan for a year now. The timely filter changes and courteous staff make it so easy. Highly recommended.",
  },
  {
    id: 3,
    name: "Arjun Varma",
    location: "Jaipur, RJ",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Excellent cleaning service. They arrived with professional equipment and spent hours deep cleaning my home. Worth every rupee.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-title">

          <h2>
            What Our Customers
            <span> Are Saying</span>
          </h2>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <div
              className="testimonial-card"
              key={item.id}
            >

              <div className="stars">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    fill="#FFD700"
                    color="#FFD700"
                  />
                ))}

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="testimonial-user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.location}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;