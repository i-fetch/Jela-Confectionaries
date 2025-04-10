import AboutSection from "@/components/AboutSection/AboutSection";
import Header from "@/components/Header/Header";
import OurMenu from "@/components/OurMenu/OurMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <OurMenu />

    </main>
  );
}
