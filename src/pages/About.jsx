import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import Values from "../components/about/Values";
import Stats from "../components/about/Stats";
import Timeline from "../components/about/Timeline";
import CTA from "../components/about/CTA";
import Layout from "../components/common/Layout";

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <MissionVision />
      <Values />
      <Stats />
      <Timeline />
      <CTA />
    </Layout>
  );
}
