"use client";

import { Dot } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sophia Martinez",
    role: "Executive Chef",
    image: "/team-1.jpg",
  },
  {
    name: "Liam Patel",
    role: "Sous Chef",
    image: "/team-2.jpg",
  },
  {
    name: "Isabella Carter",
    role: "Pastry Chef",
    image: "/team-3.jpg",
  },
  {
    name: "Ethan Johnson",
    role: "Restaurant Manager",
    image: "/team-4.jpg",
  },
];

export default function AlwaysQuality() {
  return (
    <section className="bg-[#0d100c] text-white py-16 px-4 sm:px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">    
        <h3 className="uppercase text-center flex items-center justify-center text-[#a6a182] text-sm font-medium mb-4 animate-fadeInUp">
          <Dot className="relative -translate-x-2" /> <span>Always Quality</span>
        </h3>
        <h5 className="uppercase text-center w-4/5 md:1/5 mx-auto text-white text-2xl md:text-3xl font-bold mb-6 animate-fadeInUp">
          The talented minds behind <br className="hidden lg:block" /> every  <span className="text-[#cd9d22]"> flavoured confectionary.</span>
        </h5>
      </div>

      {/* Grid of Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-2xl overflow-hidden relative group shadow-md">
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-base">{member.name}</p>
              <p className="text-sm text-gray-200">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm text-gray-400 mt-12">
        Meet the passionate team behind every flavour and experience{" "}
        <span className="text-[#c3ba91] underline cursor-pointer">Meet Our Team</span>
      </p>
    </section>
  );
}
