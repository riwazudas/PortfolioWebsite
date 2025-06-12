import { motion } from 'framer-motion';
import { sectionAnimation } from './Data';

const About = ({ content }) => (
  <motion.section {...sectionAnimation} id="about" className="mb-16 md:mb-24 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
    <h3 className="text-3xl font-bold text-white mb-6 border-b-2 border-cyan-400 pb-2 inline-block">About Me</h3>
    <p className="text-lg text-gray-300">{content}</p>
  </motion.section>
);

export default About;