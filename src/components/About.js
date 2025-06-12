import { portfolioData } from "./Data";

const About = () => (
  <section id="about" className="py-24">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
        About Me
      </h2>
      <div className="text-lg text-slate-400 space-y-4">
        <p>{portfolioData.about}</p>
        <p>{portfolioData.aboutMore}</p>
      </div>
    </div>
  </section>
);

export default About;
