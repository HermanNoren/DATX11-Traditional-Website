import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";
import Aboutpage from "./pages/aboutpage/aboutpage";

export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Aboutpage></Aboutpage>
      <Footer></Footer>
    </div>
  );
}
