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
    <div className='flex flex-col items-center justify-center mt-10'>
        <img 
            src={src}
            alt={alt}
            className='w-[30%]'
        />
        <span className='px-4 py-3 text-4xl font-bold text-red-600'>{value} / {total}</span>
        <p className='text-lg'>{title}</p>
    </div>
  )
}

export default WorkWithCard