import React from "react";

const ReservationsTab = ({ userReservations }) => {
  if (!userReservations || userReservations.length === 0) {
    return (
      <div className="text-gray-400 text-center">
        <p>No reservations found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {userReservations.map((reservation) => (
        <div
          key={reservation.id}
          className="bg-[#1a2235] rounded-lg p-6 flex justify-between items-center"
        >
          {/* Reservation Details */}
          <div>
            <h3 className="font-medium">
              Table for {reservation.numberOfPersons}
            </h3>
            <p className="text-gray-400 text-sm">
              {new Date(reservation.date).toLocaleDateString()} at{" "}
              {reservation.time}
            </p>
          </div>

          {/* Reservation Status */}
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              reservation.status === "confirmed"
                ? "bg-green-100 text-green-800"
                : reservation.status === "pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {reservation.status.charAt(0).toUpperCase() +
              reservation.status.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ReservationsTab;