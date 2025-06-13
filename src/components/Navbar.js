import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "./Data.js";

// const Navbar = ({ sections }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("hero");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActiveLink(entry.target.id);
//         }),
//       { rootMargin: "-30% 0px -70% 0px" }
//     );
//     sections.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });
//     return () =>
//       sections.forEach((id) => {
//         const el = document.getElementById(id);
//         if (el) observer.unobserve(el);
//       });
//   }, [sections]);

//   const navLinks = [
//     "about",
//     "experience",
//     "skills",
//     "projects",
//     "certifications",
//     "contact",
//   ];

//   return (
//     <nav className="bg-slate-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="text-2xl font-bold text-transparent">.</div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link}
//                   href={`#${link}`}
//                   className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-300 ${
//                     activeLink === link
//                       ? "text-cyan-400"
//                       : "text-gray-300 hover:text-cyan-400"
//                   }`}
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-400 hover:text-white"
//             >
//               <span className="sr-only">Open menu</span>
//               {isOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navLinks.map((link) => (
//               <a
//                 key={link}
//                 href={`#${link}`}
//                 className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
//                   activeLink === link
//                     ? "bg-gray-700 text-cyan-400"
//                     : "text-gray-300 hover:text-cyan-400"
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

const Navbar = ({ sections, isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        }),
      { rootMargin: "-40% 0px -60% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () =>
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
  }, [sections]);

  const navLinks = ["about", "experience", "skills", "projects", "contact"];

  return (
    <motion.nav
      className="bg-slate-900 bg-opacity-80 backdrop-blur-md fixed top-0 z-50 w-full"
      animate={{ y: isVisible ? 0 : "-100%", opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-transparent">.</div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-300 ${
                    activeLink === link
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                  activeLink === link
                    ? "bg-gray-700 text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
