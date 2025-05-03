"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";
// import { useRouter } from "next/navigation";

export default function LogOutBtn() {
  // const router = useRouter();


  const handleLogout = async () => {
    await signOut({ redirect: false }); // Prevent NextAuth default redirection
    // router.push("/"); 
    window.location.href = "/"; // Force a full page reload to ensure content is displayed correctly
  };

  return (
    <Button onClick={handleLogout} className="py-2 w-fit text-left text-red-500 font-medium rounded">
     <LogOutIcon /> <span> Logout</span>
    </Button>
  );
}