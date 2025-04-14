"use server";

import { connectToDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import User from "@/models/User";
import Wallet from "@/models/Wallet";
import { sendMagicLink } from "@/lib/sendEmail";
import Otp from "@/models/Otp";

const verificationEmailTemplate = (verificationLink, otp) => {
  return `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-top: 50px;
        }

        h1 {
          color: #333333;
          text-align: center;
        }

        p {
          color: #666666;
          line-height: 1.5;

          span {
          fobt-weight: bold;
          color: #333333;
          font-size: 1.2em;
          }
        }

        a.button {
          display: block;
          margin: 0 auto;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          text-align: center;
        }

        .expire-time {
          text-align: center;
          margin-top: 10px;
          color: #999999;
        }

        .button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Verify Your Email Address</h1>
        <p>Thank you for signing up!</p>
        <p>To complete your registration, please click the button below to verify your 
        email address and Your OTP code is <span>${otp}</span> to activate your account</p>
        <a href=${verificationLink} class="button">Verify Email</a>
        <p class="expire-time">This link will expire in 10 minutes.</p>
      </div>
    </body>
    </html>
  `;
};

// Server action for registering a user
export async function registerUser({ username, email, password, phone, country, state, city }) {

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
    if (!country) {
      return { success: false, message: "Country is required" };
    }
    if (!state) {
      return { success: false, message: "State is required" };
    }
    if (!city) {
      return { success: false, message: "City is required" };
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
      country,
      state,
      city,
      isVerified: false,
    });

    // Create default wallets for the user
    const wallets = [
      { user: newUser._id, name: "Bitcoin", balance: 0 },
      { user: newUser._id, name: "Ethereum", balance: 0 },
      { user: newUser._id, name: "Solana", balance: 0 },
      { user: newUser._id, name: "XRP", balance: 0 },
      { user: newUser._id, name: "Dogecoin", balance: 0 },
      { user: newUser._id, name: "BNB", balance: 0 },
      { user: newUser._id, name: "XLM", balance: 0 },
    ];

    await Wallet.insertMany(wallets);

    // Generate verification token and save the user
    const verificationToken = newUser.getVerificationToken();
    await newUser.save();

    // Function to generate a 6-digit OTP
    const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();
    const otp = generateOtp();

    // Hash the OTP and save it in the database
    const hashedOtp = await bcrypt.hash(otp, 10);

    // Create a new OTP record in the database
    const newOtp = new Otp({
      userId: newUser._id,
      email: newUser.email,
      phoneNumber: newUser.phone,
      otp: hashedOtp,
    });
    await newOtp.save();

    
    // Generate verification link
    const verificationLink = `${process.env.NEXT_PUBLIC_URL}/verify-email?verifyToken=${verificationToken}&id=${newUser?._id}`;

    // Send verification email and OTP to the user E
    const message = verificationEmailTemplate(verificationLink, otp);
    
    await sendMagicLink(newUser?.email, "Email Verification", message);


    return {
      success: true,
      message: "User registered and wallets created successfully",
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, message: "Error creating user and wallets" };
  }
}