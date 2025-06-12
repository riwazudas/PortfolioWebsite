import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { portfolioData } from "./Data";

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center text-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
        {portfolioData.name}
      </h1>
      <h2 className="text-2xl md:text-3xl text-cyan-400 mb-8">
        {portfolioData.title}
      </h2>
      <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
        I build scalable and efficient applications for the web.
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <a
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400"
        >
          <Github size={28} />
        </a>
        <a
          href={portfolioData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400"
        >
          <Linkedin size={28} />
        </a>
      </div>
      <a
        href={portfolioData.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 shadow-lg"
      >
        Download Resume <Download className="ml-2 h-5 w-5" />
      </a>
    </motion.div>
  </section>
);

export default Hero;
