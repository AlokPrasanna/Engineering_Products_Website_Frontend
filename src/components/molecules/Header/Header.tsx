// -------------------- Imports --------------------
import React from 'react';
import { Image, NavBar } from '../../atoms';
import { Images } from '../../../constant';

const Header: React.FC = () => {
  return (
    <div className='flex w-full h-[100px] px-[25px] justify-between items-center bg-[#d2d0dc]'>
      <div className='flex items-center gap-10'>
        <Image 
          src={Images.logo} 
          alt='Logo' 
          style='
            md:w-[120px]
            w-[250px]
          '
        />
        <NavBar 
          list={[
            {title:"Home",path:"/"},
            {title:"Control and Automation" , path:"/"}, 
            {title:"Technology for Education" , path:"/"}, 
            {title:"Research Instrumentation" , path:"/"}, 
            {title:"About" , path:"/"}
          ]}
          showContactButton={true}
        />
      </div>
      <div className='items-center hidden gap-8 md:flex'>
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
  );
}

export default Header;
