//-------------------- Import inbuilt libraries and modules --------------------
import React from "react";

// -------------------- Imports Custom Libraries and components --------------------
import { Images } from "../../constant";
import { HomeTitleCard } from "../../components/molecules";

// -------------------- import Thirdparty libraries and modules --------------------
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Home: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section
        className="w-full bg-[#dedce7]"
      >
        <AwesomeSlider
          className="w-full h-[75vh] bg-none"
          animation="cubeAnimation"
          bullets={true}
          infinite={true}
        >
          <div 
            className=" h-full w-[80%] bg-cover"
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
            className=" h-full w-[80%] bg-cover"
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
            className=" h-full w-[80%] bg-cover"
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
            className=" h-full w-[80%] bg-cover"
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
    </div>
  );
};

export default Home;
