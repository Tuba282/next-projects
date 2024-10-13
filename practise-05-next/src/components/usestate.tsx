'use client'
import { useState } from 'react'

function UseState() {
    const [likes, setLikes] = useState(0)
    const onClickHandler = () => {
        return setLikes(likes - 1)
    }
    return (
        <div className='grid justify-center items-center gap-6 p-6'>
            <button
                className='border px-4 p-2 bg-slate-500 rounded-2xl hover:bg-black hover:text-white'
                onClick={() => setLikes(likes + 1)}>
                like it
            </button>
            <p className='text-center'>{likes}</p>
            <button
                className='border px-4 p-2 bg-slate-500 rounded-2xl hover:bg-black hover:text-white'
                onClick={onClickHandler}>
                dislike it
            </button>

            <input type='text' />
        </div>
    )
}

export default UseState
