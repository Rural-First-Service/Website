import PrivacyLayout from "../components/privacy/PrivacyLayout";
import Layout from "../components/common/Layout";
import partnerPrivacy from "../data/partnerPrivacy";

export default function PartnerPrivacyPolicy() {
  return (
    <Layout>
      <PrivacyLayout
        data={partnerPrivacy}
      />
    </Layout>
  );
}