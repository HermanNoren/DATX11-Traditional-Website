import type { Metadata } from "next";
import "./styles/globals.css";
import { CartProvider } from "./components/cartlogic";
import ExcludedPathsProvider from "./components/ExcludedPathsProvider";

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
      <body className={`antialiased`}>
        <CartProvider>
          <ExcludedPathsProvider>{children}</ExcludedPathsProvider>
        </CartProvider>
      </body>
    </html>
  );
}
