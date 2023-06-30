import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import LendingPartners from "@/components/LendingPartners";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sky Mortgages</title>
      </Head>
      <HeroSection />
      <ContactForm />
      <LendingPartners />
    </div>
  );
}   