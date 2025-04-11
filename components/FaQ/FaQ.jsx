'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are your café's opening hours?",
      answer:
        'Our café is open daily from 8:00 AM to 8:00 PM. Whether you’re stopping by for a morning espresso or an evening dessert, we’re here to serve you. Please refer to our website or social media for updates on holiday hours.',
    },
    {
      question: 'Can I place a custom cake or pastry order?',
      answer:
        'Absolutely. We specialize in custom cakes and pastries for all occasions, including birthdays, weddings, and corporate events. Please place your order at least 48 hours in advance to ensure availability and customization.',
    },
    {
      question: 'Do you provide coffee beans for purchase?',
      answer:
        'Yes, we offer our house-roasted coffee beans in whole or ground form. Whether you’re a casual coffee lover or a home-brew connoisseur, we have blends to suit every palate. Ask our barista for recommendations!',
    },
    {
      question: 'Is your café available for private events or meetings?',
      answer:
        'Yes, we offer a cozy and stylish space for private events, meetings, or intimate gatherings. Packages include catering options, beverages, and dedicated service. Contact us directly to discuss availability and pricing.',
    },
    
    {
      question: 'Do you have seasonal or limited-time treats?',
      answer:
        'We love celebrating the seasons with rotating specials and limited-time offerings, including themed pastries, holiday drinks, and unique collaborations. Follow us on Instagram or subscribe to our newsletter for the latest updates.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#11110f] text-white px-6 py-16 md:px-20 md:py-24 grid md:grid-cols-2 gap-12 items-start">
      {/* Left Panel */}
      <div className="max-w-md">
        <p className="text-xs uppercase text-[#c4c4c4] mb-2 tracking-wide">
          • Frequently Asked Questions
        </p>
        <h2 className="text-3xl font-extrabold leading-snug text-white mb-4">
          GOT QUESTIONS? WE'VE <br />
          <span className="text-[#cd9d22]">GOT ANSWERS!</span>
        </h2>
        <p className="text-[#c4c4c4] text-sm mb-6">
          Whether you're curious about features, pricing, or getting started, we've
          got you covered. If you don't find what you're looking for, our team is
          always ready to assist you.
        </p>
        <button className="bg-[#cd9d22] text-black font-medium text-sm py-2 px-4 rounded-md hover:bg-[#b9946c] transition-all">
          View All Questions →
        </button>
      </div>

      {/* Right Panel */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#2c2c2c] pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-medium text-white">
                {index + 1}. {faq.question}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="text-[#c5a47e] w-5 h-5" />
              ) : (
                <ChevronDown className="text-[#c5a47e] w-5 h-5" />
              )}
            </div>
            {openIndex === index && faq.answer && (
              <p className="mt-3 text-sm text-[#c4c4c4]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaQ;
