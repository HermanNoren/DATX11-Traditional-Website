import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Footer from "./components/footer/footer";
import Aboutpage from "./pages/aboutpage/aboutpage";
import Products from "./pages/Products/products";

export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}
