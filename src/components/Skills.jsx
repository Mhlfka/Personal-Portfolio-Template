import React from "react";
import skills from "../data/skills.json"
import SkillBar from "./SkillBar";


function Skills() {
  return (
    <div className="bg-[#000000] px-[5.7%] py-[5%]">
      <div
        id="title-container"
        className="flex flex-row justify-between gap-[50%] w-full pb-[5%]"
      >
        <div id="sub-titles-one">
          <p className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-white">
            skills
          </p>
          <p className="font-bold text-xs xs:text-xs sm:text-sm md:text-xl lg:text-2xl text-white">
            スキル
          </p>
        </div>
        <div
          id="sub-titles-two"
          className="font-brunoAce xs:text-2xl sm:text-2xl md:text-3xl lg:text-5xl"
        >
          <p className="text-white">a set of knowledge of the future field</p>
        </div>
      </div>

      <div className="w-full ">
        {
            skills.map((skill) => (
                <SkillBar key={skill.id} skill={skill}/>
            ))
        }
      </div>
    </div>
  );
}

export default Skills;
