// -------------------- Imports --------------------
import React from 'react';

// ---------- Interface ----------
interface LatestInovationCardProp {
    src:string;
    alt:string;
    title:string;
    discription:string;
}

const LatestInovationCard:React.FC<LatestInovationCardProp> = ({ src , alt , title, discription}) => {
  return (
    <div className='grid grid-cols-6 items-center gap-4 justify-center h-[70vh] p-8'>
        <div className='flex items-center justify-center col-span-4'>
            <img 
                src={src} alt={alt}
                className='p-5 w-[300px] h-auto transition-transform duration-500 hover:scale-110' 
            />
        </div>
        <div className='flex flex-col justify-center col-span-2'>
           <h1 className='text-3xl font-bold'>{title}</h1>
           <p className='mt-2 mb-4 break-words '>{discription}</p>
           <button className='px-4 py-3 w-[150px] border-2 border-black transition-colors duration-500 hover:bg-[#27224d] hover:border-[#27224d] hover:text-slate-50'>More Details</button> 
        </div>
    </div>
  )
}

export default LatestInovationCard