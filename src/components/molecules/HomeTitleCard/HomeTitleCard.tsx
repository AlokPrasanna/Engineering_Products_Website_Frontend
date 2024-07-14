// -------------------- Imports --------------------
import React from 'react';

// ---------- Interface Prop ----------
interface HomeTitleCardProp {
    title:string;
    description:string;
    src:string;
    alt:string;
    bgImage?:string;
}

const HomeTitleCard:React.FC<HomeTitleCardProp> = ({ title, description , src , alt , bgImage}) => {
  return (
    <div className='flex w-full h-[50vh] items-center justify-around mt-[8%] p-[20px] bg-[#27224D] rounded-xl' style={{backgroundImage:`url(${bgImage})`}}>
        <div className='text-white'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='mt-2 text-lg'>{description}</p>
        </div>
        <img 
            className='w-[250px] h-auto transition-transform duration-500 hover:scale-110'
            src={src}
            alt={alt}
        />
    </div>
  )
}

export default HomeTitleCard;