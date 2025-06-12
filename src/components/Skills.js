import { motion } from 'framer-motion';
import { portfolioData } from './Data';
import SkillIcon from './SkillIcon'; // Assuming SkillIcon is a component that renders the skill icon

const Skills = () => (
    <section id="skills" className="py-24">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Skills</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 text-center">
                {portfolioData.skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="group flex flex-col items-center"
                    >
                        <div className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:scale-110">
                            <SkillIcon name={skill.name} svg={skill.icon} />
                        </div>
                        <p className="mt-2 text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;