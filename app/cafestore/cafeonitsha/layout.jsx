import { Geist, Geist_Mono } from "next/font/google";
import "../../../app/globals.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import SessionProviderWrapper from "@/app/SessionProviderWrapper";
// import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jela's Café Store",
  description:
    "Experience the art of fine confectionery with handcrafted treats, delightful desserts, and exquisite flavors made with love and precision.",
};

export default async function CafeStoreLayout({ children }) {
  // Fetch the session from the server
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
        suppressHydrationWarning
      >
        <SessionProviderWrapper session={session}>
          {/* <Navbar /> */}
          {children}
        </SessionProviderWrapper>
        <Toaster />
      </body>
    </html>
  );
}