import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "./Data";
import { Github } from "lucide-react";


// const Projects = () => (
//   <section id="projects" className="py-24">
//     <div className="max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-slate-100 mb-16">
//         Projects
//       </h2>
//       <div className="space-y-20">
//         {portfolioData.projects.map((project, index) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div
//               className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
//                 index % 2 !== 0 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               <div className="w-full md:w-1/2">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block border-2 border-slate-700 rounded-lg overflow-hidden hover:border-cyan-400"
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-auto object-cover"
//                   />
//                 </a>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <h3 className="text-2xl font-bold text-cyan-400 mb-3">
//                   {project.title}
//                 </h3>
//                 <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-4">
//                   <p className="text-slate-300">{project.description}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="bg-slate-700 text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-slate-400 hover:text-cyan-400"
//                   >
//                     <Github size={24} />
//                   </a>
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-slate-400 hover:text-cyan-400"
//                   >
//                     <ExternalLink size={24} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-100 mb-16">
        Projects
      </h2>
      <div className="space-y-20">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-2 border-slate-700 rounded-lg overflow-hidden hover:border-cyan-400"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </a>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                  {project.title}
                </h3>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-700 text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
