import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { portfolioData } from "./Data";

// const Certifications = () => (
//   <section id="certifications" className="py-24">
//     <div className="max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
//         Certifications & Awards
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {portfolioData.certifications.map((cert, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-slate-800 p-6 rounded-lg text-center flex flex-col items-center"
//           >
//             <Award className="text-cyan-400 mb-3" size={32} />
//             <h3 className="text-md font-semibold text-slate-100">
//               {cert.name}
//             </h3>
//             <p className="text-sm text-slate-400">{cert.authority}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

const Certifications = () => (
  <section id="certifications" className="py-24">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
        Certifications & Awards
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800 p-6 rounded-lg text-center flex flex-col items-center"
          >
            <Award className="text-cyan-400 mb-3" size={32} />
            <h3 className="text-md font-semibold text-slate-100">
              {cert.name}
            </h3>
            <p className="text-sm text-slate-400">{cert.authority}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
