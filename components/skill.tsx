import Image from "next/image";

type Skill = {
  name: string;
  level: number;
  icon: string;
};

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: "Next.js", level: 90, icon: "/nextdotjs.svg" },
    { name: "React.js", level: 85, icon: "/react.svg" },
    { name: "Tailwind CSS", level: 90, icon: "/tailwindcss.svg" },
    { name: "JavaScript", level: 80, icon: "/javascript.svg" },
    { name: "HTML & CSS", level: 95, icon: "/html5.svg" },
  ];

  const backendSkills: Skill[] = [
    { name: "Firebase", level: 75, icon: "/firebase.svg" },
    { name: "Node.js", level: 60, icon: "/nodedotjs.svg" },
  ];

  const tools: Skill[] = [
    { name: "Git & GitHub", level: 85, icon: "/github.svg" },
    { name: "VS Code", level: 90, icon: "/vscodium.svg" },
    { name: "Figma", level: 70, icon: "/figma.svg" },
    { name: "Canva", level: 80, icon: "/canva.svg" }, // 👈 Added Canva
  ];

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name} className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 relative">
            <Image
              src={skill.icon}
              alt={skill.name}
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-sm">{skill.name}</span>
        </div>
        <span className="text-xs text-gray-300">{skill.level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/20 rounded-full">
        <div
          className="h-1.5 bg-green-400 rounded-full transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h2 className="text-2xl font-bold text-center mb-8 tracking-wide">My Skills</h2>

      {/* Card Wrapper */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Frontend */}
        <div className="bg-white/10 p-5 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Frontend</h3>
          {frontendSkills.map(renderSkillBar)}
        </div>

        {/* Backend */}
        <div className="bg-white/10 p-5 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Backend</h3>
          {backendSkills.map(renderSkillBar)}
        </div>

        {/* Tools */}
        <div className="bg-white/10 p-5 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Tools</h3>
          {tools.map(renderSkillBar)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
