import Link from "next/link";
import "./navbar.css";
import { Boxes, ShoppingCart } from "lucide-react";
import { useCart } from "../cartlogic"; 

function Navbar() {
  const { cartCount } = useCart(); 

  return (
    <nav className={"navbar"}>
      <Link href="/homepage" className="logo">
        <Boxes strokeWidth={1} className="logo-icon" />
      </Link>
      <div className={"navLinks"}>
        <Link href="/productpage">Products</Link>
        <Link href="/aboutpage">About</Link>
        <Link href="/contactpage">Contacts</Link>
        <Link href="/checkoutpage" className="cart-link">
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
