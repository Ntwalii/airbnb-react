import React from 'react';

export default function Card(props) {
    
    console.log(props)
    let badgeText;
    if(props.openSpots===0){
         badgeText="SOLD OUT"
    } else if(props.location==="Online"){
         badgeText="ONLINE"
    }console.log(badgeText)
    return (
        <div className="card relative flex flex-col gap-1 min-w-42 w-56  flex-none bg-white">
            <img src={`./assets/${props.coverImg}`} alt={props.title} className="h-full" />
            {badgeText && (
                <div className='absolute top-2 left-2 bg-white rounded-sm text-xs p-1 font-semibold'>{badgeText}</div>
            )}
            <div className='flex py-1'>
                <img src="./assets/star.png" className='h-5 my-auto mr-2' alt="star" />
                <p className='text-gray-600 text-sm'>
                    <span className='text-black'>{props.stats["rating"]}</span> ({props.stats["reviewCount"]}) - {props.location}
                </p>
            </div>
            <p className='text-sm'>{props.title}</p>
            <p className='text-gray-600 text-sm'>
                <span className='text-black'>From ${props.price}</span> / person
            </p>
        </div>
    );
}
