import Layout from "../components/common/Layout";

import ServicesHero from "../components/services/ServicesHero";
import CategoryFilter from "../components/services/CategoryFilter";
import HomeMaintenance from "../components/services/HomeMaintenance";
import CleaningServices from "../components/services/CleaningServices";
import SalonWellness from "../components/services/SalonWellness";
import RepairTech from "../components/services/RepairTech";
import CareServices from "../components/services/CareServices";
import ServiceCTA from "../components/services/ServiceCTA";
import { Helmet } from "react-helmet-async";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Home Services | Rural First Service</title>
        <meta
          name="description"
          content="Explore professional home services including AC repair, plumbing, electrician, appliance repair, cleaning, pest control and more."
        />
      </Helmet>
    <Layout>
      <ServicesHero />
      <CategoryFilter />
      <HomeMaintenance />
      <CleaningServices />
      <SalonWellness />
      <RepairTech />
      <CareServices />
      <ServiceCTA />
    </Layout>
    </>
  );
};

export default ServicesPage;