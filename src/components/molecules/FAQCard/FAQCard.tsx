import React, { useState } from 'react';

// ---------- Interface ----------
interface FAQCardProps {
   question:string;
   answer:string; 
}

const FAQCard:React.FC<FAQCardProps> = ({question , answer}) => {
  const [ShowAnswer , setShowAnswer] = useState<boolean>(false);

  const HandleButtonClick = () => {
    setShowAnswer(!ShowAnswer);
  }
  return (
    <div className='w-full bg-black mb-1'>
      <div className='bg-gray-300'>
      <div className='flex items-center justify-start bg-yellow-100 px-5 py-3'>
        <button onClick={HandleButtonClick}>
          {ShowAnswer === true ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          ): (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-red-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          )}
        </button>
        <p>&nbsp;&nbsp;{question}</p>
      </div>
        {ShowAnswer === true && (
          <p className='px-5 py-3 h-auto'>{answer}</p>
        )}
      </div>
    </div>
  )
}

export default FAQCard;