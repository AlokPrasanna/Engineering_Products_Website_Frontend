// -------------------- Imports --------------------
import React, { useState } from 'react';

// ---------- Interface ----------
interface NavBarProps {
  list: Array<string>;
  showContactButton?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ list, showContactButton }) => {
  const [NavBarOpen, setNavBarOpen] = useState<boolean>(false);

  return (
    <div className='relative w-full'>
      <nav className='flex flex-wrap items-center justify-between p-4'>
        <div className='block mobile-menu md:hidden'>
          <button onClick={() => setNavBarOpen(!NavBarOpen)} className=''>
            {NavBarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-6 h-6 fixed top-[2%] right-5 z-50 text-slate-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-6 h-6 top-[5%] right-5  fixed z-50 text-[#27224d]">
                <path fill='' strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        <ul className={`
            md:flex 
            md:flex-row 
            md:gap-3 
            ${NavBarOpen ? 'translate-x-0' : 'translate-x-full'} 
            md:translate-x-0 
            fixed 
            md:static 
            md:bg-transparent 
            md:h-auto 
            md:w-auto 
            flex-col 
            top-0 
            right-0 
            h-screen 
            w-[300px] 
            bg-[#27224D] 
            z-40 
            p-4 
            gap-3
            text-white
            md:text-black
            transition-transform 
            duration-500 
            ease-in-out`}
        >
          {list.length > 0 && list.map((l, index) => (
            <li
              key={index}
              className='relative text-[12px] font-semibold px-[15px] py-3 transition-all duration-500 ease-in-out
                         md:before:absolute md:before:bottom-0 md:before:left-1/2 md:before:h-0.5 md:before:w-0 md:before:bg-[#27224D]
                         md:before:transition-all md:before:duration-500 md:before:ease-in-out
                         md:hover:before:left-0 md:hover:before:w-full cursor-pointer'
            >
              {l}
            </li>
          ))}
          {showContactButton && (
            <li className='md:hidden'>
              <button
                className='
                  text-[12px]
                  font-semibold
                  px-[15px] py-3
                '
              >
                Contact Us
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
