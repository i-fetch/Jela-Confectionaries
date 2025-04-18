"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";

const AddToCartButton = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart); // Access the addToCart function from the global store

  return (
    <Button
      className="w-full bg-gray-900 hover:bg-gray-800 text-white"
      onClick={() => addToCart(product)} // Call the addToCart function
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;