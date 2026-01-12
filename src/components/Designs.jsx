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
    description: "Professional website for a glass manufacturing and distribution business, featuring product catalogs, service offerings, and client testimonials.",
    website: "https://aasthaglass.com",
    image: "/designs/aasthaglass.png",
    tags: ["E-Commerce", "Manufacturing", "Responsive Design"],
  },
  {
    name: "GynoCares.com",
    description: "Healthcare website for gynecology services, designed with patient-friendly interface, appointment booking, and comprehensive medical information.",
    website: "https://gynocares.com",
    image: "/designs/gynocares.png",
    tags: ["Healthcare", "Medical Services", "UI/UX"],
  },
  {
    name: "Sugnan.com",
    description: "Modern business website showcasing services and expertise with clean design, smooth animations, and optimized user experience.",
    website: "https://sugnan.com",
    image: "/designs/sugnan.png",
    tags: ["Business", "Corporate", "Modern Design"],
  },
];

const DesignCard = ({ index, name, description, website, image, tags, isMobile }) => {
  const CardContent = () => (
    <>
      <div className="relative w-full h-[280px] shadow-card rounded-2xl overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = '/designs/image.png';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-lg font-semibold hover:text-[#915EFF] transition"
          >
            Visit Website <FiExternalLink className="text-xl" />
          </a>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#915EFF] hover:text-white transition"
          >
            <FiExternalLink className="text-2xl" />
          </a>
        </div>
        <p className="mt-2 text-[14px] text-secondary leading-relaxed">{description}</p>
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
      <div className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full shadow-card">
        <CardContent />
      </div>
    );
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
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
      <div className={`${styles.paddingX} max-w-7xl mx-auto mt-20`}>
        {!isMobile ? (
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} font-semibold`}>
              Client Projects & Web Solutions
            </p>
            <h2 className={styles.sectionHeadText}>Design Showcase</h2>
          </motion.div>
        ) : (
          <div>
            <p className={`${styles.sectionSubText} font-light`}>
              Client Projects & Web Solutions
            </p>
            <h2 className={styles.sectionHeadText}>Design Showcase</h2>
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
              Each project showcases my ability to create professional, user-friendly, and visually appealing web solutions
              tailored to meet specific business needs and deliver exceptional user experiences.
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
    </section>
  );
};

export default Designs;
