import PrivacyLayout from "../components/privacy/PrivacyLayout";
import customerPrivacy from "../data/customerPrivacy";
import Layout from "../components/common/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PrivacyLayout data={customerPrivacy} />
    </Layout>
  );
}