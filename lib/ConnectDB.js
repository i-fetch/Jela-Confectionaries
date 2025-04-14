import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB!");
    
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    throw new Error(error);
  }
};