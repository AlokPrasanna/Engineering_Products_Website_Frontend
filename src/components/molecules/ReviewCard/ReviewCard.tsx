import React from 'react'
import { Link } from 'react-router-dom';

// ---------- Interface ----------
interface ReviewCardProps {
    name:string;
    position:string;
    comment:string;
    url:string

}

const ReviewCard:React.FC<ReviewCardProps> = ({ name , position , comment , url}) => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-center justify-center w-[65%]'>
        <h1 className='bg-black w-[80%] px-5 py-3 text-center text-xl font-bold text-slate-50'>Read Our Reviews</h1>
        <div
            className='flex items-center justify-end w-[65%] mt-5 px-10 py-8'
        >
            <div className='flex flex-col items-center justify-center'>
                <p className='w-[85%] break-words text-[1.1rem] text-slate-50'>"&nbsp;{comment}&nbsp;"</p>
                <button className='mt-5 mb-5 px-5 py-2 border-2 border-red-600 text-slate-50 transition-colors duration-300 hover:bg-red-600'><Link to={url}>Read the Case Study</Link></button>
                <h3 className='text-slate-50 text-lg'>{name}</h3>
                <h5 className='text-slate-50 text-md'>{position}</h5>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default ReviewCard