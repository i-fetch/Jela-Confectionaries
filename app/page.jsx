import AboutSection from "@/components/AboutSection/AboutSection";
import DailyOffers from "@/components/DailyOffers/DailyOffers";
import Header from "@/components/Header/Header";
import MainDish from "@/components/MainDishSection/MainDish";
import OurIngredient from "@/components/OurIngredient/OurIngredient";
import OurMenu from "@/components/OurMenu/OurMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <DailyOffers />
      
      <OurMenu />
      <MainDish />
      <OurIngredient />

    </main>
  );
}
