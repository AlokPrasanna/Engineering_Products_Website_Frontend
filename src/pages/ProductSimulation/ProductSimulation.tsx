// -------------------- Imports --------------------
import React from 'react';
import { Images } from '../../constant';
import { FlexceptCard } from '../../components/molecules';

const ProductSimulation: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <section 
        className='w-full h-[40vh] bg-black flex items-center relative justify-center'
        style={{ 
            backgroundImage: `url(${Images.simulationHeader})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',  
          }}
      >
        <div 
            className='relative flex flex-col items-start justify-center  h-[50%] text-slate-50 w-[60%]'
        >
            <span className='px-10 text-6xl'>EDA Software</span>
            <p className='px-10 text-lg w-[60%] mt-5 break-words mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, 
                harum asperiores nesciunt consequatur eveniet tenetur minima 
                accusantium et inventore in.</p>
        </div>
        <div className='absolute bottom-0 flex justify-center w-full h-20 bg-black text-slate-50'>
                <ul className='flex items-center'>
                    <li className='px-10 py-5 ml-5 mr-5 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600'>EDA</li>
                    <li className='px-10 py-5 ml-5 mr-5 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600'>Circuit Design</li>
                    <li className='px-10 py-5 ml-5 mr-5 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600'>physical Design</li>
                    <li className='px-10 py-5 ml-5 mr-5 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600'>System Design</li>
                    <li className='px-10 py-5 ml-5 mr-5 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600'>Device Modeling</li>
                </ul>
            </div>
      </section>

      {/* Selected Simulation Part Discription */}
      <section className='flex items-center justify-center w-full bg-[#D2D0DC]'>
          <div className='flex flex-col items-center justify-center pt-12 pb-12'>
            <h2 className='text-xl font-semibold'>Model, Simulate, and Optimize with EDA Software</h2>
            <p className='w-[50%] mt-4 break-words text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati dolor corporis harum? 
                Quod repudiandae voluptatem explicabo possimus accusamus ad quia 
                molestias vero temporibus, neque porro sit. Hic, eligendi nihil officiis ex at 
                praesentium neque fuga doloremque minus temporibus asperiores?</p>
          </div>
      </section>

      {/* Keyslight */}
      <section className='flex flex-col items-center justify-center w-full'>
        <div className='flex flex-col items-center justify-center pt-12 pb-6'>
            <h2 className='text-xl font-semibold'>Explore Keysight EDA Software Suites</h2>
            <ul className='flex items-center justify-center h-[50px] mt-4 border-b-4 border-black'>
                <li  className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Circuit Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Physical Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>System Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Device Modeling</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Data And IP Management</li>
            </ul>
            <hr className='h-[1px]' />
        </div>
        <div className='flex items-center justify-center gap-5'>
          <FlexceptCard 
            src={Images.laptop}
            alt='Laptop'
            title='Advance Design System (ADS)'
            discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati dolor corporis harum? 
                Quod repudiandae voluptatem explicabo possimus accusamus ad quia '
          />
          <FlexceptCard 
            src={Images.laptop}
            alt='Laptop'
            title='Advance Design System (ADS)'
            discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati dolor corporis harum? 
                Quod repudiandae voluptatem explicabo possimus accusamus ad quia '
          />
          <FlexceptCard 
            src={Images.laptop}
            alt='Laptop'
            title='Advance Design System (ADS)'
            discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati dolor corporis harum? 
                Quod repudiandae voluptatem explicabo possimus accusamus ad quia '
          />
          <FlexceptCard 
            src={Images.laptop}
            alt='Laptop'
            title='Advance Design System (ADS)'
            discription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati dolor corporis harum? 
                Quod repudiandae voluptatem explicabo possimus accusamus ad quia '
          />
        </div>
      </section>
    </div>
  )
}

export default ProductSimulation;
