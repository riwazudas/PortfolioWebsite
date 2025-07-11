const SkillIcon = ({ name, svg }) => {
  return (
    <img
      src={svg}
      alt={`${name} logo`}
      className="w-12 h-12 object-contain"
    />
  );
};

export default SkillIcon;