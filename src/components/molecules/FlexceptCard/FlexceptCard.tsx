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
        className='flex flex-col items-center justify-center w-[20%] mb-10 cursor-pointer' 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <img 
            src={src} 
            alt={alt} 
            className='w-[150px] h-[150px]'  
        />
        <h3 className={`text-[16px] text-center font-semibold px-2 py-1 text-[#27224d] ${hover ? "text-red-600 underline" : ""}`}>{title}</h3>
        <p className='text-[12px] text-center'>{discription}</p>
    </div>
  )
}

export default FlexceptCard