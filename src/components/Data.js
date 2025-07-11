import goLogo from "../assets/logos/go.svg";

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
    "Software developer with a strong foundation in computer science and engineering, shaped by hands-on experience at Byjus and academic training at Vellore Institute of Technology. Passionate about building intelligent systems at scale using AI, NLP, computer vision, and cloud technologies.",
  aboutMore:
    "My interests lie at the intersection of artificial intelligence and real-world autonomy — exploring how models in NLP, computer vision, and decision-making can work together to create smarter systems. I've built scalable backend architectures using Golang and Java Spring Boot, deployed on AWS, and contributed to production-ready services with performance and cost optimizations. I enjoy working across the stack, from infrastructure to ML applications, and thrive in collaborative environments that value learning and innovation.",
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
    {
      role: "Research Intern",
      company: "Quantum AI Cloud (University of Melbourne)",
      date: "Jul 2024 - Sep 2024",
      description: [
        "Led the AIQC team under the guidance of Hoa Nguyen to explore AI models in quantum cloud computing environments.",
        "Built and evaluated deep reinforcement learning algorithms for intelligent task scheduling on quantum cloud infrastructure.",
        "Implemented and compared advanced RL methods including A2C, PPO, SAC, and IMPALA for quantum task placement.",
        "Gained hands-on experience with quantum computing platforms and hybrid cloud orchestration tools.",
      ],
    },
  ],
  projects: [
    {
      title: "Sentiment Analysis for Restaurant Reviews",
      description:
        "A responsive user interface for interacting with a sentiment analysis model using BERT. Users can input text and view the sentiment prediction, enhancing the usability of the backend model.",
      tags: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
        "Frontend",
        "Machine Learning",
        "NLP",
        "BERT",
        "Python",
        "PyTorch",
      ],
      website: "https://sentiment-analysis-c0245.web.app/",
      link: "https://github.com/riwazudas/SentimentAnalysisFrontend",
      image:
        "https://raw.githubusercontent.com/riwazudas/SentimentAnalysisFrontend/main/screenshot.png",
    },
    {
      title: "E-Scooter Traffic Simulation",
      description:
        "A microscopic traffic simulation modeling the movement of E-Scooters in an urban environment. This project utilizes SUMO (Simulation of Urban MObility) to analyze traffic flow and patterns.",
      tags: ["Python", "Simulation", "XML", "Netlogo", "Research"],
      link: "https://github.com/dnelfhmi/E-ScooterTrafficSim",
      image:
        "https://raw.githubusercontent.com/dnelfhmi/E-ScooterTrafficSim/main/sim.gif",
    },
    {
      title: "Distributed Whiteboard",
      description:
        "A real-time collaborative whiteboard application that allows multiple users to draw and communicate simultaneously. The system is built using Java RMI for distributed communication.",
      tags: [
        "Java",
        "RMI",
        "Swing",
        "Networking",
        "Distributed Systems",
        "Socket Programming",
      ],
      link: "https://github.com/riwazudas/Distributed-WhiteBoard",
      image:
        "https://raw.githubusercontent.com/riwazudas/Distributed-WhiteBoard/main/board.png",
    },
    {
      title: "Stereo Image Disparity Computation",
      description:
        "An implementation of an algorithm to compute the disparity map from a pair of stereo images. This is a fundamental concept in computer vision for depth perception.",
      tags: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      link: "https://github.com/riwazudas/Computing-disparity-between-stereo-images",
      image:
        "https://raw.githubusercontent.com/riwazudas/Computing-disparity-between-stereo-images/main/disparity_map.png",
    },
    {
      title: "Client-Server Dictionary",
      description:
        "A multi-threaded dictionary server that allows multiple clients to connect, look up words, and add new definitions concurrently. The application features a graphical user interface for clients.",
      tags: ["Java", "Sockets", "GUI", "Multithreading", "Networking"],
      link: "https://github.com/riwazudas/Client-Server-Dictionary/",
      image:
        "https://raw.githubusercontent.com/riwazudas/Client-Server-Dictionary/main/client.png",
    },
    {
      title: "AdGuessr - Video Ad Guessing Game",
      description:
        "Developed a web-based game where players watch cropped ad videos and guess the product using multiple-choice options. Built with React and Firebase.",
      tags: ["React", "Firebase", "JavaScript", "Game", "Video"],
      link: "https://github.com/riwazudas/adguessr",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=AdGuessr+Game",
      website: "https://adguessr-61019.web.app",
    },
  ],
  skills: [
    { name: "Go", icon: goLogo  },
    { name: "Python", icon: "/PortfolioWebsite/assets/logos/python.svg" },
    { name: "JavaScript", icon: "/PortfolioWebsite/assets/logos/javascript.svg" },
    { name: "Google Cloud", icon: "/PortfolioWebsite/assets/logos/google-cloud.svg" },
    { name: "React", icon: "/PortfolioWebsite/assets/logos/react.svg" },
    { name: "Node.js", icon: "/PortfolioWebsite/assets/logos/nodejs.svg" },
    { name: "PostgreSQL", icon: "/PortfolioWebsite/assets/logos/postgresql.svg" },
    { name: "MongoDB", icon: "/PortfolioWebsite/assets/logos/mongodb.svg" },
    { name: "Docker", icon: "/PortfolioWebsite/assets/logos/docker.svg" },
    { name: "AWS", icon: "/PortfolioWebsite/assets/logos/aws.svg" },
    { name: "Java", icon: "/PortfolioWebsite/assets/logos/java.svg" },
    { name: "Git", icon: "/PortfolioWebsite/assets/logos/git.svg" },
    { name: "Agile", icon: "/PortfolioWebsite/assets/logos/agile.svg" },
    { name: "Machine Learning", icon: "/PortfolioWebsite/assets/logos/machine-learning.svg" },
    { name: "Computer Vision", icon: "/PortfolioWebsite/assets/logos/computer-vision.svg" },
    { name: "C++", icon: "/PortfolioWebsite/assets/logos/cplusplus.svg" },
    { name: "HTML", icon: "/assPortfolioWebsite/assetsets/logos/html5.svg" },
    { name: "CSS", icon: "/PortfolioWebsite/assets/logos/css3.svg" },
    { name: "SQL", icon: "/PortfolioWebsite/assets/logos/mysql.svg" },
    { name: "Redis", icon: "/PortfolioWebsite/assets/logos/redis.svg" },
    { name: "REST APIs", icon: "/PortfolioWebsite/assets/logos/restapi.svg" },
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
