import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const CafeHeader = ({ totalItems, toggleCart, showCart = true }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-gray-900">
        Jela
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/cafestore/cafeonitsha" className=" text-gray-900 font-medium hover:text-gray-900">
          Dashboard
        </Link>
        <Link href="/cafestore/cafeonitsha/place-order" className=" text-gray-900 font-medium hover:text-gray-900">
          Place Order
        </Link>
        {/* <Link href="/services" className=" text-gray-900 font-medium hover:text-gray-900">
          Services
        </Link>
        <Link href="/about" className=" text-gray-900 font-medium hover:text-gray-900">
          About
        </Link> */}
      </nav>
      {showCart && (
        <button onClick={toggleCart} className="relative text-gray-900" aria-label="Shopping cart">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      )}
    </header>
  );
};

export default CafeHeader;