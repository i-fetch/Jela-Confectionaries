import mongoose from "mongoose";

const dietarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Dietary = mongoose.models.Dietary || mongoose.model("Dietary", dietarySchema);
export default Dietary;