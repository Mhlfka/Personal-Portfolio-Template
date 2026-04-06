import React from "react";

function SkillBar({skill}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-white font-brunoAce text-2xl">{skill.skillName}</span>
        <span className="text-[#A3A3A3] font-brunoAce text-2xl">{skill.level}%</span>
      </div>

      <div className="w-full bg-[#A3A3A3] h-8">
        <div
          className="bg-white h-8 transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
