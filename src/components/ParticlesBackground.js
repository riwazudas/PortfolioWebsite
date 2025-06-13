import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => await loadSlim(engine), []);
  const particlesOptions = {
    background: { color: { value: "#0f172a" } }, // slate-900
    fpsLimit: 60,
    interactivity: { events: { onHover: { enable: true, mode: "repulse" }, resize: true }, modes: { repulse: { distance: 80, duration: 0.4 } } },
    particles: {
      color: { value: "#94a3b8" }, // slate-400
      links: { color: "#334155", distance: 150, enable: true, opacity: 0.2, width: 1 }, // slate-700
      collisions: { enable: true },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };
  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default ParticlesBackground;
