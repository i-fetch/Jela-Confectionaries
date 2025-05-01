import mongoose from "mongoose";

const cafeMenuSchema = new mongoose.Schema(
  {
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CafeBranch", // Reference to the CafeBranch model
      required: true,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
        required: true,
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const CafeMenu = mongoose.models.CafeMenu || mongoose.model("CafeMenu", cafeMenuSchema);
export default CafeMenu;