"use client";

import { useState } from "react";
import { useSession } from "next-auth/react"; // Import useSession from next-auth
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoImg from "@/public/logo-img.jpg";
import Image from "next/image";
import LogOutBtn from "@/components/LogOut/LogOutBtn"; // Import the LogOutBtn component

const Navbar = ({
  logo = {
    url: "/",
    alt: "Jela's Café Logo",
    title: "Jela's Café",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Service", url: "/services" },
    { title: "Menu", url: "/menu" },
    { title: "Contact", url: "/contact" },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/signup" },
    placeorder: { title: "Place Order", url: "/cafestore" },
  },
}) => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession(); // Get session data

  return (
    <section className="absolute py-2 border-b-2 border-[#c3c0c06b] top-0 left-0 w-full z-50 bg-transparent border-bottom">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href={logo.url} className="flex items-center gap-2" aria-label="Home">
              <Image src={LogoImg} alt={logo.alt} width={40} height={40} className="rounded-full" />
              <span className="text-lg font-semibold tracking-tighter text-white">
                {logo.title}
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-sm font-medium text-white border-b-0 hover:border-b-2 hover:border-[#cd9d22] hover:text-[#cd9d22]"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center relative">
            {session ? (
              // Show LogOutBtn when user is logged in
              <LogOutBtn />
            ) : (
              // Show Login and Sign up buttons when user is not logged in
              <>
                <Button
                  asChild
                  size="sm"
                  className="text-white bg-[#cd9d22] hover:bg-white hover:text-black"
                >
                  <Link href={auth.login.url}>{auth.login.title}</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="text-white bg-[#cd9d22] hover:bg-white hover:text-black"
                >
                  <Link href={auth.signup.url}>{auth.signup.title}</Link>
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex justify-between items-center">
            <Link href={logo.url} className="flex items-center gap-2" aria-label="Home">
              <Image src={LogoImg} alt={logo.alt} width={32} height={32} className="rounded-full" />
              <span className="text-base font-semibold text-white">{logo.title}</span>
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-2 border-white/20">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href={logo.url}
                      className="flex items-center gap-2"
                      aria-label="Home"
                      onClick={() => setOpen(false)}
                    >
                      <Image src={LogoImg} alt={logo.alt} width={32} height={32} />
                      <span className="text-base font-semibold">{logo.title}</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  {menu.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="text-md font-semibold"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3">
                    {session ? (
                      // Show LogOutBtn when user is logged in
                      <LogOutBtn />
                    ) : (
                      // Show Login and Sign up buttons when user is not logged in
                      <>
                        <Button asChild variant="outline">
                          <Link href={auth.login.url} onClick={() => setOpen(false)}>
                            {auth.login.title}
                          </Link>
                        </Button>
                        <Button asChild>
                          <Link href={auth.signup.url} onClick={() => setOpen(false)}>
                            {auth.signup.title}
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
