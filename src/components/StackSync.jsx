import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { ArrowUpRightIcon, ClipboardIcon } from '@heroicons/react/24/outline';

const stacksyncCards = [
  {
    title: "1. GitHub Repository",
    icon: "/github.png",
    link: "https://github.com/jangamnoelpaulmoses/stacksync",
  },
  {
    title: "2. Google Cloud Run URL",
    icon: "/gcrun.png",
    link: "https://noel-stacksync-333394763670.us-west2.run.app/execute",
  },
  {
    title: "3. Completion Time 2-2.5 Hrs",
    icon: "/time.png",
    link: null,
  },
];

const ServiceCard = ({ index, title, icon, link }) => {
  const isCloudRunLink = title.toLowerCase().includes("cloud run");

  const handleCopy = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      alert("Copied to clipboard!");
    }
  };

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col text-center'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain mb-4' />
          {link ? (
            <div className="flex items-center justify-center gap-2 text-white text-[18px] font-bold">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                {title}
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
              {isCloudRunLink && (
                <ClipboardIcon
                  className="h-8 w-8 cursor-pointer hover:text-gray-300"
                  onClick={handleCopy}
                  title="Google Cloud Run API Url is Copied to clipboard"
                />
              )}
            </div>
          ) : (
            <h3 className='text-white text-[20px] font-bold'>{title}</h3>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const StackSync = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const expiryDate = new Date("2025-07-01T00:00:00Z").getTime() + 14 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = expiryDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ expired: true });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiryDate]);

  return (
    <section className="relative w-full min-h-screen mx-auto mt-10 mb-32">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>

        {/* Countdown Timer */}
        <div className="text-center mb-6">
          {timeLeft.expired ? (
            <p className="text-red-400 text-[16px] font-semibold">⛔️ This link has expired.</p>
          ) : (
            <p className="text-red-400 text-[16px] font-medium">
              🔒 This link expires in: <span className="font-bold">
                {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
              </span>
            </p>
          )}
        </div>

        {/* Heading & Description */}
        {isMobile ? (
          <div>
            <h2 className={styles.sectionHeadText}>StackSync Submission</h2>
          </div>
        ) : (
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>StackSync Submission</h2>
          </motion.div>
        )}

        {isMobile ? (
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Task: Build a secure cloud API that executes Python scripts and returns the output of a `main()` function while sandboxing unsafe behavior using nsjail. The service uses Flask, supports JSON input, and is containerized with a lightweight Docker image and deployed on Google Cloud Run.
          </p>
        ) : (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Task: Build a secure cloud API that executes Python scripts and returns the output of a `main()` function while sandboxing unsafe behavior using nsjail. The service uses Flask, supports JSON input, and is containerized with a lightweight Docker image and deployed on Google Cloud Run.
          </motion.p>
        )}

        {/* Cards */}
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {stacksyncCards.map((card, index) => (
            <ServiceCard key={card.title} index={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(StackSync, "stacksync");
