"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Sophia Martinez",
    role: "Executive Chef",
    image: "/alwaysquality/sophia.jpg",
  },
  {
    name: "Liam Patel",
    role: "Sous Chef",
    image: "/alwaysquality/liam.jpg",
  },
  {
    name: "Isabella Carter",
    role: "Pastry Chef",
    image: "/alwaysquality/isabella.jpg",
  },
  {
    name: "Ethan Johnson",
    role: "Restaurant Manager",
    image: "/alwaysquality/ethan.jpg",
  },
];

export default function AlwaysQuality() {
  return (
    <section className="bg-[#0d100c] text-white py-16 px-4 sm:px-6 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm text-[#b7a97a] tracking-wide font-medium">• ALWAYS QUALITY</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2">
          THE TALENTED MINDS BEHIND<br />
          EVERY <span className="text-[#c3ba91]">FLAVOURFUL</span> DISH
        </h2>
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
