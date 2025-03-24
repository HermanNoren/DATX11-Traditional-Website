import Link from "next/link";
import "./navbar.css";
import { Boxes, ShoppingCart } from "lucide-react";
import { useCart } from "../cartlogic";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className={"navbar"}>
      <Link href="/home" className="logo">
        <Boxes strokeWidth={1} className="logo-icon" />
      </Link>
      <div className={"navLinks"}>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contacts">Contacts</Link>
        <Link href="/checkout" className="cart-link">
          <div className="cart-container">
            <ShoppingCart strokeWidth={2} className="cart-icon" />
            {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
