import { motion } from 'framer-motion';
import {  ArrowRight } from 'lucide-react';
import { sectionAnimation } from './Data';

const Contact = ({ email }) => (
    <motion.section {...sectionAnimation} id="contact" className="text-center bg-gray-900 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
        <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-300 mb-8">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.</p>
        <motion.a href={`mailto:${email}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center text-lg hover:bg-cyan-400 transition-colors shadow-lg">Say Hello <ArrowRight className="ml-2" /></motion.a>
    </motion.section>
);

export default Contact;