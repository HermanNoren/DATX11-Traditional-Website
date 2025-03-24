import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { CartProvider } from "./components/cartlogic";
import ExcludedPathsProvider from "./components/ExcludedPathsProvider";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "deCube",
  description: "Because everything is better in cube form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <ExcludedPathsProvider>{children}</ExcludedPathsProvider>
        </CartProvider>
      </body>
    </html>
  );
}
