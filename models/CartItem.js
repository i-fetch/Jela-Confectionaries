const cartItemSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1
    },
  },
  {
    timestamps: true,
  }
);

const CartItem = mongoose.models.CartItem || mongoose.model("CartItem", cartItemSchema);
export default CartItem;

