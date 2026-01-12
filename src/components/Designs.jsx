import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { FiExternalLink } from 'react-icons/fi';
import Contact from './Contact';
import { StarsCanvas } from './canvas';

const designProjects = [
  {
  name: "AasthaGlass.com",
  description:
    "Professional website for a glass manufacturing and distribution business, featuring service showcases, project galleries, and lead-generation flows.",
  website: "https://aasthaglass.com",
  image: "/designs/designs.png",
  tags: ["Manufacturing", "Business Website", "Responsive Design"],
},
  {
    name: "HireHack.ai",
    description:
      "Public marketing website for HireHack, an AI-powered job application automation platform. Designed for high conversion, clarity of value proposition, and fast onboarding.",
    website: "https://hirehack.ai",
    image: "/designs/hh.png",
    tags: ["AI", "SaaS", "Startup", "Landing Page"],
  },
  {
    name: "Omada.ai Grader",
    description:
      "Landing and application interface for Omada’s AI-powered social media grading tool, optimized for conversion, speed, and clear user feedback.",
    website: "https://grader.omada.ai",
    image: "/designs/omada.png",
    tags: ["AI", "SaaS", "Product Design", "Landing Page"],
  },
  {
    name: "HireHack Dashboard",
    description:
      "Authenticated web application dashboard for HireHack users to manage applications, resumes, usage metrics, and subscriptions with a clean, scalable UI.",
    website: "https://app.hirehack.ai",
    image: "/designs/hhdash.png",
    tags: ["SaaS", "Dashboard", "Product UI", "Web App"],
  },
  {
    name: "Naviget.com",
    description:
      "Primary website for Naviget’s healthcare platform, designed to communicate product vision, clinical trust, and scalability across global and India-specific audiences.",
    website: "https://naviget.com",
    image: "/designs/naviget.png",
    tags: ["Healthcare", "SaaS", "Startup", "Responsive Design"],
  },


  {
    name: "GynoCares.com",
    description:
      "Healthcare website for gynecology services with appointment booking, patient education content, and a clean, accessible UI.",
    website: "https://gynocares.com",
    image: "/designs/gynocares.png",
    tags: ["Healthcare", "Medical Services", "UI/UX"],
  },
  {
    name: "Sugnan.com",
    description:
      "Modern website highlighting solar business services and expertise with smooth animations and performance-focused design.",
    website: "https://sugnan.com",
    image: "/designs/sugnan.png",
    tags: ["Business", "Solar", "Modern Design"],
  },
];



const DesignCard = ({ index, name, description, website, image, tags, isMobile }) => {
  const handleClick = () => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  const CardContent = () => (
    <>
      <div className="relative w-full h-[280px] shadow-card rounded-2xl overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "/designs/image.png";
          }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex items-center gap-2 text-white text-lg font-semibold">
            Visit Website <FiExternalLink className="text-xl" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <FiExternalLink className="text-[#915EFF] text-2xl" />
        </div>

        <p className="mt-2 text-[14px] text-secondary leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[12px] px-3 py-1 bg-tertiary rounded-full text-[#915EFF] font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div
        onClick={handleClick}
        className="bg-black-200 p-2 rounded-2xl sm:w-[360px] w-full shadow-card cursor-pointer"
      >
        <CardContent />
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <Tilt
        options={{ max: 20, scale: 1.02, speed: 450 }}
        className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full shadow-card"
      >
        <CardContent />
      </Tilt>
    </motion.div>
  );
};


const Designs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto pb-20">
      <div className={`${styles.paddingX} max-w-7xl mx-auto mt-16 md:mt-20`}>
        {!isMobile ? (
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} font-semibold`}>
              Client Projects & Web Solutions
            </p>
            <h2 className={`${styles.sectionHeadText} p-2`} >Designs</h2>
          </motion.div>
        ) : (
          <div>
        
            <h2 className={`${styles.sectionHeadText} p-2`}>Designs </h2>
          </div>
        )}

        <div className="w-full flex">
          {!isMobile ? (
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Explore a collection of websites I've designed and developed for businesses across various industries.
              Each project showcases my ability to create professional, user-friendly, and visually appealing web solutions
              tailored to meet specific business needs and deliver exceptional user experiences.
            </motion.p>
          ) : (
            <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
              Explore a collection of websites I've designed and developed for businesses across various industries.
            </p>
          )}
        </div>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {designProjects.map((project, index) => (
            <DesignCard
              key={`design-${index}`}
              index={index}
              isMobile={isMobile}
              {...project}
            />
          ))}
        </div>

        <div className="mt-32 mb-20">
          {!isMobile ? (
            <motion.div variants={textVariant()}>
              <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
                Let's Work Together
              </h2>
              <p className="text-center text-secondary text-[16px] mb-12">
                Interested in creating a stunning website for your business? Let's discuss your project!
              </p>
            </motion.div>
          ) : (
            <div>
              <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
                Let's Work Together
              </h2>
              <p className="text-center text-secondary text-[16px] mb-12">
                Interested in creating a stunning website for your business? Let's discuss your project!
              </p>
            </div>
          )}
          <Contact />
        </div>
      </div>
      <a
  href="#contact"
  className="fixed bottom-6 right-6 z-50 px-6 py-3 rounded-full bg-[#915EFF] text-white font-semibold shadow-2xl hover:scale-105 transition"
>
  Contact Me
</a>

    </section>
  );
};

export default Designs;
