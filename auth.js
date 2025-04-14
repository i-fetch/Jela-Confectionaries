import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { connectToDB } from "./lib/ConnectDB";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required");
          }

          await connectToDB();

          const user = await User.findOne({ email: credentials.email.toLowerCase().trim() });

          if (!user) {
            throw new Error("Invalid email or password");
          }

          if (!user.password) {
            throw new Error("Account not properly configured");
          }

          // Optional: Check if user is verified
          if (user.isVerified === false) {
            throw new Error("Please verify your email first");
          }

          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) {
            throw new Error("Invalid email or password");
          }

          return {
            id: user._id.toString(),
            email: user.email,
            username: user.username,  // Changed from 'name' to 'username'
            role: user.role || 'user', // Default role if not specified
            userId: user.userID,
          };
        } catch (error) {
          console.error("Authorization error:", error.message);
          throw new Error(error.message || "Login failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username; // Fixed to match returned user object
        token.role = user.role;
        token.userId = user.userId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          username: token.username, // Now matches jwt callback
          role: token.role,
          userId: token.userId,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/auth/error",
    newUser: "/register", // Redirect after first login
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);