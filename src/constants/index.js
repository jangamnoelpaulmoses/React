import {
    mobile,
    backend,
    creator,
    web,
    roomiehub,
    naviget,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    vamsi,
    enrique,
    shefali,
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
      title: "Ex-SWE at TCS, Amazon",
      icon: web,
    },
    {
      title: "Full Stack Specialization",
      icon: mobile,
    },
    {
      title: "Master's in Computer Science, ASU",
      icon: backend,
    },
    {
      title: "Present - Software Engineer @ Naviget",
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
      title: "Founding Full Stack Developer",
      company_name: "Naviget | San Jose, United States",
      icon: naviget,
      iconBg: "#000000",
      date: "February 2025 - Present",
      points: [
        "Building Naviget’s medical imaging platform using AWS, Next.js, and Supabase for scalable, secure processing.",
        "Developed an AI-powered video slider feature that enables real-time comparison of MRI scans, enhancing patient understanding and diagnostic accuracy with interactive before-and-after overlays.",
        "Developing a cloud-based medical DICOM files upload system using AWS S3 and Lambda to handle 500+ image uploads daily.",
      ],
    },
    
    {
      title: "Software Engineer (Full Stack)",
      company_name: "RoomieHub, LLC | Phoenix, United States",
      icon: roomiehub,
      iconBg: "#383E56",
      date: "June 2024 - November 2024",
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
    {
      trophyHeading :"Skills",
      testimonial:"Noel's willingness to take on tasks with complex code issues and successfully deliver them makes him a standout developer.",
      name: "Enrique Melendez",
      designation: "Founder",
      company:"RoomieHub, LLC",
      image: enrique,
      
      linkedin_link: 'https://www.linkedin.com/in/enrique-caceres-melendez-331489151/',
    },
    { trophyHeading :"Awards",
      testimonial: "Collaborating with Noel has been both fun and learning. Besides being a great team player, he is quick at adapting to new technologies.",
      name: "Vamsi Manyam",
      
      designation: "Software Development Engineer-2",
      company: "Amazon",
      image: vamsi,

      linkedin_link: 'https://www.linkedin.com/in/vamsi-manyam-816792134/',
    },

    {
      trophyHeading :"Certifications",
      testimonial: "Noel was our team's point of contact anything related to the front end and its integerations for our ML and Web based project.",
      name:"Shefali Saini",// "Lisa Wang",
      designation: "System Development Engineer",//"CTO",
      company: "Amazon",//"456 Enterprises",
      image: shefali,//"https://randomuser.me/api/portraits/women/6.jpg",
      linkedin_link: 'https://www.linkedin.com/in/shefali-saini-5a056617b/',
    },
  ];

  
  const projects = [
    {
      name: "HireHack.ai Chrome Extension",
      description:
        "Developed a smart Chrome extension that automates job applications on LinkedIn. It detects Easy Apply jobs, auto-fills forms, manages application flow, and enables users to apply to 50+ jobs in minutes with minimal input.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "ChromeExtension",
          color: "pink-text-gradient",
        },
      ],
      image: "/extension.png", // Replace with the correct image import
      source_code_link: "https://chromewebstore.google.com/detail/hirehack-ai/pgjgjjkabhhjkaiaeofjfdelplcablbj",
      useExternalLinkIcon: true,
      
    },
    {
      name: "HireHack.ai Personalized Dashboard",
      description:
        "Built a full-stack dashboard for HireHack Ai to track usage, job stats, and form preferences. Integrated subscription handling, secure auth, user feedback, and resume analysis using PostgreSQL, Supabase, and Vercel.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: "dashboard.png", // Replace with the correct image import
     source_code_link: "https://app.hirehack.ai", // or repo if public
     useExternalLinkIcon: true,
    },
    
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