import AboutSection from "@/components/AboutSection/AboutSection";
import DailyOffers from "@/components/DailyOffers/DailyOffers";
import Footers from "@/components/Footers/Footers";
import Header from "@/components/Header/Header";
import MainDish from "@/components/MainDishSection/MainDish";
import Menu2 from "@/components/Menu2/Menu2";
import Navbar from "@/components/Navbar/Navbar";
import OurIngredient from "@/components/OurIngredient/OurIngredient";
import OurMenu from "@/components/OurMenu/OurMenu";
import OurVideo from "@/components/OurVideo/OurVideo";
import ReserveTable from "@/components/ReserveTable/ReserveTable";
import TestimonialSlider from "@/components/Testimonials/Testimonials";
import { getAllProducts } from "@/controllers/getAllProducts";


export default async function Home() {
  // Fetch products server-side
   const foodItems = await getAllProducts();

  return (
    <main>
      <Navbar />
      <Header />
      <AboutSection />
      <DailyOffers /> 
      <OurMenu />
      <Menu2 foodItems={foodItems} />
      <MainDish />
      <OurVideo />
      <OurIngredient />
      <TestimonialSlider/>
      <ReserveTable />
      <Footers />
      

    </main>
  );
}
