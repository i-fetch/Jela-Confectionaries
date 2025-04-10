import Image from 'next/image';
import PizzaImage from '@/public/daily-offer-image.png'; // Replace with your actual image path
import BurgerImage from '@/public/daily-offer-image.png';   // Replace with your actual image path
const DailyOffers = () => {
    return (
      <div className="bg-[#0e0e0e] text-white px-6 py-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        
        {/* 🍕 Pizza Overlay - visible on mobile behind text */}
        <div className="absolute inset-0 md:hidden z-0 flex justify-center items-center opacity-10 pointer-events-none animate-spinSlow">
          <Image src={PizzaImage} alt="Pizza Overlay" className="w-[300px] h-auto object-contain" />
        </div>
  
        {/* 🍔 Left - Burger Image + Info */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center z-10">
          <Image src={BurgerImage} alt="Delicious Burger" className="w-[260px] md:w-[490px] z-10" />
  
          <div className="absolute bottom-[-20px] right-4 bg-[#b2a98f] text-white p-4 md:p-6 rounded-4xl w-[190px] h-[180px] md:h-[220px] md:w-[260px] z-20 shadow-lg">
            <h3 className="text-lg md:text-xl font-sans mb-1">Delicious Burger</h3>
            <div className="text-yellow-400 text-base md:text-lg mb-2">★★★★★</div>
            <ul className="text-sm md:text-base space-y-1">
              <li>✔ Tomato Sauces</li>
              <li>✔ Vegitables</li>
              <li>✔ Lettuce</li>
              <li>✔ Cheese Slice</li>
            </ul>
          </div>
        </div>
  
        {/* 📋 Right - Text Content + Buttons */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative z-10 text-center md:text-left">
          <p className="text-xs md:text-sm tracking-widest text-[#b2a98f] font-semibold mb-2">OUR DAILY OFFERS</p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
            TASTE THE SAVINGS WITH OUR <br />
            <span className="text-[#b2a98f]">DAILY SPECIALS</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Every day is an opportunity to enjoy your favorites at a discounted price. Explore our daily rotating specials and indulge in flavorful meals at a fraction of the cost.
          </p>
          <ul className="text-gray-300 text-sm md:text-base space-y-2 mb-8">
            <li>✔ Seasonal & Locally Sourced Ingredients</li>
            <li>✔ Vegetarian & Dietary-Friendly Options</li>
            <li>✔ Exquisite Pairings & Unique Flavors</li>
          </ul>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <button className="bg-[#b2a98f] text-white px-10 py-4 rounded-full font-semibold hover:bg-white  transition hover:text-black">
              Book Table →
            </button>
            <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-[#a79f88]  transition">
              Explore Menu →
            </button>
          </div>
        </div>
  
        {/* 🍕 Pizza on bottom right for md+ screens */}
        <div className="hidden md:block absolute bottom-0 right-0 w-[250px] z-0 animate-spinSlow opacity-60">
          <Image src={PizzaImage} alt="Pizza" className="w-full object-contain" />
        </div>
      </div>
    );
  };
  


export default DailyOffers;
