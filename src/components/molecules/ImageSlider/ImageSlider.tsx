// -------------------- Imports --------------------
import React, { useState } from 'react';

// ---------- Interface ----------
interface ImageSliderProps {
    data:Array<{src:string , alt:string}>;
}

const ImageSlider:React.FC<ImageSliderProps> = ({ data }) => {
    const [selectedImage , setSelectedImage] = useState<number | null>(null)

    const HandleImageClick = (index:number) => {
        setSelectedImage(index);
    }
  return (
    <div>
        <div className='flex items-center justify-around'>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            {data.length > 0 && data.map((d , index) => (
                <div 
                    key={index} 
                    className={`w-[50px] h-[50px] p-2 flex cursor-pointer ml-3 mr-3 items-center justify-center border-2 ${selectedImage === index ? "border-black" : "border-transparent"}`}
                    onClick={() => HandleImageClick(index)}
                >
                    <img src={d.src} alt={d.alt} className='max-w-full max-h-full' />
                </div>
            ))}
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default ImageSlider