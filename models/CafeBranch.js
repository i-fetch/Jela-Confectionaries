import mongoose from "mongoose";

const cafeBranchSchema = new mongoose.Schema(
  {
    cafeId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },

    
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const CafeBranch = mongoose.models.CafeBranch || mongoose.model("CafeBranch", cafeBranchSchema);
export default CafeBranch;