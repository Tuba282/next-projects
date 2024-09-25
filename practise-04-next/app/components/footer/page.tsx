'use client'
import Link from "next/link";
import { useState,useEffect} from "react";

export default function Footer(){
    
  const [data, Setdata] = useState(0)

    //   useEffect(()=>{},[]) useEffect ek function  contains two arguments (1.callback function)(2. array)
    useEffect(()=>{
        console.log('every time');
        
    }) 
    useEffect(()=>{
        console.log('first time when site reload');
        
    },[]) 
    useEffect(()=>{
        console.log('run every time when update/changes in dependency');
        
    },[data]) 

    return (
        <>
        <h1 className="text-8xl bg-red-400 text-white text-center">This is Footer</h1>
        <Link href={'/'} ><h1 className="text-8xl bg-red-300 text-black text-center">Home</h1></Link>
        <div className="flex justify-around items-center px-32 mt-4">
        <p onClick={() => Setdata(data + 1)} className="border-2 border-red-600 px-3 py-2 bg-red-300 cursor-pointer">+</p>
        <h1 className="border-2 border-red-600 px-3 py-2 bg-red-300">{data}</h1>
        <p onClick={() => Setdata(data - 1)} className="border-2 border-red-600 px-3 py-2 bg-red-300 cursor-pointer">-</p>
      </div>

        </>
    )
}