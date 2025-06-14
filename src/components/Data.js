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
      description:
        "Fine-tuned a BERT model to analyse and classify sentiment in restaurant review texts, achieving high accuracy in understanding user feedback.",
      tags: ["Machine Learning", "NLP", "BERT", "Python", "PyTorch"],
      link: "https://github.com/riwazudas",
      image:
        "https://placehold.co/600x400/1e293b/94a3b8?text=Sentiment+Analysis",
    },
    {
      title: "Decentralized E-Voting System",
      description:
        "Developed a secure decentralized electronic voting system leveraging Ethereum smart contracts, ensuring transparency and tamper-proof voting.",
      tags: ["Blockchain", "Ethereum", "Solidity", "React", "Web3.js"],
      link: "https://github.com/riwazudas",
      image: "https://placehold.co/600x400/1e293b/94a3b8?text=E-Voting+System",
    },
  ],
  skills: [
      { name: "Go", icon: getSimpleIconSvg('siGo') },
      { name: "Python", icon: getSimpleIconSvg('siPython') },
      { name: "JavaScript", icon: getSimpleIconSvg('siJavascript') },
      { name: "TypeScript", icon: getSimpleIconSvg('siTypescript') },
      { name: "React", icon: getSimpleIconSvg('siReact') },
      { name: "Node.js", icon: getSimpleIconSvg('siNodedotjs') }, // Corrected for Node.js
      { name: "PostgreSQL", icon: getSimpleIconSvg('siPostgresql') },
      { name: "MongoDB", icon: getSimpleIconSvg('siMongodb') },
      { name: "Docker", icon: getSimpleIconSvg('siDocker') },
      { name: "Kubernetes", icon: getSimpleIconSvg('siKubernetes') },
      { name: "AWS", icon: getSimpleIconSvg('siAmazonaws') }, // Corrected for AWS
      { name: "Terraform", icon: getSimpleIconSvg('siTerraform') },
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
