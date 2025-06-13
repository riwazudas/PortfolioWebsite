import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
import Experience from './components/Experience.js';
import Skills from './components/Skills.js';
import Certifications from './components/Certification.js';
import ParticlesBackground from './components/ParticlesBackground.js';
import { useState, useEffect } from 'react';


function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const sectionIds = ["about", "experience", "skills", "projects", "certifications", "contact"];
  
  useEffect(() => {
    const handleScroll = () => {
        // Show navbar after scrolling 80% of the viewport height
        if (window.scrollY > window.innerHeight * 0.8) {
            setIsNavbarVisible(true);
        } else {
            setIsNavbarVisible(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="bg-slate-900 text-slate-300 font-sans relative">
        <ParticlesBackground />
        <div className="relative z-10">
            <Navbar sections={sectionIds} isVisible={isNavbarVisible}/>
            <Hero />
            <div className="px-4 sm:px-6 lg:px-8">
                <main>
                  <About />
                  <Experience />
                  <Skills />
                  <Projects />
                  <Certifications />
                  <Contact />
                </main>
                <Footer />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
