import Header from './components/Header.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import { portfolioData } from './components/Data.js';
import ParticlesBackground from './components/ParticlesBackground.js';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans leading-relaxed relative">
      <ParticlesBackground />
      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-8">
        
        <Header 
          name={portfolioData.name} 
          title={portfolioData.title} 
          github={portfolioData.github} 
          linkedin={portfolioData.linkedin} 
          email={portfolioData.email}
        />
        <main>
          <About content={portfolioData.about} />
          <Experience jobs={portfolioData.experience} />
          <Projects projects={portfolioData.projects} />
          <Skills skills={portfolioData.skills} />
          <Contact email={portfolioData.email} />
        </main>
        <Footer name={portfolioData.name} />
      </div>
    </div>
  );
}

export default App;