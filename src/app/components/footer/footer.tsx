import Link from "next/link";
import "./footer.css";
import { Facebook, Instagram, Linkedin, Boxes } from "lucide-react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <div className="info-column">
          <p>View products</p>
          <Link href="/productpage">
            <button className="footer-button">Products</button>
          </Link>
        </div>
        <div className="info-column">
          <p>About deCube</p>
          <Link href="/aboutpage">
            <button className="footer-button">About Us</button>
          </Link>
        </div>
        <div className="info-column">
          <p>Contact us</p>
          <Link href="/contactpage">
            <button className="footer-button">Contact</button>
          </Link>
        </div>
      </div>

      <nav className="footer">
        <p className="copyright"> © deCube</p>
        <div className="decube-logo">
          <Link href="/homepage" className="logo">
            <Boxes strokeWidth={1} className="logo-icon" />
          </Link>
        </div>
        ´
        <div className="footerLinks">
          <Link href="#" className="facebook">
            <Facebook strokeWidth={1} className="logo-facebook" />
          </Link>
          <Link href="#" className="instagram">
            <Instagram strokeWidth={1} className="logo-instagram" />
          </Link>
          <Link href="#" className="linkedin">
            <Linkedin strokeWidth={1} className="logo-linkedIn" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
