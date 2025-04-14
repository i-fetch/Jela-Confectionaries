"use server";

import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import User from "@/models/User";
import { connectToDB } from "@/lib/ConnectDB";


// Server action for registering a user
export async function registerUser({ username, email, password, phone }) {

  try {
    // Connect to the MongoDB database
    await connectToDB();

    // Validate input fields
    if (!username) {
      return { success: false, message: "Username is required" };
    }
    if (!email) {
      return { success: false, message: "Email is required" };
    }
    if (!password) {
      return { success: false, message: "Password is required" };
    }
    if (!phone) {
      return { success: false, message: "Phone number is required" };
    }


    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
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
      message: "User registered created successfully",
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, message: "Error creating user " };
  }
}