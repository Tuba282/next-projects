import Adventure from "./components/adventure";
import Header from "./components/header";
import Hero from "./components/hero";


const Home = () => {


  return (
    <>
      <div className="mainContainer">
        <div className="subContainer">
          <Header />
          <Hero />
          <Adventure />
        </div>
      </div>
    </>
  );
};

export default Home;
