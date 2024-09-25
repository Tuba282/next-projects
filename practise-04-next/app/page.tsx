'use client'
// import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import About from "./about/page";
// import { useRouter } from "next/navigation";
// import Navbar from "./components/navbar";

export default function Home() {
  // const goto = useRouter();
  // function based
  // function goToFooter(){
  //  return goto.push(`components/footer`)
  // }
  return (
    <>
      {/* linking */}
      {/* ctrl + space + enter*/}
      {/* <Navbar /> */}
      {/* link hum route ko karwa sakty hain */}
      {/* components ko render karty / linking ni karty. */}
      < Navbar /> { /* components hum render karty hain. */}
      <Link href='components/footer'><h1 className="text-center text-8xl bg-slate-700 text-white">GOTO FOOTER</h1></Link>
      <About name='Ali' age='4' />
      
      
      {/* <button onClick={goToFooter} className=" text-6xl bg-slate-700 text-white">GOTO FOOTER with function</button>
    <button onClick={()=>goto.push('/about')} className=" text-6xl bg-pink-600 text-grey">GOTO ABOUT PAGE</button> */}
    </>
  );
}
