import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  useExternalLinkIcon,
  isMobile,
}) => {
  const handleCardClick = () => {
    window.open(source_code_link, "_blank", "noopener,noreferrer");
  };

  const CardContent = () => (
    <>
      <div className="relative w-full h-[230px] shadow-card">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 pointer-events-none">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
            {useExternalLinkIcon ? (
              <FiExternalLink className="text-white text-lg" />
            ) : (
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-[14px] text-secondary">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div
        onClick={handleCardClick}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
      >
        <CardContent />
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={handleCardClick}
      className="cursor-pointer"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <CardContent />
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Run on initial mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
     {!isMobile ? (
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} from-neutral-100 font-semibold`}>
            A Showcase of My Technical Expertise
          </p>
          <h2 className={styles.sectionHeadText}>My Digital Creations</h2>
        </motion.div>
      ) : (
        <div>
          <p className={`${styles.sectionSubText} from-neutral-100 font-semibold`}>
            A Showcase of My Technical Expertise
          </p>
          <h2 className={styles.sectionHeadText}>My Digital Creations</h2>
        </div>
      )}

      <div className="w-full flex">
        {!isMobile ? (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Dive into a curated selection of projects that demonstrate my journey
            as a Full Stack Developer. From AI-powered models to dynamic web
            applications, each project reflects my commitment to innovation,
            problem-solving, and creating impactful digital solutions.
          </motion.p>
        ) : (
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Dive into a curated selection of projects that demonstrate my journey
            as a Full Stack Developer. From AI-powered models to dynamic web
            applications, each project reflects my commitment to innovation,
            problem-solving, and creating impactful digital solutions.
          </p>
        )}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            isMobile={isMobile}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
