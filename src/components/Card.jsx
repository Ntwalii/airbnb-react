import React from 'react'

export default function Card(){
    return (
        <div className='mx-10'>
            <div className="card w-1/3 relative flex flex-col gap-1">
                <img src="./assets/card.png" alt="" />
                <div className='absolute top-2 left-2 bg-white rounded-sm text-xs p-1 font-semibold'>SOLD OUT</div>
                <div className='flex py-1'>
                    <img src="./assets/star.png" className='h-5 my-auto mr-2' alt="" />
                    <p className='text-gray-600 text-sm'><span className='text-black'>5.0</span> (6) - USA</p>
                </div>
                    <p className='text-sm'>Life lessons with Katie Zaferes</p>
                    <p className='text-gray-600 text-sm'><span className='text-black'>From $136
                    </span> / person</p>
            </div>
        </div>
    )
}