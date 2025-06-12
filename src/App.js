import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// --- Particles Background Component ---
// This component creates the animated background effect.
const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Initializes the tsParticles engine
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#111827", // Matches the bg-gray-900 color
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#22d3ee", // Matches the cyan-400 color
      },
      links: {
        color: "#6b7280", // gray-500
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, // Number of particles
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};


// --- Main App Component ---
const App = () => {
  // Data from your resume
  const portfolioData = {
    name: "Riwaz Udas",
    title: "Software Developer",
    email: "udasriwaz@gmail.com",
    linkedin: "https://linkedin.com/in/riwaz-udas-7aab521b1/",
    github: "https://github.com/riwazudas",
    about:
      "Highly skilled technical professional with a solid foundation in computer science and engineering, bolstered by work at a startup company, Byjus, in Bangalore, India, where vital skills in handling projects, optimization approaches, and effective communication were acquired. With a bachelor's degree in Technology in Computer Science and Engineering from Vellore Institute of Technology, proficiency in mastering cutting-edge technologies and delivering project solutions is demonstrated. Capable of doing detailed analysis to find critical insights and optimization opportunities, resulting in improved operations and overall efficiency. With great communication skills, adept at promoting collaboration and forging agreement within cross-functional teams, as well as negotiating solutions to overcome obstacles and achieve project goals. Demonstrating good coordination skills, including ability to orchestrate work across multiple teams to guarantee project goal and timeline alignment. An innovative thinker noted for envisioning and inventing innovative approaches tackling complicated challenges with creativity and precision. Committed to continuous growth and development, constantly exploring new technologies and methodologies to stay at forefront of field of CS. With a sharp eye for innovation and a commitment to excellence, well-positioned to make substantial contributions to rapidly evolving field of computer science and engineering.",
    experience: [
      {
        role: "Member of Technical Staff-1",
        company: "Byjus",
        date: "Oct 2023 - Jan 2024",
        description: [
          "Transitioned from an internship to a full-time role with extended responsibilities, including handling entire projects within a two-person team.",
          "Acted as point of contact for addressing production issues, communicating with various teams to resolve issues promptly; handled over 10 critical issues caused by mishandled error from other micro-services.",
          "Optimized AWS to reduce costs for identity micro-service, contributing to overall operational efficiency.",
          "Restructured code base to facilitate interface-based builds, easing testing processes, and increasing system robustness; wrote over 200 test cases for more than 30 apis part of identity system.",
        ],
      },
      {
        role: "Intern Engineering",
        company: "Byjus",
        date: "Jan 2023 - Sep 2023",
        description: [
          "Began as an intern at Byjus, part of an eight-person Core Platform team, assisted senior developers on developing identity micro-services and revamping systems for improved performance.",
          "Collaborated with cross-functional teams to monitor systems and introduced a reliable OTP-based login system for over 10 vertical systems.",
          "Developed an identity platform using Golang based code base for OAuth 2.0 flow, enhancing, and maintaining login authorization and authentication across all Byjus systems.",
          "Incorporated Grafana and Prometheus to implement a comprehensive monitoring system, assessing state of active systems. Configured 15 alerts to warn developers of impending crises.",
        ],
      },
    ],
    projects: [
      {
        title: "Sentiment Analysis for Restaurant Reviews",
        description: "Fine-tuned a BERT model to analyse and classify sentiment in restaurant review texts.",
        tags: ["Machine Learning", "NLP", "BERT"],
        link: "#", // Add link to your project
      },
      {
        title: "Block Stack Stability Prediction",
        description: "Developed a stability prediction model for block stacks using a fine-tuned InceptionResNet.",
        tags: ["Machine Learning", "Computer Vision", "InceptionResNet"],
        link: "#",
      },
      {
        title: "Reinforcement Learning Game Bot",
        description: "Built bots for Splendor and Pac-Man utilizing reinforcement learning algorithms.",
        tags: ["Reinforcement Learning", "AI", "Game Development"],
        link: "#",
      },
      {
        title: "Decentralized E-Voting System",
        description: "Developed a secure decentralized electronic voting system leveraging Ethereum smart contracts, ensuring transparency and tamper-proof voting.",
        tags: ["Blockchain", "Ethereum", "Smart Contracts"],
        link: "#",
      },
    ],
    skills: [
      "C", "C++", "Java", "Python", "GoLang", "JavaScript", "PHP", "MySQL", "MongoDB",
      "Visual Basic", "CSS", "HTML", "PostGreSQL", "React", "Node.js", "Docker", "Kubernetes", "AWS"
    ],
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans leading-relaxed relative">
      <ParticlesBackground />
      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-24"
        >
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{portfolioData.name}</h1>
            <h2 className="text-xl md:text-2xl text-cyan-400">{portfolioData.title}</h2>
          </div>
          <div className="flex space-x-4">
            <motion.a href={portfolioData.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Github className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
            <motion.a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Linkedin className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
            <motion.a href={`mailto:${portfolioData.email}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Mail className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
          </div>
        </motion.header>

        {/* About Section */}
        <motion.section {...sectionAnimation} id="about" className="mb-16 md:mb-24 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-6 border-b-2 border-cyan-400 pb-2 inline-block">About Me</h3>
          <p className="text-lg text-gray-300">{portfolioData.about}</p>
        </motion.section>

        {/* Experience Section */}
        <motion.section {...sectionAnimation} id="experience" className="mb-16 md:mb-24">
          <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-400 pb-2 inline-block">Experience</h3>
          <div className="space-y-12">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-gray-700 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 top-8"></div>
                <h4 className="text-2xl font-semibold text-cyan-400 mb-1">{job.role}</h4>
                <p className="text-lg text-gray-400 mb-2">{job.company} | {job.date}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section {...sectionAnimation} id="projects" className="mb-16 md:mb-24">
          <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-400 pb-2 inline-block">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-700 text-cyan-400 text-sm font-semibold px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold mt-auto flex items-center">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section {...sectionAnimation} id="skills" className="mb-16 md:mb-24 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-400 pb-2 inline-block">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-cyan-500 hover:text-gray-900 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section {...sectionAnimation} id="contact" className="text-center bg-gray-900 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
          <motion.a
            href={`mailto:${portfolioData.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center text-lg hover:bg-cyan-400 transition-colors shadow-lg"
          >
            Say Hello <ArrowRight className="ml-2" />
          </motion.a>
        </motion.section>

        {/* Footer */}
        <footer className="text-center text-gray-500 mt-16 md:mt-24">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
