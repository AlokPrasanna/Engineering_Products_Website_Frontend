//-------------------- Import inbuilt libraries and modules --------------------
import React, { useEffect, useState } from "react";

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

  const [servicesSlides, setServicesSlides] = useState<JSX.Element[]>([]);

  const Header = [
    {
      id:"1",
      title:"Electronic Instrumentation Suite",
      description:"Virtual Instrument System for Electronic Laboratories",
      src:Images.device1,
      alt:"Device"
    },
    {
      id:"2",
      title:"FLX CS100",
      description:"PID Control System Demonstration Kit",
      src:Images.device2,
      alt:"Device"
    },
    {
      id:"3",
      title:"Process View",
      description:"Industrial Indicate",
      src:Images.device1,
      alt:"Device"
    },
    {
      id:"4",
      title:"FLX MC20",
      description:"Synchronous Motion Controller",
      src:Images.device4,
      alt:"Device"
    },
  ]

  const Services = [
    {
      id: "1",
      src: Images.service1,
      alt: "Service 1",
      title: "Design and Manufacturing of Educational Equipment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime.",
    },
    {
      id: "2",
      src: Images.service2,
      alt: "Service 2",
      title: "Smart Building Automation Systems",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime.",
    },
    {
      id: "3",
      src: Images.service3,
      alt: "Service 3",
      title: "Mechatronic Systems",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime.",
    },
    {
      id: "4",
      src: Images.service4,
      alt: "Service 4",
      title: "Industrial Automation Solutions",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime.",
    },
    {
      id: "5",
      src: Images.service5,
      alt: "Service 5",
      title: "Industrial Control and Instrumentations",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime.",
    },
    {
      id: "6",
      src: Images.service6,
      alt: "Service 6",
      title: "Research Instrumentation and Equipment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime.",
    },
    {
      id: "7",
      src: Images.service7,
      alt: "Service 7",
      title: "System Installation Training",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime.",
    },
    {
      id: "8",
      src: Images.service8,
      alt: "Service 8",
      title: "After Sales Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto iste asperiores porro enim explicabo harum sunt reiciendis necessitatibus maxime.",
    },
  ];

  const LatestInovations = [
    {
      id:"1",
      src:Images.latest1,
      alt:"Latest Device 1",
      title:"Electronic Instrumentation Suit", 
      discription:"17 Electronic instruments in a single device for electronic laboratories"
    },
    {
      id:"2",
      src:Images.latest2,
      alt:"Latest Device 2",
      title:"Process View", 
      discription:"Industrial indicators with multifunctional and multi color smart display"
    },
    {
      id:"3",
      src:Images.latest3,
      alt:"Latest Device 3",
      title:"FLX CS100", 
      discription:"PID control system demonstration kit with computerized control system and training platform for speed control and position control"
    },
  ]

  const updateScreenSize = () => {
    const isSmall = window.innerWidth <= 768; // Adjust breakpoint as needed

    if (isSmall) {
      // Each service gets its own slide
      setServicesSlides(
        Services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-center"
            style={{
              backgroundImage: `url(${Images.servicesBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <ServiceCard
              src={service.src}
              alt={service.alt}
              title={service.title}
              description={service.description}
            />
          </div>
        ))
      );
    } else {
      // Group services into slides of three
      const groupedSlides: JSX.Element[] = [];
      for (let i = 0; i < Services.length; i += 3) {
        groupedSlides.push(
          <div
            key={`slide-${i}`}
            className="flex justify-center gap-5"
            style={{
              backgroundImage: `url(${Images.servicesBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {Services.slice(i, i + 3).map((service) => (
              <ServiceCard
                key={service.id}
                src={service.src}
                alt={service.alt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        );
      }
      setServicesSlides(groupedSlides);
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section className="w-full bg-[#d2d0dc]">
        <AwesomeSlider
          className="w-full lg:h-[75vh] bg-none h-[50vh]"
          animation="cubeAnimation"
          bullets={true}
          infinite={true}
        >
          {Header.length > 0 ? Header.map((h) => (
            <div 
              key={h.id}
              className="h-full w-[70%]"
              style={{ 
                backgroundImage: `url(${Images.homeTitle})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',  
              }}
            >
              <HomeTitleCard 
                title={h.title}
                description={h.description}
                src={h.src}
                alt={h.alt}
              />
            </div>
          )):""}
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
            to="/control-and-automation"
            src={Images.automation}
            alt="Automation"
            title="Control and Automation"
          />
          <WelcomeCard 
            to='/technology-for-education'
            src={Images.education}
            alt="Education"
            title="Technology for Education"
          />
          <WelcomeCard 
            to="/research-and-instumentation"
            src={Images.research}
            alt="Research"
            title="Research Instrumentation"
          />
        </div>
      </section>

      {/* Latest Products */}
      <section className="flex flex-col items-center justify-center mb-[80px]">
        <div className="mb-5">
          <h1 className="text-xl font-bold md:text-3xl">Our Latest Inovations</h1>
        </div>
        <AwesomeSlider
          className="w-full h-[75vh] mt-1"
          animation="foldOutAnimation"
          bullets={true}
          organicArrows={false}
          infinite={true}
        >
          {LatestInovations.length > 0 ? LatestInovations.map((inovation) => (
            <div
              key={inovation.id}
              className="h-full w-[80%] bg-cover"
              style={{ 
                backgroundImage: `url(${Images.inovationBg})`,  
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
              }}
          >
            <LatestInovationCard
             src={inovation.src}
             alt={inovation.alt}
             title={inovation.title}
             discription={inovation.discription}
            />
          </div>
          )):""}
        </AwesomeSlider>
      </section>

      {/* Our servises */}
      <section className="flex flex-col items-center justify-center">
        <div className="mb-5">
          <h1 className="text-xl font-bold md:text-3xl">Our Services</h1>
        </div>
        <AwesomeSlider
          className="w-full h-[75vh] mt-1"
          animation="foldOutAnimation"
          bullets={true}
          organicArrows={false}
          infinite={true}
        >
          {servicesSlides}
        </AwesomeSlider>
    </section>
      {/* Our Technologies */}
      <div className="flex flex-col items-center justify-center mt-[80px]">
        <div className="mb-5">
          <h1 className="text-xl font-bold md:text-3xl">Our Technologies</h1>
        </div>
      </div>
      <motion.section
        className="flex flex-col items-center justify-center mb-24"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 md:gap-5 gap-0 px-5 md:px-10 mb-24 mt-5 w-[90%] md:w-[65%]">
          <div className="col-span-1 md:col-span-1">
            {["Research and development", "Electronic fabrications", "Firmware development"].map((text, index) => (
              <motion.p
                key={text}
                className="md:px-10 px-2 text-center py-3 md:text-[12px] text-[13px] mb-2 transition-colors duration-500 bg-orange-500 rounded-lg hover:bg-orange-400 hover:text-slate-900 text-slate-50"
                custom={index}
                variants={paragraphVariants}
              >
                {text}
              </motion.p>
            ))}
          </div>
          <div className="col-span-1 md:col-span-1">
            {["Software developments", "In house manufacturing" ,"Electro-mechanical system developments"].map((text, index) => (
              <motion.p
                key={text}
                className="md:px-10 px-2 text-center py-3 md:text-[12px] text-[13px] mb-2 transition-colors duration-500 bg-orange-500 rounded-lg hover:bg-orange-400 hover:text-slate-900 text-slate-50"
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
