import {
    mobile,
    backend,
    creator,
    web,
    roomiehub,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    vamsi,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    amazon,
    verzeo,
    tcs,
    covid,
    health,
    reactwebsite,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Ex-SWE at Amazon, TCS",
      icon: web,
    },
    {
      title: "Specialization in Full Stack",
      icon: mobile,
    },
    {
      title: "Mastery in Computer Science!",
      icon: backend,
    },
    {
      title: "Now - Full Stack Developer (StartUp)",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
   {
      title: "Software Engineer (Full Stack)",
      company_name: "RoomieHub, LLC | Phoenix, United States",
      icon: roomiehub,
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
      "Involved in development of 2 primary modules: User Profile Navigation and Progress Tracking utilizing React Native, AWS, and Redux.",
      "Deployed User Profile module and its components enhancing state management using Redux.",
      "Created 4 intuitive navigation components for User Profile dashboard employing React Navigation.",
      "Developed home screen and birthday functionalities, supporting image uploads up to 10 MB.",

      ],
    },
    {
      title: "AWS Software Developer",
      company_name: "Amazon (Contract) | Hyderabad, India",
      icon: amazon,
      iconBg: "#E6DEDD",
      date: "December 2021 - July 2023",
      points: [
        "Created a Low Code-No-Code environment, developed 50+ AWS APIs and respective backend services leveraging Java & C++.",
        "Initiated and monitored real-time data ingestion by deploying AWS Kinesis, handling up to 10,000 events per minute.",
        "Produced Subscription Notification Service (SNS) with AWS SQS & Lambda managing over 4000 notifications daily.",
        "Presented 3 SNS topics acting as access points for subscribers to receive message notifications on selected subjects in AWS.",
        "Spearheaded development of an AWS application to analyze over 1000 PDF documents daily using the AWS Textract service.",  
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Tata Consultancy Services | Hyderabad, India",
      icon: tcs,
      iconBg: "#383E56",
      date: "October 2021 - July 2023",
      points: [
        "Reduced response times from 500ms to 300ms for User Authentication micro-service improving performance and stability.",
        "Earned “On-the-Spot” for mitigating application-level bugs by 12% through strategic code refactoring initiatives.",
        "Acquired expertise in Java and Analytics, leading to proficient software development and data-driven insights.",
       ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Verzeo | Hyderabad, India",
      icon: verzeo,
      iconBg: "#E6DEDD",
      date: "June 2019 - November 2019",
      points: [
        "Utilized Azure Cache for Redis to build an E-commerce solution, for an online store to decrease load times by 5 seconds.",
        "Implemented real-time inventory management for 40,000+ products with Azure functions to drop stock-outs by 800 annually.",
        ],
    },
    
  ];
  
  const testimonials = [
    { trophyHeading :"Awards",
      testimonial: "Collaborating with Noel has been both fun and learning. Besides being a great team player, he is quick at adapting to new technologies.",
      name: "Vamsi Manyam",
      
      designation: "SDE 2",
      company: "Amazon",
      image: vamsi,

      linkedin_link: 'https://www.linkedin.com/in/vamsi-manyam-816792134/',
    },
    {
      trophyHeading :"Skills",
      testimonial:"",
  //      "Java, C/C++, Python, Swift, Objective-C, JavaScript, HTML, CSS, AWS, ReactJS, NodeJS, ExpressJS, React Native.",
      name: "",//"Chris Brown",
      designation: "",//"COO",
      company:"",// "DEF Corp",
      image:"",// "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      trophyHeading :"Certifications",
      testimonial:"",// "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name:"",// "Lisa Wang",
      designation: "",//"CTO",
      company: "",//"456 Enterprises",
      image: "",//"https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  
  const projects = [
    {
      name: "Covid Detection Using Machine Learning",
      description:
        "A Deep Learning model developed using CNN (VGG-16) for detecting Covid-19 from chest X-rays, achieving top recognition among 48 undergrad projects. Trained the model over 160 epochs and achieved 86% accuracy.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pyTorch",
          color: "green-text-gradient",
        },
        {
          name: "ConvolutionNeuralNetworks",
          color: "pink-text-gradient",
        },
      ],
      image: covid,
      source_code_link: "https://github.com/",
    },
    {
      name: "Context Monitoring Application",
      description:
        "Created 'MindFul Life', an Android app to track vital signs like heart and respiratory rates by leveraging flash-enabled video and accelerometer sensors for accurate vital sign measurement, storing data securely on the user's smartphone.",
      tags: [
        {
          name: "AndroidStudio",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: health,
      source_code_link: "https://github.com/jangamnoelpaulmoses/Context-Aware-Application",
    },
    {
      name: "Personal Portfolio Website",
      description:
        "Designed and developed a personal portfolio website to highlight my skills, experience, and projects. The site features dynamic animations, transitions, responsive design, and my favourite 3D models presenting a seamless user experience.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "framer",
          color: "pink-text-gradient",
        },
        {
          name: "threeJS",
          color: "green-text-gradient",
        },
        {
          name: "framer",
          color: "pink-text-gradient",
        },
      ],
      image: reactwebsite,
      source_code_link: "https://noelpaulmoses.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };