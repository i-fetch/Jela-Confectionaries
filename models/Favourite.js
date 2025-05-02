import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true, // User ID is required
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
      required: true, // Product ID is required
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Avoid model overwrite issues in development
const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", favoriteSchema);

export default Favorite;