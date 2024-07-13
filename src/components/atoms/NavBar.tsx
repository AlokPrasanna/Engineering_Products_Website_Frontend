// -------------------- Imports --------------------
import React from 'react';

// ---------- Interface ----------
interface NavBarProps {
    list:Array<string>;
}

const NavBar:React.FC<NavBarProps> = ({list}) => {
  return (
    <div>
        <nav>
            <ul className='flex gap-3'>
                {list.length > 0 && list.map((l:any , index) => (
                    <li 
                        key={index} 
                        className='relative text-[12px] font-semibold p-1 transition-all duration-500 ease-in-out
                                   before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-[#27224D]
                                   before:transition-all before:duration-500 before:ease-in-out
                                   hover:before:left-0 hover:before:w-full cursor-pointer'
                    >{l}</li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default NavBar