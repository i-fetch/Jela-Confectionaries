"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LogOutBtn from "@/components/LogOut/LogOutBtn";

const DashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-gray-900 hover:text-gray-700 focus:outline-none"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Dropdown Navigation */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              href="/cafestore/cafeonitsha/menu"
              className="text-gray-900 font-medium hover:text-gray-700"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Café Menu
            </Link>
            <Link
              href="/cafestore/cafeonitsha/place-order"
              className="text-gray-900 font-medium hover:text-gray-700"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Place Order
            </Link>
            <LogOutBtn />
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6">
        <Link
          href="/cafestore/cafeonitsha/menu"
          className="text-gray-900 font-medium hover:text-gray-700"
        >
          Café Menu
        </Link>
        <Link
          href="/cafestore/cafeonitsha/place-order"
          className="text-gray-900 font-medium hover:text-gray-700"
        >
          Place Order
        </Link>
        <LogOutBtn />
      </nav>
    </div>
  );
};

export default DashboardNav;