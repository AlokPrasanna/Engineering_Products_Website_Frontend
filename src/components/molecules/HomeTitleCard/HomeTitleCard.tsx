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
    <div className='flex flex-col-reverse lg:flex-row w-full lg:h-[50vh] h-[35vh] lg:items-center lg:justify-around lg:mt-[10%] xl:mt-[9%] sm:mt-[50px] mt-[45px] p-[20px] bg-[#27224D] rounded-xl' style={{backgroundImage:`url(${bgImage})`}}>
        <div className='text-white '>
            <h1 className='font-bold lg:text-left text-center text-[15px] md:text-lg lg:text-4xl'>{title}</h1>
            <p className='lg:mt-2 sm:mt-1 lg:text-left text-center lg:text-lg md:text-[13px] text-[12px]'>{description}</p>
        </div>
        <img 
            className='lg:w-[300px] w-[130px] h-auto lg:m-0 m-auto transition-transform duration-500 hover:scale-105'
            src={src}
            alt={alt}
        />
    </div>
  )
}

export default HomeTitleCard;