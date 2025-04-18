"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CafeHeader from "../cafestore/cafeonitsha/_components/CafeHeader/CafeHeader";

export default function PlaceOrder({ products }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <CafeHeader totalItems={totalItems} toggleCart={toggleCart} />

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Confections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                <p className="text-gray-600 mb-4">${product.price}</p>
                <Button
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}