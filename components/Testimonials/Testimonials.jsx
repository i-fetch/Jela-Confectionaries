'use client';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import pesin from '@/public/happy-customer-img-1.jpg'
import pesin1 from '@/public/happy-customer-img-2.jpg'
import pesin2 from '@/public/happy-customer-img-3.jpg'

const testimonials = [
  {
    quote:
      "From the moment we walked in, the ambiance was welcoming, and the service was top-notch. The dish was absolutely delicious, full of fresh flavors, and perfectly cooked.",
    name: "Wade L. Warren",
    role: "Developer",
    avatar: pesin,
  },
  {
    quote:
      "Absolutely loved how the staff took the time to explain the menu and suggest pairings for our meal. Everything was beyond perfect.",
    name: "Amanda A. Okoye",
    role: "Food Blogger",
    avatar: pesin1,
    quality: "5/5",
  },
  {
    quote:
      "Absolutely loved how the staff took the time to explain the menu and suggest pairings for our meal. Everything was beyond perfect.",
    name: "Ebuka A. Carter",
    role: "Food Blogger",
    avatar: pesin2,
  },
];

export default function TestimonialSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slideChanged() {},
    duration: 800,
    arrow: true
  });

  return (
    <div className="relative h-[90vh] overflow-hidden flex items-center justify-center ">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black ">
        <Image
          src='/testimonials-bg.jpg' // Replace with your actual image
          alt="background"
          fill
          className="object-cover pb-20 relative  bg-fixed bg-center bg-cover bg-no-repeat h-full overflow-hidden bg-black opacity-70"
        />
        <div className="absolute inset-0 
         " />
      </div>

      {/* Slider Content */}
      <div ref={sliderRef} className="keen-slider max-w-3xl w-full text-center text-white px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="keen-slider__slide flex flex-col items-center justify-center px-4">
            <div className="uppercase text-sm text-[#d6cba1] mb-2">Our Testimonials</div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              REAL STORIES OF MEMORABLE <br />
              <span className="text-[#d6cba1]">MEALS AND EXPERIENCES</span>
            </h2>

            <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 max-w-xl">
              “{t.quote}”
            </p>

            <div className="flex flex-col items-center">
              <Image
                src={t.avatar}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full mb-2 border-2 border-white"
              />
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-[#d6cba1]">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
