import mongoose from "mongoose";
import { connectToDB } from "@/lib/ConnectDB";
import Product from "@/models/Product";

export default async function Home() {
  try {
    // Connect to the database
    await connectToDB();

    const updatedProducts = [
      {
        name: "Classic Croissant",
        description: "Buttery, flaky layers of hand-rolled pastry",
        price: 45, // Changed to Number
        category: "pastries", // Ensure this is an array
        dietary: "Nut-Free", // Ensure this is an array
        image: "/classic-croissant.jpg",
        available: true,
      },
      {
        name: "Chocolate Éclair",
        description: "Choux pastry filled with vanilla cream and topped with chocolate",
        price: 50,
        category: ["pastries", "cakes"], // ✅ fixed
        dietary: "Vegetarian",
        image: "/chocolate-clair.jpg",
        available: true,
      },
      {
        name: "Berry Tart",
        description: "Fresh seasonal berries atop vanilla custard in a sweet pastry shell",
        price: 65,
        category: ["pastries", "cakes"], // ✅ fixed
        dietary: "Vegetarian",
        image: "/berry-tart.jpg",
        available: true,
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk and a light layer of foam",
        price: 375,
        category: "beverages",
        dietary: "Vegan",
        image: "/cappuccino.jpg",
        available: true,
      },
      {
        name: "Sourdough Bread",
        description: "Artisanal sourdough with a crispy crust and chewy interior",
        price: 525,
        category: "breads",
        dietary: "Vegan",
        image: "/sourdough-bread.jpg",
        available: true,
      },
      {
        name: "Carrot Cake",
        description: "Moist cake with carrots, walnuts, and cream cheese frosting",
        price: 575,
        category: "cakes",
        dietary: "Vegetarian",
        image: "/carrot-cake.jpg",
        available: true,
      },
      {
        name: "Apple Danish",
        description: "Flaky pastry with a sweet apple filling",
        price: 55,
        category: "pastries",
        dietary: "Nut-Free",
        image: "/apple-danish.jpg",
        available: true,
      },
      {
        name: "Lemon Cheesecake",
        description: "Tangy, creamy cheesecake with a hint of lemon zest",
        price: 95,
        category: "cakes",
        dietary: "Nut-Free",
        image: "/lemon-cheese-cake.jpg",
        available: true,
      },
      {
        name: "Vanilla Macaron",
        description: "Delicate, crisp macaron filled with vanilla cream",
        price: 30,
        category: "pastries",
        dietary: "Nut-Free",
        image: "/vannila-macaron.jpg",
        available: true,
      },
    ];

    // Clear existing data and insert new
    await Product.deleteMany({});
    await Product.insertMany(updatedProducts);

    console.log("✅ Products seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding products:", error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
  }


  return <main>Products seeded successfully.</main>;
}