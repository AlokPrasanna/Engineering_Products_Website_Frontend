// -------------------- Imports --------------------
import React, { useState } from 'react';

// ---------- Interface ----------
interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ src, alt, title, description }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="
        w-[30%] h-[45vh] p-4 bg-[#d2d0dc] 
        flex flex-col items-center justify-center 
        border rounded-lg shadow-lg overflow-hidden
        transition-transform duration-500 hover:scale-105
        ">
      <img 
        src={src} 
        alt={alt} 
        className="w-[150px] h-auto" 
      />
      <h2 className="mt-4 text-xl font-bold text-center">{title}</h2>
      <button 
        onClick={toggleDescription} 
        className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        {isDescriptionVisible ? 'Hide Description' : 'Show Description'}
      </button>
      <div 
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isDescriptionVisible ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="mt-4 text-gray-700 break-words">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
