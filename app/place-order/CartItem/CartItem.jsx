import React from "react";
import { ShoppingCart } from "lucide-react";

const CartItem = ({ totalItems, toggleCart }) => {
  return (
    <button onClick={toggleCart} className="relative text-gray-900" aria-label="Shopping cart">
      <ShoppingCart className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartItem;