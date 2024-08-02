// -------------------- Imports --------------------
import React, { useState } from 'react'

// ---------- Interface ----------
interface FlexceptCardProps {
    title:string;
    discription:string;
    src:string;
    alt:string;
}

const FlexceptCard:React.FC<FlexceptCardProps> = ({ title , discription , src , alt }) => {
    const [hover , setHover] = useState<boolean>(false);
  return (
    <div 
        className='flex flex-col items-center justify-center md:w-[20%] w-[100%] md:px-0  px-5 md:mb-10 mb-4 cursor-pointer' 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <img 
            src={src} 
            alt={alt} 
            className='md:w-[150px] md:h-[150px] w-[250px] h-auto'  
        />
        <h3 className={`md:text-[16px] text-lg text-center font-semibold px-2 py-1 text-[#27224d] ${hover ? "text-red-600 underline" : ""}`}>{title}</h3>
        <p className='md:text-[12px] text-[15px] text-center'>{discription}</p>
    </div>
  )
}

export default FlexceptCard