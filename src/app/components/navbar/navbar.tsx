import Link from "next/link";
import "./navbar.css";
import { Boxes } from "lucide-react";

function Navbar() {
  return (
    <nav className={"navbar"}>
      <Link href="/homepage" className="logo">
        <Boxes strokeWidth={1} className="logo-icon" />
      </Link>
      <div className={"navLinks"}>
        <Link href="/productpage">Products</Link>
        <Link href="/aboutpage">About Us</Link>
        <Link href="/contactpage">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
