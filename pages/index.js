import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import LendingPartners from "@/components/LendingPartners";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import MortgageWiki from "@/components/MortgageWiki";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sky Mortgages</title>
      </Head>
      <HeroSection />
      <LendingPartners />
      <Testimonials />
      <MortgageWiki />
      <ContactForm />
    </div>
  );
}   