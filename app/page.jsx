import AboutSection from "@/components/AboutSection/AboutSection";
import DailyOffers from "@/components/DailyOffers/DailyOffers";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <DailyOffers/>

    </main>
  );
}
