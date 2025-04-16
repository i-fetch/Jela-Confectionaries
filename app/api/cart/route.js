// app/api/cart/route.js
import { NextResponse } from "next/server";

// In-memory storage for demonstration.
// WARNING: This data will be lost when the server restarts.
// Replace with your persistent storage (like a database) in production.
let cartItems = [];

/**
 * GET /api/cart
 * Retrieves all cart items.
 */
export async function GET() {
  return NextResponse.json(cartItems, { status: 200 });
}

/**
 * POST /api/cart
 * Adds a new product to the cart.
 * Expected JSON payload: { productId: string, quantity: number }
 */
export async function POST(request) {
  try {
    const { productId, quantity } = await request.json();

    // Validate input
    if (!productId || !quantity) {
      return NextResponse.json(
        { message: "Invalid payload: productId and quantity are required" },
        { status: 400 }
      );
    }

    // Check if product already exists in cart
    const existingItem = cartItems.find(
      (item) => item.product._id === productId
    );

    if (existingItem) {
      // Increment the quantity if item exists
      existingItem.quantity += quantity;
    } else {
      // Replace the dummy product details with real data from your database
      const newItem = {
        _id: Date.now().toString(), // simple unique id generation; consider a better mechanism in production
        product: {
          _id: productId,
          name: "Dummy Product", // Replace with real product name
          price: 100, // Replace with actual price
          image: "/placeholder.jpg", // Replace with actual product image url
        },
        quantity,
      };
      cartItems.push(newItem);
    }

    return NextResponse.json(
      { message: "Item added to cart" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/cart:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
