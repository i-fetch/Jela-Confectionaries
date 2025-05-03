//auth.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { connectToDB } from "./lib/ConnectDB";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Connect to MongoDB
          await connectToDB();

          const { email, password } = credentials;

          console.log("Authorizing user with email:", email);

          const user = await User.findOne({ email });

          if (!user) {
            console.error("No user found with the provided email.");
            throw new Error("No user found with the provided email.");
          }

          console.log("User found:", user);

          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            console.error("Invalid password for user:", email);
            throw new Error("Invalid email or password.");
          }

          console.log("User authorized successfully:", email);

          // Return a minimal user object
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.username,
            role: user.role,
            userId: user._id.toString(),
          };
        } catch (error) {
          console.error("Error during authorization:", error.message);
          throw new Error("Authorization failed. Please try again.");
        }
      }
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
        token.name = user.name; // Ensure consistency
        token.role = user.role;
        token.userId = user.userId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name, // Ensure consistency
        role: token.role,
        userId: token.userId,
      };
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
