"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader, ShoppingBag, Trash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
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
    <div className="max-w-4xl mx-auto p-6">
      <ShoppingBag className="text-3xl font-bold mb-8" />
      {loading ? (
        <Loader size={10} className="animate-spin" />
        // <span>Loading...</span>
      ) : cartItems.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty</div>
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
                  {item.size && <p className="text-gray-500">Size: {item.size}</p>}
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
    </div>
  );
};

export default Cart;