import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { FaLinkedin, } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: (
      <span className="flex items-center gap-2">
        Noel Paul Moses Jangam{" "}
        <a
          href="https://www.linkedin.com/in/noel-paul-moses-j-35b2411b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-500 text-3xl hover:scale-110 transition" />
        </a>
      </span>
    ),
    description: (
      <>
        <span className="md:hidden">
          Software Engineer (4 YOE) & MS CS @ ASU.
        </span>
        <span className="hidden md:inline">
          Software Engineer with over 4 years of experience and a Master’s in Computer Science from Arizona State University.
        </span>
      </>
    ),
    image: "/noel.jpeg",
  },
  {
    title: (
      <a
        href="https://applybeast.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-[#8ab4f8] flex items-center gap-2"
      >
        Apply Beast | NextJS, NodeJS, PostgreSQL
        <FiExternalLink className="text-white text-2xl" />
      </a>
    ),
    description: (
      <>
        <span className="md:hidden">
          Published a Chrome extension that auto-applies to LinkedIn jobs.
        </span>
        <span className="hidden md:inline">
          Developed and published a Chrome extension that intelligently automates job applications on LinkedIn.
        </span>
      </>
    ),
    image: "/applybeast.png",
  },
  {
    title: (
      <a
        href="https://naviget.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-[#8ab4f8] flex items-center gap-2"
      >
        Naviget | Python, AWS, NextJS, TypeScript
        <FiExternalLink className="text-white text-2xl" />
      </a>
    ),
    description: (
      <>
        <span className="md:hidden">
          Developed a web app and used AWS S3, Lambda to display 3D visualizations from MRI scans.
        </span>
        <span className="hidden md:inline">
          Built Naviget’s web application and enabled patients to upload 2D DICOM images and receive HIPAA-compliant 3D visualizations of MRI and CT scans.
        </span>
      </>
    ),
    image: "/naviget.png",
  },
  {
    title: (
      <a
        href="https://aws.amazon.com/codewhisperer/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-[#8ab4f8] flex items-center gap-2"
      >
        TCS | Amazon 
        <FiExternalLink className="text-white text-2xl" />
      </a>
    ),
    description: (
      <>
        <span className="md:hidden">
          Worked on developing Amazon’s AI-based coding assistant: CodeWhisperer.
        </span>
        <span className="hidden md:inline">
          Worked as a Software Engineer at India's largest IT services company, TCS, to develop and maintain Amazon's AI powered coding assistant – CodeWhisperer.
        </span>
      </>
    ),
    image: "/tcs_amazon.png",
  },
];




const Hero = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 10000); // 3 seconds
  
    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  
  return (
    <>
   
    <section className="relative w-full mx-auto pb-10">
      {/* Accent Line */}
      <div className="w-1 h-20 via-violet-900 violet-gradient" />

      {/* Content */}
      <div
        className={`${styles.paddingX} relative mt-[10px] max-w-7xl mx-auto flex flex-col items-center`}
      >
        {/* Header */}
        <div className="flex flex-row items-start gap-8 w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 violet-gradient rounded-full bg-[#291358]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Noel's <span className="text-[#6738cb]">Portfolio</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 md:hidden`}>
            Software Engineer with over 4 YOE, specialized in Full Stack, AWS, and Software Development <br/> 
            </p>
           
          </div>
        </div>

                        {/* Project Card */}
                      {/* Project Card with Side Arrows */}
                      <div> <p className={`text-gray-500 text-xl sm:text-2xl font-semibold sm:-mt-4 md:-mt-56 text-center`}>
            Key Highlights<br/> 
            </p></div>
<div className="w-full flex justify-center items-center mt-4 md:-mt-40 px-4">
  
  <div className="relative w-full max-w-3xl">
    {/* Arrows for md+ (sides) */}
    <button
      onClick={handlePrev}
      className="hidden md:flex absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-[#2e2e46] text-white px-4 py-3 rounded-full hover:bg-[#3d3d5c] transition z-10"
    >
      &#8592;
    </button>
    <button
      onClick={handleNext}
      className="hidden md:flex absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-[#2e2e46] text-white px-4 py-3 rounded-full hover:bg-[#3d3d5c] transition z-10"
    >
      &#8594;
    </button>

    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
        className="h-[400px] md:h-[680px] w-full bg-[#1a1a2e] p-5 sm:p-6 rounded-3xl border border-[#2e2e46] shadow-2xl flex flex-col"
      >
        <img
          src={projects[current].image}
          alt={projects[current].title}
          className="w-full h-56 md:h-[500px] object-cover rounded-xl mb-4 sm:mb-6"
        />
        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          {projects[current].title}
        </h3>
        <p className="text-white-100 text-base sm:text-md overflow-y-auto pr-1">
          {projects[current].description}
        </p>
      </motion.div>
    </AnimatePresence>

    {/* Arrows for mobile (below card) */}
    <div className="flex md:hidden justify-center gap-6 mt-6">
      <button
        onClick={handlePrev}
        className="bg-[#2e2e46] text-white px-5 py-3 rounded-full hover:bg-[#3d3d5c] transition"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="bg-[#2e2e46] text-white px-5 py-3 rounded-full hover:bg-[#3d3d5c] transition"
      >
        &#8594;
      </button>
    </div>
  </div>
</div>

          </div>

      {/* Scroll Prompt */}
      {/* <div className="absolute xs:bottom-8 bottom-20 w-full flex justify-center items-center hidden ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full violet-gradient bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
    </>
  );
};

export default Hero;
