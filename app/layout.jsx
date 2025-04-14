import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar/Navbar";
import SessionProviderWrapper from "./SessionProviderWrapper";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jela's Café",
  description: "Experience the art of fine confectionery with handcrafted treats, delightful desserts, and exquisite flavors made with love and precision.",
};

export default async function RootLayout({ children }) {
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
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}