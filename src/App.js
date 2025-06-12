import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
import Experience from './components/Experience.js';
import Skills from './components/Skills.js';
import Certifications from './components/Certification.js';

function App() {
  const sectionIds = ["hero", "about", "experience", "skills", "projects", "certifications", "contact"];
  
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="bg-slate-900 text-slate-300 font-sans">
        <Navbar sections={sectionIds} />
        <div className="px-4 sm:px-6 lg:px-8">
            <main>
              <Hero />
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
    </>
  );
}

export default App;
