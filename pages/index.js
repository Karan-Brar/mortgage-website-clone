import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import LendingPartners from "@/components/LendingPartners";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import MortgageWiki from "@/components/MortgageWiki";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LendingPartners />
      <Testimonials />
      <OurTeam />
      <MortgageWiki />
      <ContactSection />
    </div>
  );
}
