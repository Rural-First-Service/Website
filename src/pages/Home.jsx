import Layout from "../components/common/Layout";

import Hero from "../components/home/Hero";
import CompanyIntro from "../components/home/CompanyIntro";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import DownloadApp from "../components/home/DownloadApp";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Rural First Service | Home</title>
        <meta
          name="description"
          content="Book trusted home services including AC repair, plumbing, electrician, cleaning, salon, appliance repair and more."
        />
      </Helmet>
    
    <Layout>
      <Hero />
      <CompanyIntro />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <DownloadApp />
    </Layout>
    </>
  );
}

export default Home;