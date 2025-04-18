"use client"
import React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader, ShoppingBag, Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/store/cartStore";

const CartItem = () => {
  const { toast } = useToast();
  const { cartItems, fetchCartItems, removeFromCart, loading } = useCartStore();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <span className="flex items-center justify-center max-w-fit mx-auto p-1">
      <ShoppingBag className="text-2xl text-white font-bold" />
      {loading ? (
        <Loader size={10} className="animate-spin" />
      ) : cartItems.length === 0 ? (
        <span className="hidden text-xs text-center text-gray-100">Your cart is empty</span>
      ) : (
        <div className="fixed right-0 top-16 w-full md:w-96 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 h-screen p-4 z-40 overflow-y-auto space-y-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div className="flex items-center gap-4">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-semibold">${(item.product.price * item.quantity)}</p>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={async () => {
                    await removeFromCart(item._id);
                    toast({
                      title: "Item removed",
                      description: "Item has been removed from your cart"
                    });
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <Button className="bg-yellow-600 hover:bg-yellow-500 text-black">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </span>
  );
};

export default CartItem;
