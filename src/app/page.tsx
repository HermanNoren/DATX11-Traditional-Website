import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";
import Aboutpage from "./pages/aboutpage/aboutpage";
import Contactpage from "./pages/contactpage/contactpage";

export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Contactpage></Contactpage>
      <Footer></Footer>
    </div>
  );
}
