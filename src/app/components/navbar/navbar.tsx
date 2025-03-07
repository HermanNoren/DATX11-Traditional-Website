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
        <Link href="#">Contacts</Link>
        <Link href="/checkoutpage" className="cart-link">
          <img 
            src="/shopping-cart.png" 
            alt="Cart" 
            className="cart-icon" 
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
