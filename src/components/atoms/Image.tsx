import React from 'react'

// ---------- Interface ----------
interface ImageProps {
 src:string;
 alt:string;
 style:string;
}

const Image:React.FC<ImageProps> = ({src , alt, style}) => {
  return (
    <div>
        <img 
            className={`${style}`}
            src={src} 
            alt={alt} 
        />
    </div>
  )
}

export default Image