import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";
import ContactStats from "../components/contact/ContactStats";
import Layout from "../components/common/Layout";

export default function Contact() {
  return (
    <>
    <Layout>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <ContactStats />
    </Layout>
    </>
  );
}