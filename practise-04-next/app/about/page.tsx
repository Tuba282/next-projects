import Link from "next/link";
type datatype ={
    name:string
    age:string
}
export default function About(data: datatype) {
    return (
        <>
            <h1 className="text-8xl bg-lime-300 text-black text-center">About Page</h1>

                <h2>{data.name} {data.age} </h2>    
                <h2>{data.age}</h2>    
                {/* props (property --> data passing through parent to children)*/}
            <Link href={'/'} ><h1 className="text-8xl bg-red-300 text-black text-center">Home</h1></Link>
        </>
    )
}