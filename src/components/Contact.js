import { Mail } from "lucide-react";
import { portfolioData } from "./Data";

const Contact = () => (
  <section id="contact" className="py-24 text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Get In Touch</h2>
      <p className="text-lg text-slate-400 mb-8">
        I'm currently open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <a
        href={`mailto:${portfolioData.email}`}
        className="inline-flex items-center bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors duration-300 shadow-lg"
      >
        Say Hello <Mail className="ml-2 h-5 w-5" />
      </a>
    </div>
  </section>
);

export default Contact;
