"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const { toast } = useToast();

  const router = useRouter();

  const handleSubmit = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    try {
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
        
        <form 
          action={async (formData) => {
            const result = await handleSubmit(formData);
            if (result?.error) {
              toast({
                variant: "destructive",
                title: "Error",
                description: "An error occurred. Please try again later.",
              });
              // alert(result.error); // Replace with your toast notification
            }
            if (result?.success) {
              router.push(result.redirectUrl);
            }
          }} 
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              required
              className="bg-[#2b2e2b] text-white border-[#2b2e2b] focus-visible:ring-yellow-600"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-lg"
          >
            Login
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link href="/register" className="text-yellow-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;