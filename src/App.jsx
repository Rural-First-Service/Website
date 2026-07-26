import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AMCPage from "./pages/AMCPage";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import DownloadPage from "./pages/DownloadPage";
import About from "./pages/About";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PartnerPrivacyPolicy from "./pages/PartnerPrivacyPolicy";


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/amc" element={<AMCPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/partner-privacy-policy"
            element={<PartnerPrivacyPolicy />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;