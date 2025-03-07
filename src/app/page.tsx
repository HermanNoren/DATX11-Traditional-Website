import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Homepage from "./homepage/page";
import Footer from "./components/footer/footer";
import Aboutpage from "./aboutpage/page";

export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}
