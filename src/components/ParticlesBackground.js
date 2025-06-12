import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => await loadSlim(engine), []);
  const particlesOptions = { /* ... options from previous version ... */
    background: { color: { value: "#111827" }},
    fpsLimit: 60,
    interactivity: { events: { onHover: { enable: true, mode: "repulse" }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 }}},
    particles: { color: { value: "#22d3ee" }, links: { color: "#6b7280", distance: 150, enable: true, opacity: 0.2, width: 1 }, collisions: { enable: true }, move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false }, number: { density: { enable: true, area: 800 }, value: 50 }, opacity: { value: 0.3 }, shape: { type: "circle" }, size: { value: { min: 1, max: 5 }}},
    detectRetina: true,
  };
  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default ParticlesBackground;