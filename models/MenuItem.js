const menuItemSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    description: String,
    price: Number,
    isAvailable: {
      type: Boolean,
      default: true,
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

const MenuItem =
  mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
