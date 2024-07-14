//-------------------- Import inbuilt libraries and modules --------------------
import React from "react";

// -------------------- Imports Custom Libraries and components --------------------
import { Images } from "../../constant";
import { 
  HomeTitleCard, 
  LatestInovationCard, 
  WelcomeCard,
} from "../../components/molecules";

// -------------------- import Thirdparty libraries and modules --------------------
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Home: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="w-full bg-[#d2d0dc]">
        <AwesomeSlider
          className="w-full h-[75vh] bg-none"
          animation="cubeAnimation"
          bullets={true}
          infinite={true}
        >
          <div 
            className="h-full w-[80%] bg-cover"
            style={{ backgroundImage: `url(${Images.homeTitle})` }}
          >
            <HomeTitleCard 
              title="Electronic Instrumentation Suite"
              description="Virtual Instrument System for Electronic Laboratories"
              src={Images.device}
              alt="Device"
            />
          </div>
          <div 
            className="h-full w-[80%] bg-cover"
            style={{ backgroundImage: `url(${Images.homeTitle})` }}
          >
            <HomeTitleCard 
              title="FLX CS100"
              description="PID Control System Demonstration Kit"
              src={Images.device}
              alt="Device"
            />
          </div>
          <div 
            className="h-full w-[80%] bg-cover"
            style={{ backgroundImage: `url(${Images.homeTitle})` }}
          >
            <HomeTitleCard 
              title="Process View"
              description="Industrial Indicate"
              src={Images.device}
              alt="Device"
            />
          </div>
          <div 
            className="h-full w-[80%] bg-cover"
            style={{ backgroundImage: `url(${Images.homeTitle})` }}
          >
            <HomeTitleCard 
              title="FLX MC20"
              description="Synchronous Motion Controller"
              src={Images.device}
              alt="Device"
            />
          </div>
        </AwesomeSlider>
      </section>

      {/* Welcome Section */}
      <section className="md:mt-[8%] mt-[70px] flex flex-col items-center justify-center">
        <div className="text-center w-[80%]">
          <h1 className="text-xl font-bold md:text-3xl">Welcome to Flexcept</h1>
          <p className="mt-4 mb-8 text-sm font-semibold">
            We specialize in developing cutting-edge electronic, instrumentation, 
            and electromechanical systems, along with innovative software solutions. 
            Our focus includes customized instrumentation for multidisciplinary research, 
            advanced laboratory and teaching equipment for educational institutions, and comprehensive 
            automation solutions for industrial, residential, and commercial applications. 
            At Flexcept, we are dedicated to delivering high-quality, bespoke solutions that empower 
            researchers, educators, and industry professionals.
          </p>
        </div>
        <div className="md:flex justify-around gap-10 mb-[50px] mt-5">
          <WelcomeCard 
            src={Images.automation}
            alt="Automation"
            title="Control and Automation"
          />
          <WelcomeCard 
            src={Images.education}
            alt="Education"
            title="Technology for Education"
          />
          <WelcomeCard 
            src={Images.research}
            alt="Research"
            title="Research Instrumentation"
          />
        </div>
      </section>

      {/* Latest Products */}
      <section className="flex flex-col items-center justify-center mb-[80px]">
        <div className="mb-5">
          <h1 className="text-4xl font-bold">Our Latest Inovations</h1>
        </div>
        <AwesomeSlider
          className="w-full h-[75vh]"
          animation="foldOutAnimation"
          bullets={true}
          organicArrows={false}
          infinite={true}
        >
          <div>
            <LatestInovationCard
             src={Images.latest1}
             alt="Latest Device 1"
             title="Electronic Instrumentation Suit (ELS)" 
             discription="17 Electronic instruments in a single device for electronic laboratories"
            />
          </div>
          <div>
            <LatestInovationCard
             src={Images.latest2}
             alt="Latest Device 2"
             title="Process View" 
             discription="Industrial indicators with multifunctional and multi color smart display"
            />
          </div>
          <div>
            <LatestInovationCard
             src={Images.latest3}
             alt="Latest Device 3"
             title="FLX CS100" 
             discription="PID control system demonstration kit with computerized control system and training platform for speed control and position control"
            />
          </div>
        </AwesomeSlider>
      </section>
    </div>
  );
};

export default Home;
