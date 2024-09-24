import React from 'react'
type datatype = {
    name: string
    secondName: string
}

const Props = (props: datatype) => {

    return (
        <div>
            <h1 className='text-5xl text-center mt-24 font-sans text-emerald-500 font-bold'>{props.name}</h1>
            <h1 className='text-5xl text-center mt-24 font-sans text-emerald-500 font-bold'>{props.secondName}</h1>
        </div>
    )
}

export default Props
