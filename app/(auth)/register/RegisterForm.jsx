import React from 'react';

const RegisterForm = () => {
  const handleSubmit = async (formData) => {
    'use server';
    
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Handle registration logic here (API call or validation)
    if (password !== confirmPassword) {
      return { error: "Passwords do not match." };
    }

    try {
      // Handle registration success logic (e.g., redirect or success message)
      const response = await registerUser({ email, password });
      return { success: true, data: response };
    } catch (error) {
      return { error: error.message };
    }
  };

  return (
    <section className="min-h-screen bg-[#0e100f] flex items-center justify-center px-4">
      <div className="bg-[#1a1c1a] w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create an Account</h2>
        <p className="text-sm text-gray-400 text-center mb-8">Sign up to access our special menu</p>
        <form action={handleSubmit} className="space-y-5">
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