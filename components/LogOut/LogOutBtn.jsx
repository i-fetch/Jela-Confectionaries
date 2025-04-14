"use client";

import { signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";

export default function LogOutBtn() {
  // const router = useRouter();


  const handleLogout = async () => {
    await signOut({ redirect: false }); // Prevent NextAuth default redirection
    // router.push("/"); 
    window.location.href = "/"; // Force a full page reload to ensure content is displayed correctly
  };

  return (
    <button onClick={handleLogout} className="py-2 w-full text-left text-red-500 font-medium rounded">
      Logout
    </button>
  );
}