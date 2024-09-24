'use client'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.js";
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react'

const Practise = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert("first time")
    }, [])//ye 1 hi bar hoga jub hamara page first time render hoga
    useEffect(() => {
        alert("count")
    }, [count])//ye har bar render hoga jub hamara count change/update hoga






    return (
        <div>
            <h1 className='text-9xl'>This is Practise</h1>
            <div className="d-flex justify-around items-center ">
                <Button className=" text-white bg-indigo-600" onClick={() => setCount(count + 1)}>Add</Button>
                <p className=''>{count}</p>
                <Button className=" text-white bg-red-600" onClick={() => setCount(count - 1)}>Sub</Button>
            </div>


        </div>
    )
}

export default Practise
