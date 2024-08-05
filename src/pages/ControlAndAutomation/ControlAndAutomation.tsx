// -------------------- Imports --------------------
import React from 'react';
import { Images, Videos } from '../../constant';
import { FAQCard, FlexceptCard, Footer, ProtectInovationCard, ReviewCard } from '../../components/molecules';
import "./controlAndAutomation.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import { Link } from 'react-router-dom';

const ControlAndAutomation: React.FC = () => {
  const foundaryImages = [Images.found1 , Images.found2 , Images.found3 , Images.found4];
  return (
    <div>
      {/* Header */}
      <section 
  className="w-full h-[40vh] bg-black flex items-center relative justify-center sm:bg-cover sm:bg-top"
  style={{ 
    backgroundImage: `url(${Images.simulationHeader})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',  
  }}
>
  <div 
    className="relative flex flex-col items-center justify-center h-[80%] w-full text-slate-50 md:items-start md:h-[50%] md:w-[60%]"
  >
    <span className="text-xl md:px-10 md:text-6xl">Control And Automation</span>
    <p className="px-5 text-base md:text-left text-center mt-5 mb-5 md:px-10 md:text-lg md:mt-5 md:mb-10 md:w-[80%] lg:w-[60%]">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, 
      harum asperiores nesciunt consequatur eveniet tenetur minima 
      accusantium et inventore in.
    </p>
  </div>
  <div className="absolute md:bottom-0 top-[100%] flex justify-center w-full h-60 md:h-20 bg-[#D2D0DC] text-slate-900">
    <ul className="flex flex-col items-center justify-center w-full md:flex-wrap">
      <li className="px-4 py-2 mx-2 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600 sm:px-5 sm:py-5 md:px-10 md:py-5">EDA</li>
      <li className="px-4 py-2 mx-2 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600 sm:px-5 sm:py-5 md:px-10 md:py-5">Circuit Design</li>
      <li className="px-4 py-2 mx-2 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600 sm:px-5 sm:py-5 md:px-10 md:py-5">Physical Design</li>
      <li className="px-4 py-2 mx-2 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600 sm:px-5 sm:py-5 md:px-10 md:py-5">System Design</li>
      <li className="px-4 py-2 mx-2 text-lg font-semibold cursor-pointer hover:animate-bounce hover:text-red-600 sm:px-5 sm:py-5 md:px-10 md:py-5">Device Modeling</li>
    </ul>
  </div>
</section>


      {/* Selected Simulation Part Discription */}
      <section className='flex items-center justify-center w-full bg-white md:mt-20 mt-[220px]'>
          <div className='flex flex-col items-center justify-center pt-12 pb-12 text-center'>
            <h2 className='px-5 text-xl font-semibold'>Model, Simulate, and Optimize with EDA Software</h2>
            <p className='w-[100%] md:w-[50%] px-2 mt-4 break-words text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati dolor corporis harum? 
                Quod repudiandae voluptatem explicabo possimus accusamus ad quia 
                molestias vero temporibus, neque porro sit. Hic, eligendi nihil officiis ex at 
                praesentium neque fuga doloremque minus temporibus asperiores?</p>
          </div>
      </section>

      {/* Flexcept card */}
      <section className='flex flex-col items-center justify-center w-full bg-[#D2D0DC]'>
        <div className='flex flex-col items-center justify-center pt-8 pb-6 md:pt-12'>
            <h2 className='text-lg font-semibold md:text-xl'>Explore Flexcept EDA Software Suites</h2>
            <ul className='flex flex-col md:flex-row items-center justify-center md:h-[50px] h-auto mt-4 border-b-[1px] border-black'>
                <li  className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Circuit Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Physical Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>System Design</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Device Modeling</li>
                <li className='px-10 ml-5 mr-5 py-[8px] text-[18px] font-semibold border-b-[4px] border-transparent cursor-pointer hover:border-b-orange-500'>Data And IP Management</li>
            </ul>
            {/* <hr className='custom-hr'/> */}
        </div>
        <div className='flex flex-col items-center justify-center gap-5 md:flex-row'>
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
          <div className='flex flex-col items-start justify-center w-full gap-4'>
            <div className='mb-5'>
              <h2 className='text-lg font-semibold'>Strat Your Next Design with FLEXCEPT</h2>
              <p className='text-[12px] break-words mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Exercitationem ut consectetur, aliquid quia vitae quis, 
                est tenetur aliquam fugit illum minima qui animi nihil amet corporis nemo, 
                id doloremque distinctio eaque sint. Neque, distinctio corrupti.</p>
            </div>
            <button className='w-full px-5 py-2 text-center transition-colors duration-300 border-2 border-red-600 hover:bg-red-600 hover:text-slate-50'>
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

      {/* Foundary process design */}
      <section className='bg-[#D2D0DC] mt-0 pt-[50px] pb-[50px] w-full flex items-center justify-center'>
        <div className='p-10 flex items-center justify-center gap-5 w-[80%]'>
          <div className='w-full'>
            <h1 className='text-xl font-bold'>Foundry Process Design</h1>
            <p className='text-sm'>Integrated circuit (IC) foundries offer semiconductor processes that use PDKs 
              containing active and passive device simulation models for IC design. 
              Keysight EDA tools work closely with foundries to offer high-frequency 
              PDKs in Si, SiGe, GaAs, InP, and GaN processes.</p>
            <p className='mt-3 text-sm'>When choosing a foundry PDK, you must be sure that the models meet foundry 
              manufacturing requirements. Foundries validate and distribute all PDKs 
              provided for Keysight simulators, guaranteeing that the models behave optimally 
              for first-pass design success.</p>
            <button className='px-10 py-3 mt-5 transition-colors duration-300 border-2 border-red-600 hover:bg-red-600 hover:text-slate-50'>Learn More</button>
          </div>
          <div className='flex flex-row flex-wrap items-center justify-center w-full gap-5'>
            {foundaryImages.length > 0 && foundaryImages.map((imag , index) => (
              <img 
                src={imag} 
                alt={`foundaryImage${index}`} 
                className='max-w-[150px] min-w-12 hover:scale-110 transition-transform duration-300' 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inivation Investment */}
      <section 
        className=' flex flex-col items-center justify-start w-full mb-[80px] h-[85vh]' 
        style={{
          backgroundImage: `url(${Images.protectYou})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
      >
        <h1 className='text-4xl text-slate-50 font-bold text-center mt-[6%] mb-[50px]'>Protect Your Innovation Investment</h1>
          <div className='flex items-center justify-center gap-[30px] w-[80%]'>
            <ProtectInovationCard 
              src={Images.p1}
              alt='Protect Inovarion Picture1'
              title='FLEXCEPTCare'
              discription='Receive priority updates and enhancements, 
              faster response times, and expert support.'
            />
            <ProtectInovationCard 
              src={Images.p2}
              alt='Protect Inovarion Picture2'
              title='Software Licensing'
              discription='Choose your terms, choose your type, and keep control 
              of your budget for flexibility and support.'
            />
            <ProtectInovationCard 
              src={Images.p3}
              alt='Protect Inovarion Picture3'
              title='Software Manager'
              discription='Manage your Flexcept software, view and request licenses, 
              and access the latest updates.'
            />
            <ProtectInovationCard 
              src={Images.p4}
              alt='Protect Inovarion Picture4'
              title='Enterprise Agreement'
              discription='Access Flexcept software portfolio with ease. 
              Remix your license pool for cost-effective flexibility.'
            />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className='flex flex-col items-center justify-center mb-[80px] w-full'>
        <h1 className='text-4xl font-bold text-center'>Frequently Asked Questions</h1>
        <div className='w-[70%] mt-10'>
          <FAQCard 
            question='What is electronic design automation software?'
            answer='Electronic design automation (EDA) is a Computer-Aided Design (CAD) category 
                    of software tools for designing electronic circuits and systems. 
                    The tools work together in a specific design flow for the physical design of chips, packages, and boards.'
          />
           <FAQCard 
            question='What is different types of software?'
            answer='EDA software can perform individual device characterization, and the electrical design of 
                    the interconnects between active electronics from the component to the system level.'
          />
           <FAQCard 
            question='What are the different functions of software?'
            answer='Virtual prototyping involves building a soft equivalent of a design before investing in hardware prototyping. 
                    Statistical studies examine how a design behaves under many operating conditions. 
                    Product variations could include high volume or temperature, voltages, and signal environments. 
                    Yield analysis examines building the design in single quantities or mass production.'
          />
           <FAQCard 
            question='What re the different types of simmulations supported tools?'
            answer='The principal simulation is circuit simulation, which can be performed in both time and frequency domains. 
                    A range of additional tools can help optimize a design. Statistical analyses perform optimization and parameter sweeps to improve aspects of a circuit. 
                    Electrothermal analysis relates heat impacts to a circuits electrical characteristics. 
                    Electromagnetic analysis describes the electromagnetic effects on a circuits electrical characteristics.'
          />
           <FAQCard 
            question='What are the advantages does FLEXCEPT gain from beging part of the world largest test and measurement compant?'
            answer='FLEXCEPT infuses our robust, accurate, easy-to-use design and validation 
            solutions with advanced simulation techniques and critical measurement science know-how from 
            over 80 years of test industry experience. For example, shared technology between simulation and 
            test eliminates discrepancies and delays when matching results from complex multi-technology RF modules for 5G, automotive radar, and aerospace applications.'
          />
        </div>
      </section>

      {/* Help and contact */}
      <section className='flex flex-col items-center justify-center bg-[#D2D0DC] p-20 mb-[80px]'>
        <h1 className='text-2xl text-semibold'>Want to help or have questions?</h1>
        <button className='mt-5 w-[20%] px-5 py-4 bg-red-600 text-slate-50 transition-colors duration-300 hover:bg-red-500'><Link to="/">Contact Us</Link></button>
      </section>

      {/* Footer */}
      <section className='mt-[250px]'>
        <Footer />
      </section>
    </div>
  )
}

export default ControlAndAutomation;
