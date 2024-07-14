//-------------------- Import inbuilt libraries and modules --------------------
import React from "react";

// -------------------- Imports Custom Libraries and components --------------------
import { Images } from "../../constant";
import { 
  Footer,
  HomeTitleCard, 
  LatestInovationCard, 
  ServiceCard, 
  WelcomeCard,
} from "../../components/molecules";

// -------------------- import Thirdparty libraries and modules --------------------
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i:any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

const Home: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, 
  });
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
              src={Images.device1}
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
              src={Images.device2}
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
              src={Images.device1}
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
              src={Images.device4}
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
          className="w-full h-[75vh] mt-1"
          animation="foldOutAnimation"
          bullets={true}
          organicArrows={false}
          infinite={true}
        >
          <div
            className="h-full w-[80%] bg-cover"
            style={{ backgroundImage: `url(${Images.inovationBg})` }}
          >
            <LatestInovationCard
             src={Images.latest1}
             alt="Latest Device 1"
             title="Electronic Instrumentation Suit" 
             discription="17 Electronic instruments in a single device for electronic laboratories"
            />
          </div>
          <div
            className="h-full w-[80%] bg-cover"
            style={{ backgroundImage: `url(${Images.inovationBg})` }}
          >
            <LatestInovationCard
             src={Images.latest2}
             alt="Latest Device 2"
             title="Process View" 
             discription="Industrial indicators with multifunctional and multi color smart display"
            />
          </div>
          <div
            className="h-full bg-center bg-cover w-fit"
            style={{ backgroundImage: `url(${Images.inovationBg})` }}
          >
            <LatestInovationCard
             src={Images.latest3}
             alt="Latest Device 3"
             title="FLX CS100" 
             discription="PID control system demonstration kit with computerized control system and training platform for speed control and position control"
            />
          </div>
        </AwesomeSlider>
      </section>

      {/* Our servises */}
      <section className="flex flex-col items-center justify-center">
        <div className="mb-5">
          <h1 className="text-4xl font-bold">Our Services</h1>
        </div>
        <AwesomeSlider
          className="w-full h-[75vh] mt-1"
          animation="foldOutAnimation"
          bullets={true}
          organicArrows={false}
          infinite={true}
        >
          <div className="flex justify-center gap-5">
            <ServiceCard 
              src={Images.service1}
              alt="Service 1"
              title="Design and Manufacturing of Educational Equipment"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime."
            />
            <ServiceCard 
              src={Images.service2}
              alt="Service 2"
              title="Smart Building Automation Systems"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime."
            />
            <ServiceCard 
              src={Images.service3}
              alt="Service 3"
              title="Mechatronic Systems"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime."
            />
          </div>
          <div className="flex justify-center gap-5">
            <ServiceCard 
              src={Images.service4}
              alt="Service 4"
              title="Industrial Automation Solutions"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime."
            />
            <ServiceCard 
              src={Images.service5}
              alt="Service 5"
              title="Industrial Control and Instrumentations"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime."
            />
            <ServiceCard 
              src={Images.service6}
              alt="Service 6"
              title="Research Instrumentation and Equipment"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime."
            />
          </div>
          <div className="flex justify-center gap-5">
            <ServiceCard 
              src={Images.service7}
              alt="Service 7"
              title="System Installation Training"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime."
            />
            <ServiceCard 
              src={Images.service8}
              alt="Service 8"
              title="After Sales Services"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime."
            />
          </div>
        </AwesomeSlider>
      </section>

      {/* Our Technologies */}
      <motion.section
        className="flex flex-col items-center justify-center mt-[80px] mb-24"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="mb-5">
          <h1 className="text-4xl font-bold">Our Technologies</h1>
        </div>
        <div className="grid items-center justify-center grid-cols-4 gap-5 px-10 mb-[100px] mt-5">
          <div className="col-span-2">
            {["Research and development", "Electronic fabrications", "Firmware development"].map((text, index) => (
              <motion.p
                key={text}
                className="px-10 py-3 mb-2 transition-colors duration-500 bg-orange-500 rounded-lg hover:bg-orange-400 hover:text-slate-900 text-slate-50"
                custom={index}
                variants={paragraphVariants}
              >
                {text}
              </motion.p>
            ))}
          </div>
          <div className="col-span-2">
            {["Software developments", "Electro-mechanical system developments", "In house manufacturing"].map((text, index) => (
              <motion.p
                key={text}
                className="px-10 py-3 mb-2 transition-colors duration-500 bg-orange-500 rounded-lg hover:bg-orange-400 hover:text-slate-900 text-slate-50"
                custom={index + 3}
                variants={paragraphVariants}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <section className="w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
