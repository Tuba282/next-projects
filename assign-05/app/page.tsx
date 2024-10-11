// import Image from "next/image";
import Head from "next/head";
import About from "./components/about";
import Certificates from "./components/certificates";
import Footer from "./components/footer";
import HeroSec from "./components/heroSec";
import Projects from "./components/projects";
import Review from "./components/review";


export default function Home() {
  return (
    <div className="main-container ">
      <div className="sub-main-container">

        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeroSec />
        <About />
        <Projects />
        <Review />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
}
