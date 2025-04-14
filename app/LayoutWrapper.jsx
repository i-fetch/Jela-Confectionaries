"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // or return a loader if needed

  const hiddenRoutes = ["/login", "/register"];
  const showNavbar = !hiddenRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}
