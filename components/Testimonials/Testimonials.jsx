'use client';

import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import pesin from '@/public/happy-customer-img-1.jpg';
import pesin1 from '@/public/happy-customer-img-2.jpg';
import pesin2 from '@/public/happy-customer-img-3.jpg';

const testimonials = [
  {
    quote:
      'From the moment we walked in, the ambiance was welcoming, and the service was top-notch. The dish was absolutely delicious, full of fresh flavors, and perfectly cooked.',
    name: 'Wade L. Warren',
    role: 'Developer',
    avatar: pesin,
  },
  {
    quote:
      'Absolutely loved how the staff took the time to explain the menu and suggest pairings for our meal. Everything was beyond perfect.',
    name: 'Amanda A. Okoye',
    role: 'Food Blogger',
    avatar: pesin1,
  },
  {
    quote:
      'Absolutely loved how the staff took the time to explain the menu and suggest pairings for our meal. Everything was beyond perfect.',
    name: 'Ebuka A. Carter',
    role: 'Food Blogger',
    avatar: pesin2,
  },
];

// Autoplay plugin for Keen Slider
function AutoplayPlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 5000);
  }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      duration: 800,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [AutoplayPlugin]
  );

  return (
    <div
      className="relative h-screen overflow-hidden flex items-center justify-center bg-fixed bg-center bg-cover bg-black"
      style={{ backgroundImage: "url('/testimonials-bg.jpg')" }}
    >
      <div className="absolute inset- bg-opacity-70 z-0" />

      <div
        ref={sliderRef}
        className="keen-slider max-w-5xl w-full text-center text-white px-4 z-10"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="keen-slider__slide flex flex-col items-center justify-center px-4"
          >
            <div className="uppercase text-sm text-[#d6cba1] mb-2">
              Our Testimonials
            </div>
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
                className="rounded-full mb-2 border-2 border-white object-cover"
              />
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-[#d6cba1]">{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current.prev()}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-2 rounded-full text-lg"
          >
            &#8592;
          </button>
          <button
            onClick={() => instanceRef.current.next()}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 hover:bg-opacity-70 px-3 py-2 rounded-full text-lg"
          >
            &#8594;
          </button>
        </>
      )}

      {loaded && instanceRef.current && (
        <div className="absolute bottom-8 z-20 flex justify-center gap-2 w-full">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-[#d6cba1]' : 'bg-white opacity-40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialSlider;
