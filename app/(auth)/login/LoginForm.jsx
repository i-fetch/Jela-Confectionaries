"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    'use server';
    
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    try {
    
      // Proceed with NextAuth signIn
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        return { error: "Invalid email or password" };
      }

      return { success: true, redirectUrl: "/dashboard" };
    } catch (err) {
      return { error: "An error occurred during login" };
    }
  };

  return (
    <section className="min-h-screen bg-[#0e100f] flex items-center justify-center px-4">
      <div className="bg-[#1a1c1a] w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>
        <p className="text-sm text-gray-400 text-center mb-8">Login to access our special menu</p>
        
        <form action={async (formData) => {
          'use client';
          const result = await handleSubmit(formData);
          if (result?.error) {
            alert(result.error); // Replace with your toast notification
          }
          if (result?.success) {
            router.push(result.redirectUrl);
          }
        }} className="space-y-5">
          
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 bg-[#2b2e2b] text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full mt-1 p-3 bg-[#2b2e2b] text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account? 
          <Link href="/register" className="text-yellow-500 hover:underline ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;