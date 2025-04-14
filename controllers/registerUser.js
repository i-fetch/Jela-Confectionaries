"use server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import User from "@/models/User";
import { connectToDB } from "@/lib/ConnectDB";

export async function registerUser({ username, email, password, phone }) {
  try {
    await connectToDB();

    // Validate input fields
    if (!username?.trim()) {
      return { success: false, message: "Username is required" };
    }
    if (!email?.trim()) {
      return { success: false, message: "Email is required" };
    }
    if (!password?.trim()) {
      return { success: false, message: "Password is required" };
    }
    if (!phone?.trim()) {
      return { success: false, message: "Phone number is required" };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "Invalid email format" };
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return { 
        success: false, 
        message: existingUser.email === email 
          ? "Email already in use" 
          : "Username already taken"
      };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userID = uuidv4();

    // Create a new user
    const newUser = new User({
      userID,
      username,
      email,
      password: hashedPassword,
      phone,
      isVerified: false,
    });

    await newUser.save();

    return {
      success: true,
      message: "User registered successfully",
      userID: userID
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return { 
      success: false, 
      message: error.message || "Error creating user" 
    };
  }
}