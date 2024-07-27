import React, { useState } from 'react';

// ---------- Interface ----------
interface ProtectInovationCardProps {
    src:string;
    alt:string;
    title:string;
    discription:string;
}

const ProtectInovationCard:React.FC<ProtectInovationCardProps> = ({src , alt , title , discription}) => {
    const [HoverState , setHoverState] = useState<boolean>(false);
  return (
    <div 
        className={`flex flex-col items-center p-5 justify-center w-[20%] transition duration-300 ${HoverState ? "hover:scale-110" :""}`}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
    >
        <img src={src} alt={alt} className={`bg-white max-w-[150px] min-w-10 rounded-full border-none ${HoverState ? "animate-bounce" : ""}`}/>
        <h2 className='mt-5 text-lg text-slate-50'>{title}</h2>
        <p className='mt-2 text-sm text-slate-50 text-center'>{discription}</p>
    </div>
  )
}

export default ProtectInovationCard