import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: [String],
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
      type: [String],
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
    timestamps: true,
  }
);

// Avoid model overwrite issues in dev
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
