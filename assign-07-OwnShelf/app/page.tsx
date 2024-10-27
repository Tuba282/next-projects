'use client'
import Adventure from "./components/adventure";
import Animated from "./components/animated";
import Discount from "./components/discount";
import Feature from "./components/feature";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Ticket from "./components/ticket";
import Gallery from "./gallery/page";


const Home = () => {


  return (
    <>
      <div className="mainContainer">
        <div className="subContainer">
          <Header />
          <Hero />
          <Adventure />
          <Animated />
          <Discount />
          <Feature />
          <Gallery />
          <Ticket />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
