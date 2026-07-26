import {
    Rocket,
    Users,
    Map,
    Globe,
} from "lucide-react";

import img1 from "../../assets/images/about/img1.png";
import img2 from "../../assets/images/about/img2.jpg";
import img3 from "../../assets/images/about/img3.jpg";
import img4 from "../../assets/images/about/img4.png";

const timeline = [
    {
        year: "2024",
        title: "The Beginning",
        description:
            "Rural First Service was founded with the vision of making trusted home services available for every family.",
        icon: Rocket,
    },
    {
        year: "2025",
        title: "Partner Network",
        description:
            "Built a strong network of verified professionals and expanded our service offerings.",
        icon: Users,
    },
    {
        year: "2026",
        title: "Expansion",
        description:
            "Started serving multiple cities and towns while continuously improving customer experience.",
        icon: Map,
    },
    {
        year: "Future",
        title: "Nationwide Vision",
        description:
            "Our goal is to become India's largest home service platform connecting millions of customers and professionals.",
        icon: Globe,
    },
];

export default function Timeline() {
    return (
        <section className="about-timeline">

            <div className="container">

                <div className="timeline-grid">

                    {/* LEFT SIDE */}

                    <div className="timeline-content-area">

                        <span className="timeline-tag">
                            Our Journey
                        </span>

                        <h2>
                            The Evolution of
                            <br />
                            Service Excellence
                        </h2>

                        <div className="timeline-list">

                            {timeline.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div className="timeline-row" key={index}>

                                        <div className="timeline-marker">

                                            <div className="timeline-circle">
                                                <Icon size={18} />
                                            </div>

                                            {index !== timeline.length - 1 && (
                                                <div className="timeline-connector"></div>
                                            )}

                                        </div>

                                        <div className="timeline-info">

                                            <h4>
                                                {item.year}: {item.title}
                                            </h4>

                                            <p>{item.description}</p>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="timeline-gallery">

                        <div className="gallery-card img1">
                            <img src={img1} alt="" />
                        </div>

                        <div className="gallery-card img2">
                            <img src={img2} alt="" />
                        </div>

                        <div className="gallery-card img3">
                            <img src={img3} alt="" />
                        </div>

                        <div className="gallery-card img4">
                            <img src={img4} alt="" />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}