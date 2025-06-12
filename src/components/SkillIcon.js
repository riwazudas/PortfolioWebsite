const SkillIcon = ({ name, svg }) => (
    <div title={name} dangerouslySetInnerHTML={{ __html: svg }} />
);

export default SkillIcon;