// -------------------- Imports --------------------
import React from 'react';
import { Images, Videos } from '../../constant';
import { FlexceptCard, ReviewCard } from '../../components/molecules';
import "./productSimulation.css"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'

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
        <div className='absolute bottom-0 flex justify-center w-full h-20 bg-[#D2D0DC] text-slate-900'>
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
      <section className='flex items-center justify-center w-full bg-white'>
          <div className='flex flex-col items-center justify-center pt-12 pb-12'>
            <h2 className='text-xl font-semibold'>Model, Simulate, and Optimize with EDA Software</h2>
            <p className='w-[50%] mt-4 break-words text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati dolor corporis harum? 
                Quod repudiandae voluptatem explicabo possimus accusamus ad quia 
                molestias vero temporibus, neque porro sit. Hic, eligendi nihil officiis ex at 
                praesentium neque fuga doloremque minus temporibus asperiores?</p>
          </div>
      </section>

      {/* Flexcept card */}
      <section className='flex flex-col items-center justify-center w-full bg-[#D2D0DC]'>
        <div className='flex flex-col items-center justify-center pt-12 pb-6'>
            <h2 className='text-xl font-semibold'>Explore Keysight EDA Software Suites</h2>
            <ul className='flex items-center justify-center h-[50px] mt-4 border-b-[1px] border-black'>
                <li  className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Circuit Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Physical Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>System Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Device Modeling</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Data And IP Management</li>
            </ul>
            {/* <hr className='custom-hr'/> */}
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

      {/* Work with Us */}
      <section className='flex items-center justify-center w-full'>
        <div className='flex items-center justify-center gap-5 w-[80%] p-10'>
          <div className='w-full'>
            <video className='' controls>
              <source src={Videos.workWithUs} type='video/mp4'/>
            </video>
          </div>
          <div className='w-full flex flex-col items-start justify-center gap-4'>
            <div className='mb-5'>
              <h2 className='text-lg font-semibold'>Strat Your Next Design with FLEXCEPT</h2>
              <p className='text-[12px] break-words mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem ut consectetur, aliquid quia vitae quis, 
                est tenetur aliquam fugit illum minima qui animi nihil amet corporis nemo, 
                id doloremque distinctio eaque sint. Neque, distinctio corrupti.</p>
            </div>
            <button className='border-2 border-red-600 px-5 py-2 w-full text-center transition-colors duration-300 hover:bg-red-600 hover:text-slate-50'>
              Read Our Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className='mt-0 mb-[80px]'>
        <AwesomeSlider
          className='h-[65vh] w-full'
          animation="fall"
          bullets={true}
          organicArrows={true}
        >
          <div
            className='h-full mt-[150px]'
            style={{
              backgroundImage:`url(${Images.userReviews})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', 
            }}
          >
            <ReviewCard
              name='Dr. Sadayuki Yoshitomi'
              position='Kioxia Corporation'
              comment=' We have a way to collect a huge amount of S-parameter 
                        data which helps us to select the golden die of the AC performance. 
                        It is very helpful to have a very accurate SPICE model for high-speed circuit design.'
              url="/"
            />
            </div>
            <div
            className='h-full mt-[150px]'
            style={{
              backgroundImage:`url(${Images.userReviews})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', 
            }}
          >
            <ReviewCard
              name='Amit Singh'
              position='Technical Staff Nokia Bell Labs'
              comment=' I used GoldenGate day-in and day-out for all of my W-band mmWave circuit and system-level 
                        simulations to do system-level linearity, noise figure, 
                        and other characterizations across the frequency ranges.'
              url="/"
            />
            </div>
            <div
            className='h-full mt-[150px]'
            style={{
              backgroundImage:`url(${Images.userReviews})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', 
            }}
          >
            <ReviewCard
              name='David Brown'
              position='Systems Integration Engineer Analog Devices'
              comment=' A full-up workspace in PathWave System Design 
                        with our Sys-Parameters models speeds everything up. 
                        Its a step beyond anything we have seen out there for RF system reference designs.'
              url="/"
            />
            </div>
        </AwesomeSlider>
      </section>
    </div>
  )
}

export default ProductSimulation;
