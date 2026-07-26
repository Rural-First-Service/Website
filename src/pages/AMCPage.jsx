import Layout from "../components/common/Layout";

import Hero from "../components/amc/Hero";
import WhatIsAMC from "../components/amc/WhatIsAMC";
import CustomPlan from "../components/amc/CustomPlan";
import FAQ from "../components/amc/FAQ";
import EnterpriseCTA from "../components/amc/EnterpriseCTA";
import { Helmet } from "react-helmet-async";

export default function AMCPage() {
  return (
    <>
      <Helmet>
        <title>AMC Plans | Rural First Service</title>
        <meta
          name="description"
          content="Choose affordable Annual Maintenance Plans for your home appliances and enjoy hassle-free service throughout the year."
        />
      </Helmet>
    <Layout>
      <Hero />
      <WhatIsAMC />
      <CustomPlan />
      <FAQ />
      <EnterpriseCTA />
    </Layout>
    </>
  );
}