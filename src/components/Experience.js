import { motion } from 'framer-motion';
import { sectionAnimation } from './Data';


const Experience = ({ jobs }) => (
  <motion.section {...sectionAnimation} id="experience" className="mb-16 md:mb-24">
    <h3 className="text-3xl font-bold text-white mb-8 border-b-2 border-cyan-400 pb-2 inline-block">Experience</h3>
    <div className="space-y-12">
      {jobs.map((job, index) => (
        <motion.div key={index} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.2 }} className="relative pl-8 border-l-2 border-gray-700 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
          <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 top-8"></div>
          <h4 className="text-2xl font-semibold text-cyan-400 mb-1">{job.role}</h4>
          <p className="text-lg text-gray-400 mb-2">{job.company} | {job.date}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">{job.description.map((point, i) => <li key={i}>{point}</li>)}</ul>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Experience;