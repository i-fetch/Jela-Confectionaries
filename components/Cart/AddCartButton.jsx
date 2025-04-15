"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AddCartButton = ({ product }) => {
  const { toast } = useToast();

  const handleAddToCart = async () => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1
        })
      });

      if (res.ok) {
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart`
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add item to cart"
      });
    }
  };

  return (
    <Button 
      onClick={handleAddToCart}
      className="bg-yellow-600 hover:bg-yellow-500 text-black"
    >
      Add to Cart
    </Button>
  );
};

export default AddCartButton;