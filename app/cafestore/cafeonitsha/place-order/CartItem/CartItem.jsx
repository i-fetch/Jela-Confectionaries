import React from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartItem = ({ totalItems, toggleCart }) => {
  return (

    <span className="flex items-center space-x-2">
      <Link href="/cafestore/cafeonitsha/place-order" className="text-gray-900 font-medium hover:text-gray-900">
        Place Order
      </Link>
      <button onClick={toggleCart} className="animate-bounce relative text-gray-900" aria-label="Shopping cart">
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </span>
  );
};

export default CartItem;

