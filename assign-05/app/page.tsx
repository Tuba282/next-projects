// import Image from "next/image";
import About from "./components/about";
import HeroSec from "./components/heroSec";
import Review from "./components/review";


export default function Home() {
  return (
    <div className="main-container ">
      <div className="sub-main-container">
      
      <HeroSec />
      <About />
      <Review />
      </div>
    </div>
  );
}
