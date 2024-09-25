import Link from "next/link";

export default function Footer(){
    return (
        <>
        <h1 className="text-8xl bg-red-400 text-white text-center">This is Footer</h1>
        <Link href={'/'} ><h1 className="text-8xl bg-red-300 text-black text-center">Home</h1></Link>


        </>
    )
}