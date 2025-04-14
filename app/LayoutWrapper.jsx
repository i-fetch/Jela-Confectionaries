"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const hiddenRoutes = ["/login", "/register"];
    setShowNavbar(!hiddenRoutes.includes(pathname));
  }, [pathname]);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}
