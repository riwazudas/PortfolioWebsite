import { motion } from 'framer-motion';
import { Github, Linkedin, Mail} from 'lucide-react';

const Header = ({ name, title, github, linkedin, email }) => (
  <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-24"
  >
    <div className="text-center md:text-left mb-8 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{name}</h1>
      <h2 className="text-xl md:text-2xl text-cyan-400">{title}</h2>
    </div>
    <div className="flex space-x-4">
      <motion.a href={github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}><Github className="w-8 h-8 text-gray-400 hover:text-cyan-400" /></motion.a>
      <motion.a href={linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}><Linkedin className="w-8 h-8 text-gray-400 hover:text-cyan-400" /></motion.a>
      <motion.a href={`mailto:${email}`} whileHover={{ scale: 1.1 }}><Mail className="w-8 h-8 text-gray-400 hover:text-cyan-400" /></motion.a>
    </div>
  </motion.header>
);

export default Header;