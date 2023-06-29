 import Head from "next/head";
 import HeroSection from "@/components/HeroSection";
 import LendingPartners from "@/components/LendingPartners";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sky Mortgages</title>
      </Head>
      <HeroSection />
      <LendingPartners />
    </div>
  );
}   