"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Reservation from "@/models/Reservation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function createReservation(data) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      throw new Error("You must be logged in to create a reservation.");
    }

    const userId = session.user.userId; // Get userId from session

    await connectToDB(); // Ensure the database connection is established

    const reservation = await Reservation.create({
      userId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.date,
      time: data.time,
      numberOfPersons: data.numberOfPersons,
    });

    // Convert the Mongoose document to a plain object
    // return reservation.toObject();
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw new Error("Failed to create reservation");
  }
}