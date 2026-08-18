import {Backend_skill, Frontend_skill} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const groups = [
  {label: "Frontend", skills: Frontend_skill},
  {label: "Backend", skills: Backend_skill},
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 py-16 sm:px-6 sm:gap-12 md:px-10 md:py-24 lg:py-28"
    >
      <SkillText />

      <div className="flex w-full flex-col items-center gap-10">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col items-center gap-5 w-full">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-subtle text-center">
              {group.label}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-[800px]">
              {group.skills.map((skill, index) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.Image}
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
