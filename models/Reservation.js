import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true, // User ID is required
    },
    name: {
      type: String,
      required: true, // Name is required
      trim: true,
    },
    email: {
      type: String,
      required: true, // Email is required
      trim: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation
    },
    phone: {
      type: String,
      required: true, // Phone number is required
      trim: true,
    },
    date: {
      type: Date,
      required: true, // Reservation date is required
    },
    time: {
      type: String,
      required: true, // Reservation time is required
    },
    numberOfPersons: {
      type: Number,
      required: true, // Number of persons is required
      min: [1, "At least one person is required"],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending", // Default status is pending
    },
    notes: {
      type: String, // Optional field for additional notes
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Avoid model overwrite issues in development
const Reservation =
  mongoose.models.Reservation || mongoose.model("Reservation", reservationSchema);

export default Reservation;