import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";

export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <Homepage></Homepage>
    </div>
  );
}
