import mongoose from "mongoose";
import { connectToDB } from "@/lib/ConnectDB";
import Product from "@/models/Product";

export default async function Home() {
  try {
    // Connect to the database
    await connectToDB();

    const updatedProducts = [
      {
        cafeId: "718f211c-279e-448e-87b1-d6defd761842", // Onitsha Cafe ID
        name: "Classic Croissant",
        description: "Buttery, flaky layers of hand-rolled pastry",
        price: 45,
        category: ["pastries"],
        dietary: ["Nut-Free"],
        image: "/classic-croissant.jpg",
        available: true,
      },
      {
        cafeId: "718f211c-279e-448e-87b1-d6defd761842", // Onitsha Cafe ID
        name: "Chocolate Éclair",
        description: "Choux pastry filled with vanilla cream and topped with chocolate",
        price: 50,
        category: ["pastries", "cakes"],
        dietary: ["Vegetarian"],
        image: "/chocolate-clair.jpg",
        available: true,
      },
      {
        cafeId: "718f211c-279e-448e-87b1-d6defd761842", // Onitsha Cafe ID
        name: "Berry Tart",
        description: "Fresh seasonal berries atop vanilla custard in a sweet pastry shell",
        price: 65,
        category: ["pastries", "cakes"],
        dietary: ["Vegetarian"],
        image: "/berry-tart.jpg",
        available: true,
      },
      {
        cafeId: "718f211c-279e-448e-87b1-d6defd761842", // Onitsha Cafe ID
        name: "Cappuccino",
        description: "Espresso with steamed milk and a light layer of foam",
        price: 375,
        category: ["beverages"],
        dietary: ["Vegan"],
        image: "/cappuccino.jpg",
        available: true,
      },
      {
        cafeId: "718f211c-279e-448e-87b1-d6defd761842", // Onitsha Cafe ID
        name: "Sourdough Bread",
        description: "Artisanal sourdough with a crispy crust and chewy interior",
        price: 525,
        category: ["breads"],
        dietary: ["Vegan"],
        image: "/sourdough-bread.jpg",
        available: true,
      },
      {
        cafeId: "718f211c-279e-448e-87b1-d6defd761842", // Onitsha Cafe ID
        name: "Carrot Cake",
        description: "Moist cake with carrots, walnuts, and cream cheese frosting",
        price: 575,
        category: ["cakes"],
        dietary: ["Vegetarian"],
        image: "/carrot-cake.jpg",
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