"use server";

import { connectToDB } from "@/lib/ConnectDB";
import Reservation from "@/models/Reservation";

export async function getUserReservation(userId) {
  try {
    await connectToDB(); // Ensure the database connection is established

    // Find all reservations for the given user ID
    const reservations = await Reservation.find({ userId }).lean();

    // Simplify the reservation data
    return reservations.map((reservation) => ({
      id: reservation._id.toString(),
      name: reservation.name,
      email: reservation.email,
      phone: reservation.phone,
      date: reservation.date,
      time: reservation.time,
      numberOfPersons: reservation.numberOfPersons,
      status: reservation.status,
      notes: reservation.notes,
      createdAt: reservation.createdAt,
    }));
  } catch (error) {
    console.error("Error fetching user reservations:", error);
    throw new Error("Failed to fetch user reservations");
  }
}