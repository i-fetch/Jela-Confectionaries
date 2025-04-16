"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader, ShoppingBag, Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CartItem = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const res = await fetch("/api/cart");
      const data = await res.json();
      if (res.ok) {
        setCartItems(data);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load cart items"
      });
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (itemId) => {
    try {
      const res = await fetch(`/api/cart/${itemId}`, { method: "DELETE" });
      if (res.ok) {
        setCartItems(cartItems.filter(item => item._id !== itemId));
        toast({
          title: "Item removed",
          description: "Item has been removed from your cart"
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to remove item"
      });
    }
  };

  return (
    <span className="flex items-center justify-center max-w-fit mx-auto p-1">
      <ShoppingBag className="text-2xl text-white font-bold" />
      {loading ? (
        <Loader size={10} className="animate-spin" />
      ) : cartItems.length === 0 ? (
        <span className="hidden text-xs text-center text-gray-100">Your cart is empty</span>
      ) : (
        <div className="space-y-6">
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
                <p className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => removeItem(item._id)}
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