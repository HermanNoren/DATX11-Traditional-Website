"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { CartProvider } from './components/cartlogic';
import { usePathname } from 'next/navigation';

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isExcludedPage = pathname === '/checkoutpage' || pathname === '/confirmationpage';

  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {!isExcludedPage && <Navbar />}
          {children}
          {!isExcludedPage && <Footer />}
        </CartProvider>
      </body>
    </html>
  );
}