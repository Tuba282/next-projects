// import Image from "next/image";
import About from "./components/about";
import Footer from "./components/footer";
import HeroSec from "./components/heroSec";
import Projects, { Pro_card } from "./components/projects";
import Review from "./components/review";

type pro_type = {
  pro_name: string
  pro_deploy_link: string
}
const pro_info: pro_type[] = [
  {
    pro_name: "Ali Baba",
    pro_deploy_link: "https://ali-baba-landing-page-css.netlify.app",
  },
  {
    pro_name: "Aesthetic Modern Wood",
    pro_deploy_link: "https://aestheitic-furniture-landing-page-css.netlify.app",
  },
  {
    pro_name: "Real Estate",
    pro_deploy_link: "https://bootstrap-landing-page-css.netlify.app",
  },
  {
    pro_name: "Picked Veges",
    pro_deploy_link: "https://picked-veges-landing-page-css.netlify.app",
  },
  {
    pro_name: "Electricca",
    pro_deploy_link: "https://electricaa-landing-page-css.netlify.app",
  },
  {
    pro_name: "Postivus",
    pro_deploy_link: "https://postivus-page-mini-hackathon.netlify.app",
  },
  {
    pro_name: "Tamba",
    pro_deploy_link: "https://tamba-cs-assignment.netlify.app",
  },
  {
    pro_name: "Resume Builder",
    pro_deploy_link: "https://tuba-jan-resume.netlify.app",
  },
  {
    pro_name: "Get Gold",
    pro_deploy_link: "https://get-gold-landing-page-css.netlify.app",
  },
  {
    pro_name: "Centi Drinks",
    pro_deploy_link: "https://centi-drinks.vercel.app",
  },
  {
    pro_name: "Flow & Bee",
    pro_deploy_link: "https://flow-bee-landing-page-css.netlify.app",
  },
  {
    pro_name: "Charity website",
    pro_deploy_link: "https://full-fledge-charity-website.netlify.app",
  },
]
export default function Home() {
  return (
    <div className="main-container ">
      <div className="sub-main-container">

        <HeroSec />
        <About />
        <Projects />


        {pro_info.map((data, i) => (
          <Pro_card key={i} pro_name={data.pro_name} pro_deploy_link={data.pro_deploy_link} />
        ))}



        <Review />
        <Footer />
      </div>
    </div>
  );
}
