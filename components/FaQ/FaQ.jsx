'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are your restaurant's opening hours?",
      answer:
        'Our restaurant is open daily from 10:00 AM to 10:00 PM, ensuring you can enjoy delicious meals at your convenience. For special events or holiday hours, please check our website or contact us directly.',
    },
    {
      question: 'Do you offer vegetarian or vegan options?',
      answer: '',
    },
    {
      question: 'Can I make a reservation online?',
      answer: '',
    },
    {
      question: 'Do you provide delivery or takeout services?',
      answer: '',
    },
    {
      question: 'Do you accommodate large groups or private events?',
      answer: '',
    },
    {
      question: 'Is there parking available at the restaurant?',
      answer: '',
    },
    {
      question: 'Do you have a kids’ menu?',
      answer: '',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#11110f] text-white py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10">
      {/* Left section */}
      <div>
        <p className="text-sm text-[#c4c4c4] uppercase mb-2">Frequently Asked Questions</p>
        <h2 className="text-3xl font-bold mb-4 text-white">
          GOT QUESTIONS? WE'VE <br />
          <span className="text-[#c5a47e]">GOT ANSWERS!</span>
        </h2>
        <p className="text-[#c4c4c4] mb-6">
          Whether you’re curious about features, pricing, or getting started, we’ve
          got you covered. If you don’t find what you’re looking for, our team is
          always ready to assist you.
        </p>
        <button className="bg-[#c5a47e] text-black px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
          View All Questions →
        </button>
      </div>

      {/* Right section */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#2d2c2a] rounded-md p-4 bg-[#1a1a18]"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-white text-sm md:text-base">{index + 1}. {faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#c5a47e]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#c5a47e]" />
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
