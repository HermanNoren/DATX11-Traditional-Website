import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Homepage from "./homepage/page";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="main">
      <Homepage></Homepage>
    </div>
  );
}
