const portfolioData = {
    firstName:  "Riwaz",
    lastName: "Udas",
    name: "Riwaz Udas",
    title: "Software Developer",
    email: "udasriwaz@gmail.com",
    linkedin: "https://linkedin.com/in/riwaz-udas-7aab521b1/",
    github: "https://github.com/riwazudas",
    resumeUrl: "/Resume.pdf",
    about:
      "Highly skilled technical professional with a solid foundation in computer science and engineering, bolstered by work at a startup company, Byjus, in Bangalore, India, where vital skills in handling projects, optimization approaches, and effective communication were acquired. With a bachelor's degree in Technology in Computer Science and Engineering from Vellore Institute of Technology, proficiency in mastering cutting-edge technologies and delivering project solutions is demonstrated.",
    aboutMore: "I'm passionate about building scalable and efficient software solutions. My experience ranges from backend development with GoLang and Node.js to architecting systems on AWS. I thrive in collaborative environments and am always eager to learn new technologies and tackle complex challenges.",
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
        description: "Fine-tuned a BERT model to analyse and classify sentiment in restaurant review texts, achieving high accuracy in understanding user feedback.",
        tags: ["Machine Learning", "NLP", "BERT", "Python", "PyTorch"],
        link: "https://github.com/riwazudas",
        image: "https://placehold.co/600x400/1e293b/94a3b8?text=Sentiment+Analysis",
      },
      {
        title: "Decentralized E-Voting System",
        description: "Developed a secure decentralized electronic voting system leveraging Ethereum smart contracts, ensuring transparency and tamper-proof voting.",
        tags: ["Blockchain", "Ethereum", "Solidity", "React", "Web3.js"],
        link: "https://github.com/riwazudas",
        image: "https://placehold.co/600x400/1e293b/94a3b8?text=E-Voting+System",
      },
    ],
    skills: [
        { name: "Go", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M12.33.21l-3.237 6.474-6.32 6.322a.84.84 0 00.594 1.434h4.482L12 24l4.15-9.56h4.482a.84.84 0 00.594-1.434l-6.32-6.322L12.33.21z"/></svg>` },
        { name: "Python", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M23.22 10.08c-.7-.31-1.4-.46-2.14-.46-1.25 0-2.39.52-3.19 1.57V9.3c0-1.25-.52-2.39-1.57-3.19C15.53 5.32 14.39 4.8 13.14 4.8c-.85 0-1.6.22-2.27.68V3.19C10.87 2.4 10.35 1.25 9.3.45 8.5-.35 7.35-.13 6.8.62c-.55.75-.33 1.9.45 2.69V8.8c0 .85-.22 1.6-.68 2.27-1.05.8-2.69.58-3.48-.17s-.58-2.69.17-3.48c.18-.18.35-.33.55-.45h2.37C6.8 5.4 5.92 4.07 4.5 3.48c-1.42-.58-3.12.17-3.69 1.59S.98 8.19 2.4 8.77c.75.3 1.5.45 2.25.45 1.25 0 2.39-.52 3.19-1.57v1.88c0 1.25.52 2.39 1.57 3.19.8.8 1.85 1.25 3.03 1.25.85 0 1.6-.22 2.27-.68v2.27c0 1.25.52 2.39 1.57 3.19.8.8 1.85 1.25 3.03 1.25.85 0 1.6-.22 2.27-.68v2.27c0 .85.22 1.6.68 2.27.8.8 2.34.58 3.14-.22.8-.8.58-2.34-.22-3.14V14c0-.85.22-1.6.68-2.27.58-.75.33-1.9-.42-2.65zm-8.29 9.35c-.75 0-1.36-.61-1.36-1.36s.61-1.36 1.36-1.36 1.36.61 1.36 1.36-.61 1.36-1.36 1.36zm0-11.23c-.75 0-1.36-.61-1.36-1.36S14.18 5.4 14.93 5.4s1.36.61 1.36 1.36-.61 1.36-1.36 1.36z"/></svg>` },
        { name: "JavaScript", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.262c-.313 1.363-1.242 2.518-2.58 3.142-1.458.68-3.26.89-5.122.89-2.296 0-4.285-.51-5.965-1.532-1.68-1.02-2.88-2.593-3.6-4.71H8.72c.578 1.42 1.538 2.48 2.88 3.18 1.343.7 3.04.99 5.094.99 1.026 0 1.9-.155 2.625-.468.724-.313 1.132-.823 1.226-1.532.094-.71-.16-1.22-.76-1.533-1.782-.89-4.14-1.335-7.07-1.335-1.969 0-3.64.333-5.015 1H3.633c.12-.47.27-1.01.45-1.625l4.312-13.43h4.15L8.43 15.19c1.077.542 2.312.812 3.702.812 1.39 0 2.9-.197 4.546-.593.72-.172 1.243-.442 1.57-.81.328-.37.49-.81.49-1.32 0-.51-.152-.94-.457-1.29-.305-.35-.74-.61-1.305-.78-.565-.17-1.34-.3-2.325-.39-1.39-.12-2.57-.3-3.54-.54C7.72 9.4 6.94 8.78 6.38 7.9c-.56-.88-.84-1.9-.84-3.06 0-1.25.32-2.32 1-3.2C7.19.74 8.23.23 9.49 0c1.39.01 2.9.34 4.53.99 1.63.65 2.82 1.83 3.57 3.54h-3.92c-.44-1.03-.99-1.78-1.65-2.25-.66-.47-1.46-.7-2.39-.7-1.12 0-2.02.32-2.7.95-.68.63-1.02 1.5-1.02 2.61 0 .6.14 1.1.42 1.5.28.4.63.68.99.85.36.17.9.3 1.56.39.99.1 1.88.23 2.66.39 1.78.36 3.25.8 4.4 1.32.96.44 1.67 1.01 2.13 1.7.46.69.69 1.55.69 2.58z"/></svg>` },
        { name: "TypeScript", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M24 13.91H0v-3.82h24zm-12 5.37c3.84 0 6.27-1.43 7.55-2.8l-2.61-2.61c-.99.99-2.18 1.8-4.94 1.8-2.76 0-4.4-1.2-4.93-2.14h15.1v-1.11H1.83v1.11h.99c.53-.94 2.17-2.14 4.93-2.14 2.76 0 3.95.81 4.94 1.8l2.61-2.61C18.27 6.14 15.84 4.71 12 4.71c-3.84 0-6.27 1.43-7.55 2.8L7.06 10.1c.99-.99 2.18-1.8 4.94-1.8 2.76 0 4.4 1.2 4.93 2.14H1.83v1.11h20.34v-1.11h-.99c-.53.94-2.17 2.14-4.93 2.14-2.76 0-3.95-.81-4.94-1.8L7.06 14.9c1.28 1.37 3.71 2.8 7.55 2.8l-.61.61z"/></svg>` },
        { name: "React", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.29-8.71a.996.996 0 011.41 0L12 13.17l3.88-3.88a.996.996 0 111.41 1.41L13.41 14l3.88 3.88a.996.996 0 11-1.41 1.41L12 15.83l-3.88 3.88a.996.996 0 11-1.41-1.41L10.59 14 6.71 10.12a.996.996 0 010-1.41z"/></svg>` },
        { name: "Node.js", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M20.25 2.25h-16.5A1.5 1.5 0 002.25 3.75v16.5A1.5 1.5 0 003.75 21.75h16.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zm-1.5 16.5h-2.25v-3.75h2.25zm0-6h-2.25v-3.75h2.25zM12 18.75h-2.25v-3.75H12zm0-6h-2.25v-3.75H12zm0-6h-2.25V3h2.25zM7.5 18.75H5.25v-3.75H7.5zm0-6H5.25v-3.75H7.5z"/></svg>` },
        { name: "PostgreSQL", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-5H7v5H5V7h6v10zm2-10h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z"/></svg>` },
        { name: "MongoDB", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M12.001 2.25A9.75 9.75 0 002.25 12a9.75 9.75 0 0015.405 7.994l-2.062-3.57a5.25 5.25 0 01-8.526-4.92l3.427-5.936A5.234 5.234 0 0112.001 2.25zm0 19.5a9.75 9.75 0 008.358-4.735l-2.062-3.57A5.25 5.25 0 0112 18.75a5.25 5.25 0 01-5.182-3.75H12a.75.75 0 000-1.5H6.818a5.25 5.25 0 015.183-3.75c1.47 0 2.8.614 3.75 1.595l2.062-3.57A9.75 9.75 0 0012.001 2.25z"/></svg>` },
        { name: "Docker", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M21.93 9.38c-.33-1.07-1.12-2.08-2.2-2.73-1.08-.65-2.35-.97-3.64-.97H3.69c-.6 0-1.1.5-1.1 1.1v9.44c0 .6.5 1.1 1.1 1.1h13.08c1.33 0 2.61-.34 3.73-1.01 1.13-.67 1.95-1.7 2.3-2.88.35-1.18.35-2.45 0-3.63zM7.5 12.81H5.75v-1.62H7.5zm2.81 0h-1.75v-1.62h1.75zm2.82 0h-1.75v-1.62h1.75zm2.81 0h-1.75v-1.62h1.75z"/></svg>` },
        { name: "Kubernetes", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2L1.5 8.5v7L12 22l10.5-6.5v-7L12 2zm0 2.28L19.42 8.5 12 12.72 4.58 8.5 12 4.28zM3 10.37l9 5.38 9-5.38v3.26l-9 5.37-9-5.37v-3.26z"/></svg>` },
        { name: "AWS", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M6.23 18.25c-.2.62-.1 1.3.3 1.8.4.5.9.7 1.4.7.7 0 1.2-.2 1.6-.6.4-.4.6-.9.6-1.5 0-.6-.2-1.2-.6-1.6-.4-.4-.9-.6-1.6-.6-.5 0-1 .2-1.4.7-.3.5-.4 1.1-.3 1.7zm11.54 0c-.2.62-.1 1.3.3 1.8.4.5.9.7 1.4.7.7 0 1.2-.2 1.6-.6.4-.4.6-.9.6-1.5 0-.6-.2-1.2-.6-1.6-.4-.4-.9-.6-1.6-.6-.5 0-1 .2-1.4.7-.3.5-.4 1.1-.3 1.7zm-5.77-5.94c-1.35 0-2.58.55-3.48 1.45l-1.4-1.4c1.1-1.1 2.6-1.8 4.2-1.8s3.1.7 4.2 1.8l-1.4 1.4c-.9-.9-2.13-1.45-3.48-1.45zM4.5 4.5c-1.1 1.1-1.8 2.6-1.8 4.2v6.6c0 1.6.7 3.1 1.8 4.2s2.6 1.8 4.2 1.8h6.6c1.6 0 3.1-.7 4.2-1.8s1.8-2.6 1.8-4.2V8.7c0-1.6-.7-3.1-1.8-4.2s-2.6-1.8-4.2-1.8H8.7c-1.6 0-3.1.7-4.2 1.8z"/></svg>` },
        { name: "Terraform", icon: `<svg fill="currentColor" width="40" height="40" viewBox="0 0 24 24"><path d="M2.25 2.25h8.25V9H2.25V2.25zm9.75 0h8.25v6.75h-8.25V2.25zM2.25 10.5h8.25v6.75H2.25v-6.75zm9.75 0h8.25v11.25h-8.25V10.5z"/></svg>` },
    ],
    certifications: [
        { name: "Algorithmically Thinking", authority: "Rice University via Coursera" },
        { name: "Artificial Intelligence Foundation", authority: "SKILL UP - NASSCOM" },
        { name: "Big Data Foundation", authority: "IT-ITES SSC - NASSCOM" },
        { name: "Kotlin for Java Developers", authority: "Jet Brains on Coursera" },
        { name: "Figma for UX Design", authority: "Coursera" },
        { name: "Top 6 Finalist", authority: "Bupa Empower to Employ 2024" },
    ]
};

export { portfolioData };
