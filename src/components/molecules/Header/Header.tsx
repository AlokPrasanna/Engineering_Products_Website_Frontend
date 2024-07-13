// -------------------- Imports --------------------
import { 
  Image, 
  NavBar
} from '../../atoms';
import { 
  Images 
} from '../../../constant';
import React from 'react';

const Header:React.FC = () => {
  return (
    <div className='flex w-full h-[80px] px-[20px] py-3 justify-between items-center'>
      <div className='flex items-center gap-10'>
        <Image 
          src={Images.logo} 
          alt='Logo' 
          style='
            w-[80px]
            h-[80px]
          '
        />
        <NavBar 
          list={["Products","Learn" , "Buy" , "Support"]}
        />
      </div>
      <div className='flex gap-8 items-center'>
        <div>
          <button
            className='
              text-[12px]
              font-semibold
              border-black
              border-2
              px-8
              py-[8px]
              rounded-3xl
              transition-all
              hover:bg-orange-400
              hover:text-white
              duration-500
            '
          >
            Contact Us
          </button>
        </div>
        <div>
          <input
            className='
              text-[12px]
              border
              border-black
              px-2
              py-[8px]
              rounded-md
            ' 
            placeholder='Search...'
          />
        </div>
      </div>
    </div>
  )
}

export default Header