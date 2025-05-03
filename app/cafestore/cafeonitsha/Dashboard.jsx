import React from "react";
import Link from "next/link";
import { StoreIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { getUser } from "@/controllers/getUser";
import { getUserOrder } from "@/controllers/getUserOrder"; // Import the getUserOrder server action
import DashboardTabs from "./_components/DashboardTabs/DashboardTabs";
import { getUserReservation } from "@/controllers/getUserReservation";
import { getUserFavorites } from "@/controllers/getUserFavorites";
import LogOutBtn from "@/components/LogOut/LogOutBtn";
import DashboardNav from "./_components/DashboardNav/DashboardNav";

export default async function Dashboard() {
  // Fetch the current user session
  const session = await getServerSession(authOptions);
  const currentUser = session?.user || null;

  // Fetch user details if a session exists
  const userDetails = currentUser ? await getUser(currentUser.email) : null;

  // Fetch user orders if a session exists
  const userOrders = currentUser ? await getUserOrder(currentUser.id) : [];

  // Fetch user reservations if a session exists
  const userReservations = currentUser ? await getUserReservation(currentUser.id) : [];

  // Fetch user favorite products if a session exists
  const userFavorites = currentUser ? await getUserFavorites(currentUser.id) : [];

  return (
    <div className="min-h-screen bg-[#0f1520] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/cafestore/cafeonitsha" className="text-xl font-bold text-gray-900">
          <StoreIcon />
        </Link>

        {/* Navigation */}
        <DashboardNav />
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>

        {/* Tabs */}
        <DashboardTabs userDetails={userDetails} userOrders={userOrders} userReservations={userReservations} userFavorites={userFavorites} />
      </main>
    </div>
  );
}