import mongoose from "mongoose";
import { connectToDB } from "@/lib/ConnectDB";
import Order from "@/models/Order";
import Product from "@/models/Product";
import User from "@/models/User";

export default async function seedOrders() {
  try {
    // Connect to the database
    await connectToDB();

    // Fetch two products (replace with valid product IDs if needed)
    const products = await Product.find().limit(2); // Fetch the first two products
    if (products.length < 2) {
      throw new Error("Not enough products found. Please seed the Product collection first.");
    }

    // Create an order
    const order = new Order({
      orderNumber: Math.floor(Math.random() * 1000000), // Generate a random order number
      user: "67fe774d1323dfbdd5a7c04d",
      items: products.map((product) => ({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: 1, // Default quantity
      })),
      totalAmount: products.reduce((total, product) => total + product.price, 0), // Calculate total amount
      status: "pending",
      deliveryAddress: {
        street: "123 Main Street",
        city: "Onitsha",
        state: "Anambra",
        postalCode: "435101",
        country: "Nigeria",
      },
      notes: "This is a test order.",
    });

    // Save the order to the database
    await order.save();

    console.log("✅ Order seeded successfully:", order);
  } catch (error) {
    console.error("❌ Error seeding order:", error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
  }
}