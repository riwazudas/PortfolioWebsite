const SkillIcon = ({ name, svg }) => {
    // --- ADD THIS CONSOLE LOG ---
    console.log(`SkillIcon: Rendering for ${name}. SVG length: ${svg.length > 0 ? svg.length : 'empty'}`);
    // ----------------------------

    return (
        <div
            title={name}
            dangerouslySetInnerHTML={{ __html: svg }}
            style={{ width: '40px', height: '40px', display: 'block' }}
        />
    );
};

export default SkillIcon;
