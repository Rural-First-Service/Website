import {
    ArrowRight,
    BadgeCheck,
    IndianRupee,
} from "lucide-react";

import phone from "../../assets/images/partner/herophone.png";

export default function PartnerHero() {
    return (
        <section className="partner-hero">

            <div className="container hero-grid partner-hero-container">

                {/* LEFT */}

                <div className="hero-left">

                    <div className="partner-badge">

                        <BadgeCheck size={18} />

                        <span>Empowering Rural Professionals</span>

                    </div>

                    <h1>

                        Become a

                        <span> Service Partner </span>

                        Today.

                    </h1>

                    <p>

                        Turn your skills into earnings. Join India's trusted home
                        service network and manage your entire business directly
                        from your smartphone.

                    </p>

                    <div className="hero-buttons">

                        <button
                            className="hero-primary"
                            onClick={() => {
                                window.location.href = "https://play.google.com/store/apps/details?id=com.ruralfirstservice.partner&pcampaignid=web_share";
                            }}
                        >
                            Join Now
                            <ArrowRight size={18} />
                        </button>

                        <button
                            className="hero-secondary"
                            type="button"
                            onClick={scrollToBenefits}
                        >
                            Learn More
                        </button>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="hero-right">

                    <div className="phone-frame">

                        <div className="phone-notch"></div>

                        <img
                            src={phone}
                            alt="Partner App"
                        />

                    </div>

                    {/* Floating Card */}

                    <div className="earning-card">

                        <div className="earning-icon">

                            <IndianRupee size={22} />

                        </div>

                        <div>

                            <small>Weekly Earnings</small>

                            <h4>₹12,500.00</h4>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

const scrollToBenefits = () => {
    const section = document.getElementById("partner-benefits");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};