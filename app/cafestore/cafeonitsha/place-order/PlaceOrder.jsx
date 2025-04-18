"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, X, Plus, Minus, StoreIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem/CartItem";
import CafeHeader from "../_components/CafeHeader/CafeHeader";

export default function PlaceOrder({ products }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);

      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
          </div>

          <div className="flex-1 overflow-auto p-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-900">{item.name}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decrementItem(item._id)}
                          className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="h-4 w-4 text-gray-900" />
                        </button>
                        <span className="text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => incrementItem(item._id)}
                          className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="h-4 w-4 text-gray-900" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-gray-900 mr-2">${(item.price * item.quantity)}</p>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-gray-500 hover:text-gray-900"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold text-gray-900">Total:</p>
              <p className="font-semibold text-gray-900">${totalPrice}</p>
            </div>
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white" disabled={cartItems.length === 0}>
              Checkout
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isCartOpen && <div className="fixed inset-0 bg-black/70 bg-opacity-50 z-40" onClick={() => setIsCartOpen(false)} />}
    </div>
  );
}