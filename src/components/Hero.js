import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { portfolioData } from "./Data";

const Hero = () => {
    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl mx-auto z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">
                    Hi, I am <span className="text-cyan-400">{portfolioData.firstName}</span>.
                </h1>
                <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
                    I build robust backend systems and work on cutting-edge AI technologies.
                </h2>
                <div className="flex justify-center space-x-6 mb-12">
                    <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400"><Github size={32} /></a>
                    <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400"><Linkedin size={32} /></a>
                </div>
            </motion.div>
            <motion.button 
                onClick={handleScrollDown}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-400"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowDown size={32} />
            </motion.button>
        </section>
    );
};


export default Hero;
