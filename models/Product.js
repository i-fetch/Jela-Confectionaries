const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
    available: { type: Boolean, default: true }
  }, { timestamps: true });
  
  export default mongoose.models.Product || mongoose.model("Product", productSchema);
  