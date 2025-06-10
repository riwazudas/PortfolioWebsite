import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Menu, X, Briefcase, Code, Star, GitBranch } from 'lucide-react';

// Main App Component
const App = () => {
    // State for managing the active tab and mobile menu visibility
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Data extracted from the resume
    const portfolioData = {
        name: "Riwaz Udas",
        title: "Software Developer",
        email: "udasriwaz@gmail.com",
        linkedin: "https://linkedin.com/in/riwaz-udas-7aab521b1/",
        githubUsername: "riwazudas",
        summary: "Highly skilled technical professional with a solid foundation in computer science and engineering. Experienced in handling projects, optimization approaches, and effective communication. Proven ability to master cutting-edge technologies and deliver robust project solutions. Adept at promoting collaboration and forging agreement within cross-functional teams. An innovative thinker noted for inventing creative approaches to tackle complicated challenges with precision.",
        experience: [
            {
                role: "Member of Technical Staff-1",
                company: "Byjus",
                date: "Oct 2023 - Jan 2024",
                points: [
                    "Handled entire projects within a two-person team.",
                    "Acted as point of contact for addressing production issues, handling over 10 critical issues.",
                    "Optimized AWS infrastructure to reduce costs for identity micro-service.",
                    "Restructured code base to facilitate interface-based builds, writing over 200 test cases for more than 30 APIs.",
                    "Developed scripts to automate clean-up of over 300 million expired records annually."
                ]
            },
            {
                role: "Intern Engineering",
                company: "Byjus",
                date: "Jan 2023 - Sep 2023",
                points: [
                    "Assisted senior developers in developing identity micro-services and revamping systems.",
                    "Collaborated with cross-functional teams to introduce a reliable OTP-based login system.",
                    "Developed an identity platform using Golang for OAuth 2.0 flow.",
                    "Designed APIs focusing on maintenance and optimization.",
                    "Implemented a comprehensive monitoring system using Grafana and Prometheus."
                ]
            },
        ],
        skills: ["JavaScript", "React", "Node.js", "Python", "GoLang", "Java", "C++", "HTML", "CSS", "TailwindCSS", "MongoDB", "PostgreSQL", "AWS", "Docker", "Git"],
        projects: [
            { name: "Sentiment Analysis for Restaurant Reviews", description: "Fine-tuned a BERT model to analyse and classify sentiment in restaurant review texts." },
            { name: "Quantum Computing Task Placement", description: "Applied an Actor-Critic approach for optimized task placement in quantum cloud computing environments." },
            { name: "Handwritten Signature Forgery Detection", description: "Built a signature verification model leveraging ResNet for detecting forged signatures." },
            { name: "E-Scooter Impact Simulation", description: "Modelled a city grid to assess effects of e-scooter deployment on congestion and accident rates." },
            { name: "Decentralized E-Voting System", description: "Developed a secure decentralized electronic voting system leveraging Ethereum smart contracts." },
            { name: "Event Recommendation System", description: "Devised a system using KNN algorithm to recommend events based on user interests." }
        ],
    };

    // Render the selected tab content
    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <Home data={portfolioData} />;
            case 'experience':
                return <Experience data={portfolioData.experience} />;
            case 'projects':
                return <Projects data={portfolioData.projects} />;
            case 'github':
                return <GithubRepos username={portfolioData.githubUsername} />;
            default:
                return <Home data={portfolioData} />;
        }
    };
    
    // Header navigation component
    const Header = () => {
        const navLinks = ["home", "experience", "projects", "github"];
        return (
            <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-white tracking-wider">
                                {portfolioData.name}
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <button
                                        key={link}
                                        onClick={() => setActiveTab(link)}
                                        className={`capitalize text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeTab === link ? 'bg-gray-700 text-white' : ''}`}
                                    >
                                        {link}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link}
                                    onClick={() => {
                                        setActiveTab(link);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`capitalize text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === link ? 'bg-gray-700 text-white' : ''}`}
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        );
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white font-sans">
            <Header />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {renderContent()}
                </div>
            </main>
            <Footer data={portfolioData} />
        </div>
    );
};


// Home Section Component
const Home = ({ data }) => {
    // Simple particle effect
    useEffect(() => {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const particle = (x, y, color) => {
            return { x, y, radius: Math.random() * 3 + 1, color, vx: Math.random() * 1 - 0.5, vy: Math.random() * 1 - 0.5 };
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < 50; i++) {
                particles.push(particle(Math.random() * canvas.width, Math.random() * canvas.height, 'rgba(110, 231, 183, 0.5)'));
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
            requestAnimationFrame(animateParticles);
        };
        
        createParticles();
        animateParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div className="relative">
             <canvas id="particle-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>
            <div className="relative z-10 p-4 md:p-8">
                <div className="text-center py-20">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white animate-fade-in-down">
                        {data.name}
                    </h2>
                    <p className="mt-4 text-xl md:text-2xl text-green-300 font-light animate-fade-in-up">
                        {data.title}
                    </p>
                     <div className="mt-8 flex justify-center space-x-6 animate-fade-in-up">
                        <a href={`mailto:${data.email}`} className="text-green-300 hover:text-white transition-colors"><Mail size={28} /></a>
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors"><Linkedin size={28} /></a>
                        <a href={`https://github.com/${data.githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors"><Github size={28} /></a>
                    </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-8 mt-12 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-green-300 mb-4">About Me</h3>
                    <p className="text-gray-300 leading-relaxed">{data.summary}</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-8 mt-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-green-300 mb-6">Technical Skills</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {data.skills.map(skill => (
                            <span key={skill} className="bg-gray-700 text-green-300 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// Experience Section Component
const Experience = ({ data }) => (
    <div className="p-4 md:p-8 animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-300">Work Experience</h2>
        <div className="relative border-l-2 border-green-400 ml-6">
            {data.map((job, index) => (
                <div key={index} className="mb-12 ml-10">
                    <div className="absolute -left-4 top-1 w-8 h-8 bg-gray-800 border-2 border-green-400 rounded-full flex items-center justify-center">
                        <Briefcase className="text-green-400" size={16} />
                    </div>
                    <div className="bg-gray-900/70 rounded-lg p-6 shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-green-300">{job.role}</h3>
                        <p className="text-md font-semibold text-gray-400">{job.company}</p>
                        <p className="text-sm text-gray-500 mb-4">{job.date}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {job.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
);


// Projects Section Component
const Projects = ({ data }) => (
    <div className="p-4 md:p-8 animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-300">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((project, index) => (
                <div key={index} className="bg-gray-900/70 rounded-lg p-6 shadow-lg backdrop-blur-sm flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
                    <div>
                        <Code className="text-green-400 mb-4" size={32}/>
                        <h3 className="text-xl font-bold text-green-300 mb-2">{project.name}</h3>
                        <p className="text-gray-400">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);


// GitHub Repositories Component
const GithubRepos = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories.');
                }
                const data = await response.json();
                setRepos(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching GitHub repos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    if (loading) return <div className="text-center py-10">Loading repositories...</div>;
    if (error) return <div className="text-center py-10 text-red-400">Error: {error}</div>;

    return (
        <div className="p-4 md:p-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-300">My GitHub Repositories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.slice(0, 10).map(repo => (
                    <a 
                        key={repo.id} 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-900/70 rounded-lg p-6 shadow-lg backdrop-blur-sm block transform hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-bold text-green-300 truncate">{repo.name}</h3>
                        <p className="text-gray-400 mt-2 h-12 overflow-hidden">{repo.description || 'No description available.'}</p>
                        <div className="flex items-center justify-between mt-4 text-gray-500">
                           <div className="flex items-center">
                                <Star className="mr-1" size={16}/> {repo.stargazers_count}
                           </div>
                           <div className="flex items-center">
                                <GitBranch className="mr-1" size={16}/> {repo.forks_count}
                           </div>
                           <span className="text-sm font-mono bg-gray-700 px-2 py-1 rounded">{repo.language || 'N/A'}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

// Footer Component
const Footer = ({data}) => (
    <footer className="bg-gray-900 shadow-inner mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
             <div className="mb-4 flex justify-center space-x-6">
                <a href={`mailto:${data.email}`} className="text-gray-400 hover:text-white transition-colors"><Mail size={24} /></a>
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href={`https://github.com/${data.githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} {data.name}. All Rights Reserved.</p>
        </div>
    </footer>
);

// Add some basic CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fade-in-down {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fade-in 0.8s ease-in-out;
    }
    .animate-fade-in-down {
        animation: fade-in-down 0.8s ease-in-out;
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-in-out 0.4s backwards;
    }
`;
document.head.appendChild(style);


export default App;
