'use client'
// import Image from "next/image";
// import Link from "next/link";
import Navbar from "./components/navbar";
import About from "./about/page";
// import { useRouter } from "next/navigation";
// import Navbar from "./components/navbar";
import { useState } from "react";

export default function Home() {
  // const goto = useRouter();
  // function based
  // function goToFooter(){
  //  return goto.push(`components/footer`)
  // }
  const [data, Setdata] = useState(0)
  return (
    <>
      {/* linking */}
      {/* ctrl + space + enter*/}
      {/* <Navbar /> */}
      {/* link hum route ko karwa sakty hain */}
      {/* components ko render karty / linking ni karty. */}
      < Navbar /> { /* components hum render karty hain. */}
      {/* <Link href='components/footer'><h1 className="text-center text-8xl bg-slate-700 text-white">GOTO FOOTER</h1></Link> */}
      <About name='Ali' age='4' />
      <div className="flex justify-around items-center px-32">
        <p onClick={() => Setdata(data + 1)} className="border-2 border-red-600 px-3 py-2 bg-red-300 cursor-pointer">ADD</p>
        <h1 className="border-2 border-red-600 px-3 py-2 bg-red-300">{data}</h1>
        <p onClick={() => Setdata(data - 1)} className="border-2 border-red-600 px-3 py-2 bg-red-300 cursor-pointer">SUB</p>
      </div>
      {/* <button onClick={goToFooter} className=" text-6xl bg-slate-700 text-white">GOTO FOOTER with function</button>
    <button onClick={()=>goto.push('/about')} className=" text-6xl bg-pink-600 text-grey">GOTO ABOUT PAGE</button> */}

















    </>
  );
}
