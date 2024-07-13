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
    <div className='flex w-full h-[100px] px-[25px] py- justify-between items-center bg-[#dedce7]'>
      <div className='flex items-center gap-10'>
        <Image 
          src={Images.logo} 
          alt='Logo' 
          style='
            w-[120px]
          '
        />
        <NavBar 
          list={["Home","Control and Automation" , "Technology for Education" , "Research Instrumentation" , "About"]}
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
              hover:bg-[#27224D]
              hover:text-white
              hover:border-[#27224D]
              duration-500
            '
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header