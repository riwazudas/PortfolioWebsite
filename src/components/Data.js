const portfolioData = {
    name: "Riwaz Udas",
    title: "Software Developer",
    email: "udasriwaz@gmail.com",
    linkedin: "https://linkedin.com/in/riwaz-udas-7aab521b1/",
    github: "https://github.com/riwazudas",
    about:
      "Highly skilled technical professional with a solid foundation in computer science and engineering, bolstered by work at a startup company, Byjus, in Bangalore, India, where vital skills in handling projects, optimization approaches, and effective communication were acquired. With a bachelor's degree in Technology in Computer Science and Engineering from Vellore Institute of Technology, proficiency in mastering cutting-edge technologies and delivering project solutions is demonstrated...", // Truncated for brevity
    experience: [
      {
        role: "Member of Technical Staff-1",
        company: "Byjus",
        date: "Oct 2023 - Jan 2024",
        description: [
          "Transitioned from an internship to a full-time role with extended responsibilities...",
          "Acted as point of contact for addressing production issues...",
          "Optimized AWS to reduce costs for identity micro-service...",
          "Restructured code base to facilitate interface-based builds...",
        ],
      },
      {
        role: "Intern Engineering",
        company: "Byjus",
        date: "Jan 2023 - Sep 2023",
        description: [
          "Began as an intern at Byjus, part of an eight-person Core Platform team...",
          "Collaborated with cross-functional teams to monitor systems...",
          "Developed an identity platform using Golang...",
          "Incorporated Grafana and Prometheus to implement a comprehensive monitoring system...",
        ],
      },
    ],
    projects: [
      {
        title: "Sentiment Analysis for Restaurant Reviews",
        description: "Fine-tuned a BERT model to analyse and classify sentiment in restaurant review texts.",
        tags: ["Machine Learning", "NLP", "BERT"],
        link: "#",
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
        description: "Developed a secure decentralized electronic voting system leveraging Ethereum smart contracts.",
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

export { portfolioData, sectionAnimation };
