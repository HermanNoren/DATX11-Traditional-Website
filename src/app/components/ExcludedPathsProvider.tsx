"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function ExcludedPathsProvider(props: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isExcludedPage =
    pathname === "/checkout" || pathname === "/lastpage";
  return (
    <>
      {!isExcludedPage && <Navbar />}
      {props.children}
      {!isExcludedPage && <Footer />}
    </>
  );
}
