import Link from "next/link";
import "./footer.css";
import { Facebook, Instagram, Linkedin, Boxes } from "lucide-react";

function Footer() {
  return (
    <nav className={"footer"}>
      <Link href="/" className="facebook">
        <Facebook strokeWidth={1} className="logo-facebook" />
      </Link>
      <Link href="/" className="instagram">
        <Instagram strokeWidth={1} className="logo-instagram" />
      </Link>
      <Link href="/" className="linkedin">
        <Linkedin strokeWidth={1} className="logo-linkedIn" />
      </Link>
      <Link href="/" className="logo">
        <Boxes strokeWidth={1} className="logo-boxes" />
      </Link>
    </nav>
  );
}

export default Footer;

