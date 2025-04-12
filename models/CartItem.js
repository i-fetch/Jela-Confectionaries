const cartItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }, { timestamps: true });
  
  export default mongoose.models.CartItem || mongoose.model("CartItem", cartItemSchema);
  