// ----------- Imports ----------
import React from 'react';
import { Images , Videos } from '../../constant';
import { Footer, StepWayCard } from '../../components/molecules';
import { Link } from 'react-router-dom';

const About:React.FC = () => {
  return (
    <div>
        {/* Header */}
        <section
            style={{
                backgroundImage: `url(${Images.about})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',  
            }}
        >
           <div className='flex justify-end mr-[10%]'>
            <div 
                    className='ml-[20%] py-10 px-8 flex items-start  justify-center h-[50vh] flex-col'
                >
                    <h2 className='py-4 text-4xl font-bold'>Inovators Start Here</h2>
                    <p className='text-lg'>At Flexcept, we empower innovators to bring world-changing <br /> technologies to life.</p>
                </div>
           </div>
        </section>

        {/* Details  */}
        <section className='flex flex-col items-center justify-center w-full mb-20'>
            <div className='w-[50%]'>
                <h1 className='px-5 py-[60px] text-4xl font-semibold text-center' >Accelerate Innovation to Connect
                and Secure the World</h1>
            </div>
            <div className='flex items-center justify-center gap-10 w-[70%]'>
                <div className='w-full'>
                    <video className='' controls>
                    <source src={Videos.about} type='video/mp4'/>
                    </video>
                </div>
                <div className='w-1/2'>
                    <h2 className='text-xl font-semibold'>Innovative breakthroughs. Bold ideas. Global impact.</h2>
                    <p>Keysight is your innovation partner, delivering market-leading design, emulation, 
                        and test environments that help you develop and deploy faster, with less risk, throughout the product life cycle.
                        <br/><br/>Push the boundaries of engineering and deliver the best product experiences with our fusion of technologies, measurement expertise, 
                        and tailored solutions built from a foundation of co-innovation with industry ecosystem leaders. 
                        Gather insights sooner to build and go to market with confidence.
                    </p>
                </div>
            </div>
        </section>

        {/* Step way */}
        <section className='flex flex-col items-center justify-center w-full text-slate-50 bg-[#262626]'>
            <div className='w-[60%]'>
                <h1 className='px-5 pt-[60px] pb-10 text-4xl font-semibold text-center' >We're with you every step of the way</h1>
                <p className='text-lg text-center'>Whether you are looking to improve your development process, optimize your network, or harness the power of AI and digital twins for a head start on tomorrow’s 
                technologies, count on Keysight.</p>
            </div>
            <div className='flex items-center justify-center'>
                <StepWayCard 
                    src={Images.automation}
                    alt='Automation'
                    title='Automation'
                    discription='Flexcept EDA software and emulation tools help you shift left to design and deploy faster and with confidence.'
                />
                <StepWayCard 
                    src={Images.education}
                    alt='Education'
                    title='Test and validate'
                    discription='With benchtop and complete test systems, we will help you measure whats new and whats next.' 
                />
                <StepWayCard 
                    src={Images.research}
                    alt='Research'
                    title='Manufacture and optimize'
                    discription='Optimize manufacturing, equipment performance, and training with software and services from Keysight.'
                />
            </div>
        </section>

        {/* Contact Us */}
        <section className='h-[20vh] w-full bg-[#D2D0DC] flex items-center justify-center'>
            <button className='px-6 py-4 transition-colors duration-300 bg-red-600 text-slate-50 hover:bg-red-500'><Link to='/contact'>Contact Us</Link></button>
        </section>

        {/* Footer */}
        <section className='mt-[250px]'>
            <Footer />
        </section>
    </div>
  )
}

export default About