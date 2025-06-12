import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from './Data';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { experience: jobs } = portfolioData;
    return (<section id="experience" className="py-24"><div className="max-w-4xl mx-auto"><h2 className="text-3xl font-bold text-center text-slate-100 mb-12">Experience</h2><div className="flex flex-col md:flex-row gap-8"><div className="flex md:flex-col overflow-x-auto">{jobs.map((job, index) => (<button key={index} onClick={() => setActiveTab(index)} className={`text-left p-4 whitespace-nowrap w-full text-sm font-medium border-b-2 md:border-b-0 md:border-l-2 transition-colors ${activeTab === index ? 'border-cyan-400 text-cyan-400 bg-slate-800' : 'border-slate-700 text-slate-400 hover:bg-slate-800'}`}>{job.company}</button>))}</div><div className="w-full"><motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><h3 className="text-xl font-bold text-slate-100">{jobs[activeTab].role}</h3><p className="text-sm text-slate-400 mb-4">{jobs[activeTab].date}</p><ul className="space-y-2 list-disc list-inside text-slate-400">{jobs[activeTab].description.map((item, i) => (<li key={i}>{item}</li>))}</ul></motion.div></div></div></div></section>);
};

export default Experience;