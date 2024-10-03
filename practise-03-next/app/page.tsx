'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState ,useEffect } from 'react';
import ArrayObject from './ArrayObject/page';
export default function Home() {
  const [add, setAdd] = useState(0)
  const route = useRouter();//ek tareeqa ye hai navigation karny ka
  const handleRouteChange = () => {
    //dosra tareeqa ye hai function banao usky ander route.push('address')
    // phir jaha navigate karwana ho woha function call kardo
    // like this <button onClick={handleRouteChange}>Navbar</button>
    route.push('/navbar');
  };
  useEffect(()=>{
    console.log({add});
    
  },[add])

 
  return (
    <>
      <Link href='/navbar'>{/*ye file base routing */}
        <h1 className="bg-yellow-950 text-white text-4xl">Want to go on Navbar</h1>
      </Link>
        <ArrayObject />
      
      <br /><br /><br /><br /><br /><br />
      <button
        className='border-2 p-3  border-cyan-400'
        onClick={handleRouteChange}>Navbar</button>
        <button  onClick={() => setAdd(add + 1)} className='border-2 p-3  border-cyan-400'>ADD</button>
        <p>{add}</p>
        <button  onClick={() => setAdd(add - 1)} className='border-2 p-3  border-cyan-400'>SUB</button>
      <button
        className='border-2 p-3  border-cyan-400'
        onClick={() => route.push('/components/footer')}>Footer</button>
      <Link href='/components/footer'>{/*ye component linking */}
        <h1 className="bg-emerald-700 text-white text-4xl">Want to go on Footer</h1>
      </Link>
    </>
  );
}
