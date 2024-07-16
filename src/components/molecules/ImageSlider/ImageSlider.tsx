// -------------------- Imports --------------------
import React, { useState } from 'react';
import "./imageSlider.css"

// ---------- Interface ----------
interface ImageSliderProps {
    data:Array<{src:string , alt:string}>;
}

const ImageSlider:React.FC<ImageSliderProps> = ({ data }) => {
    const [currentIndex , setCurrentIndex] = useState<number>(0);
    const [animate, setAnimate] = useState<boolean>(false);

    // const LastIndex = data.length -1;
    // const startIndex = 0;

    const HandleImageClick = (index:number) => {
        setAnimate(false);  
        setTimeout(() => {
            setCurrentIndex(index);
            setAnimate(true); 
        }, 0);
    }

    // const HandlePreButton = () => {
    //     if(currentIndex > startIndex){
    //         setCurrentIndex(currentIndex-1);
    //     }
    // }

    // const HandlePostButton = () => {
    //     if(currentIndex < LastIndex){
    //         setCurrentIndex(currentIndex+1);
    //     }
    // }
  return (
    <div className='flex flex-col items-center justify-center mt-5'>
        <div className={`lg:w-[500px] lg:h-[500px] flex items-center justify-center p-5 ${animate ? 'animation' : ''}`}>        
            <img src={data[currentIndex].src} alt={data[currentIndex].alt} className="max-w-full max-h-full" />                   
        </div>
        <div className='flex items-center justify-center mt-4 mb-5'>
            {/* <button onClick={HandlePreButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button> */}
                    <div className="flex items-center justify-center">
                        {data.length > 0 &&
                            data.map((d, index) => (
                                <div
                                    key={index}
                                    className={`w-[50px] h-[50px] p-2 flex cursor-pointer ml-3 mr-3 items-center justify-center border-[3px] rounded-md ${currentIndex === index ? 'border-gray-500' : 'border-transparent'}`}
                                    onClick={() => HandleImageClick(index)}
                                >
                                    <img src={d.src} alt={d.alt} className="max-w-full max-h-full" />
                                </div>
                            ))}
                    </div>
        
            {/* <button onClick={HandlePostButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button> */}
        </div>
    </div>
  )
}

export default ImageSlider