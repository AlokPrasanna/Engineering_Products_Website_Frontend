// -------------------- Imports --------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';

// ---------- Interface ----------
interface LatestInovationCardProp {
    src:string;
    alt:string;
    title:string;
    discription:string;
}

const LatestInovationCard:React.FC<LatestInovationCardProp> = ({ src , alt , title, discription}) => {
  const Navigate = useNavigate();

  const HandelMoreDetailsButton = () => {
    Navigate("/product-view")
  }
  return (
    <div className='grid md:grid-cols-6 grid-cols-1 items-center gap-4 justify-center lg:h-[70vh] h-[80vh] p-8 text-slate-50'>
        <div className='flex items-center justify-center col-span-4 max-w-[300px] max-h-[300px] min-w-[160px] min-h-[160px]'>
            <img 
                src={src} alt={alt} 
                className='md:p-5 md:w-[300px] w-[160px] h-auto transition-transform duration-500 hover:scale-110' 
            />
        </div>
        <div className='flex flex-col justify-center col-span-2'>
           <h1 className='md:text-3xl text-[14px] text-center md:text-left font-bold'>{title}</h1>
           <p className='mt-2 mb-4 text-[12px] break-words md:text-left text-center '>{discription}</p>
           <button 
            className='
              px-4 py-3 
              md:w-[150px] text-[12px] w-full border-none bg-red-700 
              transition-colors duration-500 
              hover:bg-red-500 hover:border-red-500 hover:text-black'
              onClick={HandelMoreDetailsButton}
            >More Details</button> 
        </div>
    </div>
  )
}

export default LatestInovationCard