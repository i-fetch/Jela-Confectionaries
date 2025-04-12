const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    phone: String,
    email: String,
    guests: Number,
    date: Date,
    time: String,
    notes: String,
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
  }, { timestamps: true });
  
  export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
  