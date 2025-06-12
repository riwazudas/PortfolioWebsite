import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { sectionAnimation } from './Data';


const Projects = ({ projects }) => (
    <motion.section {...sectionAnimation} id="projects" className="mb-16 md:mb-24">
        <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-400 pb-2 inline-block">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div key={index} whileHover={{ y: -10, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 shadow-lg flex flex-col justify-between">
                    <div>
                        <h4 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h4>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">{project.tags.map((tag, i) => <span key={i} className="bg-gray-700 text-cyan-400 text-sm font-semibold px-2 py-1 rounded-full">{tag}</span>)}</div>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold mt-auto flex items-center">View Project <ExternalLink className="ml-2 w-4 h-4" /></a>
                </motion.div>
            ))}
        </div>
    </motion.section>
);

export default Projects;
