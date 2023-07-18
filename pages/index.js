import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import LendingPartners from "@/components/LendingPartners";
import ContactSection from "@/components/ContactSection";
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
      <ContactSection />
    </div>
  );
}
