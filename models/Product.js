import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    cafeId: {
      type: String,
      required: true, // Ensure every product is associated with a cafe
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number, // Changed to Number for proper calculations
      required: true,
      min: [0, "Price must be a positive number"],
    },
    category: {
      type: [String], // Array of strings for multiple categories
      enum: [
        "pastries",
        "cakes",
        "beverages",
        "breads",
        "snacks",
        "salads",
        "sandwiches",
        "sides",
      ],
    },
    dietary: {
      type: [String], // Array of strings for multiple dietary options
      enum: [
        "Vegan",
        "Vegetarian",
        "Gluten-Free",
        "Nut-Free",
        "Dairy-Free",
        "Halal",
        "Kosher",
      ],
    },
    image: {
      type: String,
      trim: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Avoid model overwrite issues in dev
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;