import * as simpleIcons from 'simple-icons/icons';

const getSimpleIconSvg = (iconName) => {
    const icon = simpleIcons[iconName];
    if (icon) {
        return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#${icon.hex}"><title>${icon.title}</title><path d="${icon.path}"/></svg>`;
    }
    // Return an empty string or a placeholder SVG if the icon is not found
    console.warn(`Icon "${iconName}" not found in simple-icons.`);
    return '';
};

const portfolioData = {
  firstName: "Riwaz",
  lastName: "Udas",
  name: "Riwaz Udas",
  title: "Software Developer",
  email: "udasriwaz@gmail.com",
  linkedin: "https://linkedin.com/in/riwaz-udas-7aab521b1/",
  github: "https://github.com/riwazudas",
  resumeUrl: "/Resume.pdf",
  about:
    "Highly skilled technical professional with a solid foundation in computer science and engineering, bolstered by work at a startup company, Byjus, in Bangalore, India, where vital skills in handling projects, optimization approaches, and effective communication were acquired. With a bachelor's degree in Technology in Computer Science and Engineering from Vellore Institute of Technology, proficiency in mastering cutting-edge technologies and delivering project solutions is demonstrated.",
  aboutMore:
    "I'm passionate about building scalable and efficient software solutions. My experience ranges from backend development with GoLang and Node.js to architecting systems on AWS. I thrive in collaborative environments and am always eager to learn new technologies and tackle complex challenges.",
  experience: [
    {
      role: "Member of Technical Staff-1",
      company: "Byjus",
      date: "Oct 2023 - Jan 2024",
      description: [
        "Transitioned from an internship to a full-time role with extended responsibilities.",
        "Acted as point of contact for addressing production issues.",
        "Optimized AWS to reduce costs for identity micro-service.",
      ],
    },
    {
      role: "Intern Engineering",
      company: "Byjus",
      date: "Jan 2023 - Sep 2023",
      description: [
        "Began as an intern at Byjus, part of an eight-person Core Platform team.",
        "Collaborated with cross-functional teams to monitor systems.",
        "Developed an identity platform using Golang based code base.",
      ],
    },
  ],
  projects: [
    {
      title: "Sentiment Analysis for Restaurant Reviews",
      description: "A responsive user interface for interacting with a sentiment analysis model using BERT. Users can input text and view the sentiment prediction, enhancing the usability of the backend model.",
      tags: ["React", "Vite", "JavaScript", "CSS", "Frontend","Machine Learning", "NLP", "BERT", "Python", "PyTorch"],
      website: "https://sentiment-analysis-c0245.web.app/",
      link: "https://github.com/riwazudas/SentimentAnalysisFrontend",
      image: "https://raw.githubusercontent.com/riwazudas/SentimentAnalysisFrontend/main/screenshot.png"
    },
    {
      title: "E-Scooter Traffic Simulation",
      description: "A microscopic traffic simulation modeling the movement of E-Scooters in an urban environment. This project utilizes SUMO (Simulation of Urban MObility) to analyze traffic flow and patterns.",
      tags: ["Python", "Simulation", "XML", "Netlogo","Research"],
      link: "https://github.com/dnelfhmi/E-ScooterTrafficSim",
      image: "https://raw.githubusercontent.com/dnelfhmi/E-ScooterTrafficSim/main/sim.gif"
    },
    {
      title: "Distributed Whiteboard",
      description: "A real-time collaborative whiteboard application that allows multiple users to draw and communicate simultaneously. The system is built using Java RMI for distributed communication.",
      tags: ["Java", "RMI", "Swing", "Networking", "Distributed Systems","Socket Programming"],
      link: "https://github.com/riwazudas/Distributed-WhiteBoard",
      image: "https://raw.githubusercontent.com/riwazudas/Distributed-WhiteBoard/main/board.png"
    },
    {
      title: "Stereo Image Disparity Computation",
      description: "An implementation of an algorithm to compute the disparity map from a pair of stereo images. This is a fundamental concept in computer vision for depth perception.",
      tags: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      link: "https://github.com/riwazudas/Computing-disparity-between-stereo-images",
      image: "https://raw.githubusercontent.com/riwazudas/Computing-disparity-between-stereo-images/main/disparity_map.png"
    },
    {
      title: "Client-Server Dictionary",
      description: "A multi-threaded dictionary server that allows multiple clients to connect, look up words, and add new definitions concurrently. The application features a graphical user interface for clients.",
      tags: ["Java", "Sockets", "GUI", "Multithreading", "Networking"],
      link: "https://github.com/riwazudas/Client-Server-Dictionary/",
      image: "https://raw.githubusercontent.com/riwazudas/Client-Server-Dictionary/main/client.png"
    },
    {
      title: "AdGuessr - Video Ad Guessing Game",
      description:
        "Developed a web-based game where players watch cropped ad videos and guess the product using multiple-choice options. Built with React and Firebase.",
      tags: ["React", "Firebase", "JavaScript", "Game", "Video"],
      link: "https://github.com/riwazudas/adguessr",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=AdGuessr+Game",
  }

  ],
  skills: [
      { name: "Go", icon: getSimpleIconSvg('siGo') },
      { name: "Python", icon: getSimpleIconSvg('siPython') },
      { name: "JavaScript", icon: getSimpleIconSvg('siJavascript') },
      { name: "Google Cloud", icon: getSimpleIconSvg('siGoogleCloud') },
      { name: "React", icon: getSimpleIconSvg('siReact') },
      { name: "Node.js", icon: getSimpleIconSvg('siNodedotjs') }, 
      { name: "PostgreSQL", icon: getSimpleIconSvg('siPostgresql') },
      { name: "MongoDB", icon: getSimpleIconSvg('siMongodb') },
      { name: "Docker", icon: getSimpleIconSvg('siDocker') },
      { name: "AWS", icon: getSimpleIconSvg('') }, 
      { name: "Java", icon: getSimpleIconSvg('') },
      { name: "Git", icon: getSimpleIconSvg('siGit') },
      { name: "Agile", icon: getSimpleIconSvg('siAgile') },
      { name: "Machine Learning", icon: getSimpleIconSvg('siMachineLearning') },
      { name: "Computer Vision", icon: getSimpleIconSvg('siComputerVision') },
      { name: "C++", icon: getSimpleIconSvg('siCplusplus') },
      { name: "HTML", icon: getSimpleIconSvg('siHtml5') },
      { name: "CSS", icon: getSimpleIconSvg('siCss3') },
      { name: "SQL", icon: getSimpleIconSvg('siMysql') },
      { name: "Redis", icon: getSimpleIconSvg('siRedis') },
      { name: "REST APIs", icon: getSimpleIconSvg('siRestapi') },

  ],
  certifications: [
    {
      name: "Algorithmically Thinking",
      authority: "Rice University via Coursera",
    },
    {
      name: "Artificial Intelligence Foundation",
      authority: "SKILL UP - NASSCOM",
    },
    { name: "Big Data Foundation", authority: "IT-ITES SSC - NASSCOM" },
    { name: "Kotlin for Java Developers", authority: "Jet Brains on Coursera" },
    { name: "Figma for UX Design", authority: "Coursera" },
    { name: "Top 6 Finalist", authority: "Bupa Empower to Employ 2024" },
  ],
};

export { portfolioData };
