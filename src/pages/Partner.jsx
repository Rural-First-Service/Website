import PartnerHero from "../components/partner/PartnerHero";
import Benefits from "../components/partner/Benefits";
import Workflow from "../components/partner/Workflow";
import PartnerCTA from "../components/partner/PartnerCTA";
import Layout from "../components/common/Layout";

export default function Partner() {
  return (
    <>
    <Layout>
      <PartnerHero />
      <Benefits />
      <Workflow />
      <PartnerCTA />
    </Layout>
    </>
  );
}