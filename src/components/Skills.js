import { motion } from 'framer-motion';
import { sectionAnimation } from './Data';

const Skills = ({ skills }) => (
    <motion.section {...sectionAnimation} id="skills" className="mb-16 md:mb-24 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
        <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-400 pb-2 inline-block">Skills</h3>
        <div className="flex flex-wrap gap-4">{skills.map((skill, index) => <motion.div key={index} whileHover={{ scale: 1.1 }} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-cyan-500 hover:text-gray-900 transition-colors">{skill}</motion.div>)}</div>
    </motion.section>
);

export default Skills;