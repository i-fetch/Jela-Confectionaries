import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/store/cartStore";

const AddCartButton = ({ product }) => {
  const { toast } = useToast();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = async () => {
    try {
      await addToCart(product);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add item to cart",
      });
    }
  };

  return (
    <Button onClick={handleAddToCart} className="bg-yellow-600 hover:bg-yellow-500 text-black mb-5">
      Add to Cart
    </Button>
  );
};

export default AddCartButton;
