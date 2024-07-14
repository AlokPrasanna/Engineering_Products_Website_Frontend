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
    <div className="w-full p-4 bg-white border rounded-lg shadow-lg">
      <img 
        src={src} 
        alt={alt} 
        className="object-cover w-full h-48 rounded-md" 
      />
      <h2 className="mt-4 text-2xl font-bold">{title}</h2>
      <button 
        onClick={toggleDescription} 
        className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        {isDescriptionVisible ? 'Hide Description' : 'Show Description'}
      </button>
      {isDescriptionVisible && (
        <p className="mt-4 text-gray-700">{description}</p>
      )}
    </div>
  );
}

export default ServiceCard;
