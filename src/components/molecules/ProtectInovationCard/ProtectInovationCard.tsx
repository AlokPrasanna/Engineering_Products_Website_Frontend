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
        className={`flex flex-row lg:flex-col gap-5 items-center p-5 max-h-[450px] lg:justify-center lg:w-[20%] w-full transition duration-300 ${HoverState ? "hover:scale-110" :""}`}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
    >
        <img src={src} alt={alt} className={`bg-white max-w-[100px] w-[80px] min-w-10 rounded-full border-none`}/>
        <div>
          <h2 className='lg:text-md text-[14px] lg:text-center lg:mt-5 text-slate-50'>{title}</h2>
          <p className='lg:text-sm text-[12px] lg:text-center lg:mt-2 text-slate-50'>{discription}</p>
        </div>
    </div>
  )
}

export default ProtectInovationCard