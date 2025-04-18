import React from "react";
import Link from "next/link";
import { Store } from "lucide-react";
import CartItem from "../../place-order/CartItem/CartItem";

const CafeHeader = ({ totalItems, toggleCart }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/cafestore/cafeonitsha" className="text-xl font-bold text-gray-900">
        <Store />
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/cafestore/cafeonitsha/menu" className="text-gray-900 font-medium hover:text-gray-900">
          Café Menu
        </Link>
      </nav>

      {/* Cart Icon */}
      <CartItem totalItems={totalItems} toggleCart={toggleCart} />
    </header>
  );
};

export default CafeHeader;