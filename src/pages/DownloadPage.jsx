// DownloadPage.jsx
import Layout from "../components/common/Layout";
import Hero from "../components/download/Hero";
import Features from "../components/download/Features";
import HowItWorks from "../components/download/HowItWorks";
import CTA from "../components/download/CTA";

export default function DownloadPage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </Layout>
  );
}