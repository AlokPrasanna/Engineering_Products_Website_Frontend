// -------------------- Imports --------------------
import React from 'react'

// ---------- Interface
interface WelcomeCardProp {
    src:string;
    alt:string;
    title:string;
}

const WelcomeCard:React.FC<WelcomeCardProp> = ({ src ,alt , title }) => {
  return (
    <div className='mb-10 bg-[#D2D0DC] transition-background-color duration-500 ease-in-out hover:bg-[#27224D] hover:text-slate-50'>
        <img 
            src={src}
            alt={alt}
            className='w-[300px] h-[250px] transition-opacity duration-500 hover:opacity-50'
        />
         <p className='py-[8px] md:text-xl text-lg text-center'>{title}</p>
    </div>
  )
}

export default WelcomeCard;