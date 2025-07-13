import goLogo from "../assets/logos/go.svg";
import pythonLogo from "../assets/logos/python.svg";
import reactLogo from "../assets/logos/react.svg";
import nodeLogo from "../assets/logos/node.svg";
import mongodbLogo from "../assets/logos/mongodb.svg";
import postgresLogo from "../assets/logos/postgres.svg";
import javaLogo from "../assets/logos/java.svg";
import jsLogo from "../assets/logos/js.svg";
import gcpLogo from "../assets/logos/gcp.svg";
import awsLogo from "../assets/logos/aws.svg";
import redisLogo from "../assets/logos/redis.svg";
import dockerLogo from "../assets/logos/docker.svg";
import gitLogo from "../assets/logos/git.svg";
import cssLogo from "../assets/logos/css.svg";
import htmlLogo from "../assets/logos/html.svg";
import phpLogo from "../assets/logos/php.svg";
import firebaseLogo from "../assets/logos/firebase.svg";
import jiraLogo from "../assets/logos/jira.svg";
import mlLogo from "../assets/logos/ml.svg";
import cvLogo from "../assets/logos/cv.svg";
import apiLogo from "../assets/logos/api.svg";
import cLogo from "../assets/logos/c.svg";
import nlpLogo from "../assets/logos/nlp.svg";

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
      company: "Byjus(Intern)",
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
        "https://raw.githubusercontent.com/riwazudas/SentimentAnalysisFrontend/1f59e322e32e600199196093e1d187527a5b3e19/SentimentAnalysis.png",
    },
    {
      title: "E-Scooter Traffic Simulation",
      description:
        "A microscopic traffic simulation modeling the movement of E-Scooters in an urban environment. This project utilizes SUMO (Simulation of Urban MObility) to analyze traffic flow and patterns.",
      tags: ["Python", "Simulation", "XML", "Netlogo", "Research"],
      link: "https://github.com/dnelfhmi/E-ScooterTrafficSim",
      image:
        "https://raw.githubusercontent.com/dnelfhmi/e-scooter-traffic-sim/refs/heads/main/E-scooterTraffic%20Simulation%20Sample%20Image.png",
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
    { name: "Python", icon: pythonLogo },
    { name: "JavaScript", icon: jsLogo },
    { name: "Google Cloud", icon: gcpLogo },
    { name: "React", icon: reactLogo },
    { name: "Node.js", icon: nodeLogo },
    { name: "PostgreSQL", icon: postgresLogo },
    { name: "MongoDB", icon: mongodbLogo },
    { name: "Docker", icon: dockerLogo },
    { name: "AWS", icon: awsLogo},
    { name: "Java", icon: javaLogo },
    { name: "Git", icon: gitLogo },
    { name: "Machine Learning", icon: mlLogo },
    { name: "Computer Vision", icon: cvLogo },
    { name: "C++", icon: cLogo },
    { name: "HTML", icon: htmlLogo },
    { name: "CSS", icon: cssLogo },
    { name: "Redis", icon: redisLogo },
    { name: "REST APIs", icon: apiLogo },
    { name: "php", icon: phpLogo },
    { name: "Firebase", icon: firebaseLogo },
    { name: "Jira", icon: jiraLogo },
    { name: "Natural Language Processing", icon: nlpLogo },
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
    {}
  ],
};

export { portfolioData };
