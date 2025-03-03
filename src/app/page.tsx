import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}
