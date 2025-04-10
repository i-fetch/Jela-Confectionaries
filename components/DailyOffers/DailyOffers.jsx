import Image from 'next/image';
import PizzaImage from '@/public/pizza.png';
import { CircleCheck, CircleCheckBig, Dot, MoveRight } from 'lucide-react';

import BurgerImage from '@/public/daily-offer-image.png';
import Link from 'next/link';
const DailyOffers = () => {
  return (
    <div className="bg-[#0e0e0e] text-white px-6 py-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">


      <div className="absolute inset-0 md:hidden z-0 flex justify-center items-center opacity-10 pointer-events-none animate-spinSlow">
        <Image src={PizzaImage} alt="Pizza Overlay" className="w-[300px] h-auto object-contain" />
      </div>


      <div className="relative w-full md:w-1/2 flex justify-center items-center z-10">
        <Image src={BurgerImage} alt="Delicious Burger" className="w-[260px] md:w-[490px] z-10" />

        <div className="absolute bottom-[-20px] right-4 bg-[#b2a98f] text-white p-4 md:p-6 rounded-4xl w-[190px] h-[180px] md:h-[220px] md:w-[260px] z-20 shadow-lg">
          <h3 className="text-lg md:text-xl font- mb-1">Delicious Burger</h3>
          <div className="text-yellow-400 text-base md:text-lg mb-2">★★★★★</div>
          <ul className="text-sm md:text-base space-y-2">
            {["Tomato Sauces", "Vegitables", "Lettuce", "Cheese Slice"].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CircleCheck size={16} className="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 📋 Right - Text Content + Buttons */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 relative z-10 text-center md:text-left">
        <h3 className="uppercase flex items-center text-[#b2a98f]0 text-sm font-medium mb-4 animate-fadeInUp">
          <Dot className="relative -translate-x-2" /> <span>OUR DAILY OFFERS</span>
        </h3>
        <h2 className="uppercase text-white text-2xl md:text-3xl font-bold mb-6 animate-fadeInUp">
        TASTE THE SAVINGS WITH OUR <br className='hidden md:block' />
          <span className="text-[#b2a98f]">DAILY SPECIALS</span>
        </h2>
        <p className="text-base text-white md:text-lg mb-8 animate-fadeInUp">
        Every day is an opportunity to enjoy your favorites at a discounted price. Explore our daily rotating specials and indulge in flavorful meals at a fraction of the cost.
        </p>
        <ul className="text-gray-300 text-sm md:text-base space-y-2 mb-8">
          <li className='flex space-x-2'> <CircleCheckBig /> <span>Seasonal & Locally Sourced Ingredients</span></li>
          <li className='flex space-x-2'> <CircleCheckBig /> <span>Vegetarian & Dietary-Friendly Options</span></li>
          <li className='flex space-x-2'> <CircleCheckBig /> <span> Exquisite Pairings & Unique Flavors</span></li>
        </ul>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
          <Link  href="#"
            className="font-semibold px-6 py-3 w-fit flex space-x-2 items-center justify-center slide-in-from-bottom ease-in-out duration-300 text-white rounded-3xl bg-[#A6A182] hover:bg-white hover:text-black transition" >
            <span>Book Now</span> <MoveRight />
          </Link>
          <Link href="#"
            className="font-semibold px-6 py-3 w-fit flex space-x-2 items-center justify-center slide-in-from-bottom ease-in-out duration-300 text-white rounded-3xl bg-[#A6A182] hover:bg-white hover:text-black transition">
            <span>Explore Menu</span> <MoveRight />
          </Link>
        </div>
      </div>

      {/* 🍕 Pizza on bottom right for md+ screens */}
      <div className="hidden md:block absolute bottom-10 right-0 w-[250px] z-0 animate-spin opacity-60">
        <Image src={PizzaImage} alt="Pizza" className="w-full object-contain" />
      </div>
    </div>
  );
};



export default DailyOffers;
