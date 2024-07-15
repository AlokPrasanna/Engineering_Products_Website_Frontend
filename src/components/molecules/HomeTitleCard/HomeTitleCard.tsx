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
    <div className='flex flex-col-reverse lg:flex-row w-full lg:h-[50vh] h-[35vh] lg:items-center lg:justify-around mt-[8%] p-[20px] bg-[#27224D] rounded-xl' style={{backgroundImage:`url(${bgImage})`}}>
        <div className='text-white '>
            <h1 className='font-bold md:text-left text-center text-[15px] md:text-lg lg:text-4xl'>{title}</h1>
            <p className='lg:mt-2 sm:mt-1 text-left lg:text-lg md:text-[13px] text-[12px]'>{description}</p>
        </div>
        <img 
            className='lg:w-[300px] w-[60%] h-auto lg:m-0 m-auto transition-transform duration-500 hover:scale-110'
            src={src}
            alt={alt}
        />
    </div>
  )
}

export default HomeTitleCard;