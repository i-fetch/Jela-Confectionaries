// "use client";
// import { useState } from 'react';


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
  },
}) => {

  // const [open, setOpen] = useState(false);

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
                className="text-sm font-medium text-white hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex gap-2">
            {/* <Button asChild variant="outline" size="sm" className=" border-white hover:opacity-15">
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>
            <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200">
              <Link href={auth.signup.url}>{auth.signup.title}</Link>
            </Button> */}
            <button size="sm" className="bg-[#a6a182] px-6 py-3 rounded-4xl text-black hover:bg-opacity-90">
              <Link className="flex items-center  text-white space-x-1.5" href="/login"><span>Book a Table</span> <ArrowRight /></Link>
            </button>

          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex justify-between items-center">
            <Link href={logo.url} className="flex items-center gap-2" aria-label="Home">
              <Image src={LogoImg} alt={logo.alt} width={32} height={32} className="rounded-full" />
              <span className="text-base font-semibold text-white">{logo.title}</span>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-2 border-white/20">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2" aria-label="Home">
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
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href={auth.login.url}>{auth.login.title}</Link>
                    </Button>
                    <Button asChild>
                      <Link href={auth.signup.url}>{auth.signup.title}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* <div className="block lg:hidden">
          <div className="flex justify-between items-center">
            <Link href={logo.url} className="flex items-center gap-2" aria-label="Home">
              <Image src={logo.image} alt={logo.alt} width={32} height={32} className="rounded-full" />
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
                      <Image src={logo.image} alt={logo.alt} width={32} height={32} />
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
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Navbar;
