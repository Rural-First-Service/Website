import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Separate dropdown states
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "AMC Plans",
      href: "/amc",
    },
    {
      name: "Partner App",
      href: "/partner",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const privacyLinks = [
    {
      name: "Rural First Service",
      href: "/privacy-policy",
    },
    {
      name: "Rural First Service Partner",
      href: "/partner-privacy-policy",
    },
  ];

  return (
    <header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Rural First Service" />

          <span className="desktop-logo-text">
            Rural First Service
          </span>

          <span className="mobile-logo-text">
            Rural First Service
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((item) => (
            <Link key={item.name} to={item.href}>
              {item.name}
            </Link>
          ))}

          {/* Privacy Dropdown */}
          <div
            className="dropdown-container"
            onMouseEnter={() => setDesktopDropdown(true)}
            onMouseLeave={() => setDesktopDropdown(false)}
          >
            <button className="dropdown-btn">
              Privacy Policy

              <ChevronDown
                size={16}
                className={`dropdown-icon ${
                  desktopDropdown ? "rotate" : ""
                }`}
              />
            </button>

            <div
              className={`dropdown-menu ${
                desktopDropdown ? "dropdown-show" : ""
              }`}
            >
              {privacyLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="dropdown-item"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Right Side */}
        <div className="nav-buttons">
          <Link
            to="/download"
            className="download-btn"
          >
            <Download size={18} />
            Download App
          </Link>

          <button
            className="menu-btn"
            onClick={() => {
              setMenuOpen(!menuOpen);

              if (menuOpen) {
                setMobileDropdown(false);
              }
            }}
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show-menu" : ""
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => {
              setMenuOpen(false);
              setMobileDropdown(false);
            }}
          >
            {item.name}
          </Link>
        ))}

        {/* Mobile Dropdown */}

        <div className="mobile-dropdown">

          <button
            className="mobile-dropdown-btn"
            onClick={() =>
              setMobileDropdown(!mobileDropdown)
            }
          >
            Privacy Policy

            <ChevronDown
              size={16}
              className={`dropdown-icon ${
                mobileDropdown ? "rotate" : ""
              }`}
            />
          </button>

          <div
            className={`mobile-dropdown-menu ${
              mobileDropdown
                ? "mobile-dropdown-show"
                : ""
            }`}
          >
            <div>

              {privacyLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="mobile-dropdown-item"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdown(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          </div>

        </div>

        <Link
          to="/download"
          className="mobile-download"
          onClick={() => {
            setMenuOpen(false);
            setMobileDropdown(false);
          }}
        >
          Download App
        </Link>

      </div>
    </header>
  );
}

export default Navbar;