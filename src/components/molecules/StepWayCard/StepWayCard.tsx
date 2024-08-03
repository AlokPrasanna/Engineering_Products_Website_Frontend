// ---------- Imports ----------
import React from 'react';

// ---------- Interface ----------
interface StepWayCardProps {
    src:string;
    alt:string;
    title:string;
    discription:string;
}

const StepWayCard:React.FC<StepWayCardProps> = ({ src , alt , title , discription }) => {
  return (
    <div className='mt-10 w-[20%]'>
        <img 
            src={src}
            alt={alt}
            className='w-[300px] '
        />
        <div className='px-2 py-3'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p>{discription}</p>
        </div>
    </div>
  )
}

export default StepWayCard;