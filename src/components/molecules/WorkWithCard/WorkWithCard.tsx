// ---------- Imports ----------
import React from 'react';

// ---------- Interface ----------
interface WorkWithCardProps {
    src:string;
    alt:string;
    total:number;
    value:number;
    title:string;
}

const WorkWithCard:React.FC<WorkWithCardProps> = ({src , alt , total , value , title}) => {
  return (
    <div className='flex flex-row items-center justify-center gap-5 mt-10 lg:flex-col lg:min-w-[320px]'>
        <img 
            src={src}
            alt={alt}
            className='lg:w-[30%] w-[100px]'
        />
        <div className='lg:flex lg:justify-center lg:items-center lg:flex-col'>
          <span className='px-4 py-3 text-xl font-bold text-red-600 lg:text-4xl'>{value} / {total}</span>
          <p className='px-4 lg:text-lg lg:text-center text-[14px]'>{title}</p>
        </div>
    </div>
  )
}

export default WorkWithCard