//-------------------- Import inbuilt libraries and modules --------------------
import React from "react";

// -------------------- Imports Custom Libraries and components --------------------
import { Images } from "../../constant";
import { 
  HomeTitleCard, 
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
      <section className="w-full bg-[#dedce7]">
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
          <h1 className="md:text-3xl text-xl font-bold">Welcome to Flexcept</h1>
          <p className="text-sm mt-4 mb-8">
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
      <section className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">Our Latest Inovations</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
