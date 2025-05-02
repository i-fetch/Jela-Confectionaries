import mongoose from "mongoose";
import { connectToDB } from "@/lib/ConnectDB";
import Reservation from "@/models/Reservation";

export default async function seedReservations() {
  try {
    // Connect to the database
    await connectToDB();

    // User ID for the reservations
    const userId = "67fe774d1323dfbdd5a7c04d";

    // Create two reservations
    const reservations = [
      {
        userId,
        name: "Blessing Esther",
        email: "pinky20@aol.com",
        phone: "+123 456 8792",
        date: new Date("2025-01-20T00:00:00.000Z"), // Reservation date
        time: "07:00 PM", // Reservation time
        numberOfPersons: 4, // Number of persons
        status: "confirmed", // Reservation status
        notes: "Please prepare a table near the window.",
      },
      {
        userId,
        name: "Jane Smith",
        email: "jane022@aol.com",
        phone: "+123 456 8793",
        date: new Date("2025-01-22T00:00:00.000Z"), // Reservation date
        time: "06:00 PM", // Reservation time
        numberOfPersons: 2, // Number of persons
        status: "pending", // Reservation status
        notes: "Celebrating an anniversary.",
      },
    ];

    // Insert reservations into the database
    await Reservation.insertMany(reservations);

    console.log("✅ Reservations seeded successfully:", reservations);
  } catch (error) {
    console.error("❌ Error seeding reservations:", error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
  }
}