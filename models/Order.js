const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }],
    totalAmount: Number,
    status: { type: String, enum: ['pending', 'paid', 'completed'], default: 'pending' },
    paymentRef: String
  }, { timestamps: true });
  
  export default mongoose.models.Order || mongoose.model("Order", orderSchema);
  