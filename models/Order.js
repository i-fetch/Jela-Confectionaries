import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to the Product model
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "processing", "completed", "delivered"],
      default: "pending",
    },
    paymentRef: {
      type: String, // Reference to the payment transaction ID
      default: null,
    },
    deliveryDate: {
      type: Date, // Optional field for delivery date
      default: null,
    },
    notes: {
      type: String, // Optional field for additional order notes
      default: "",
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;