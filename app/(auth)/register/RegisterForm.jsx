import { registerUser } from '@/controllers/registerUser';
import React from 'react';

const RegisterForm = () => {
  const handleSubmit = async (formData) => {
    'use server';
    
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const phone = formData.get('phone');

    if (password !== confirmPassword) {
      return { success: false, message: "Passwords do not match." };
    }

    try {
      const response = await registerUser({ username, email, password, phone });
      return response;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  return (
    <section className="min-h-screen bg-[#0e100f] flex items-center justify-center px-4">
      <div className="bg-[#1a1c1a] w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create an Account</h2>
        <p className="text-sm text-gray-400 text-center mb-8">Sign up to access our special menu</p>
        <form action={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              required
              className="w-full mt-1 p-3 bg-[#2b2e2b] text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
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
            <label className="text-sm text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
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
          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="w-full mt-1 p-3 bg-[#2b2e2b] text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account? <a href="/login" className="text-yellow-500 hover:underline">Login</a>
        </p>
      </div>
    </section>
  );
};

export default RegisterForm;