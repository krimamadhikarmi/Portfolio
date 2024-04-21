"use client";
import React, { useState } from "react";
import skills_data from "../utilis/skills.json";

export function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const filteredSkills = showAllSkills ? skills_data : skills_data.slice(0, 3);

  return (
    <section>
      <div className="mt-20">
        <h1 className="text-3xl mt-4 mb-12 text-blue-300 text-center font-bold lg:text-4xl">
          Skills
        </h1>
        <div className="mx-auto px-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="text-center">
              <div className="rounded-full overflow-hidden w-24 h-24 mx-auto ">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover w-full h-full "
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-6">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {skills_data.length > 3 && (
          <div className="flex justify-center mt-4">
            <button
              className="px-6 py-3 w-full sm:w-fit text-white lg:px-8 lg:py-4 rounded-full bg-gradient-to-br from-green-500 via-purple-500 to-pink-500 hover:bg-slate-200"
              onClick={() => setShowAllSkills(!showAllSkills)}
            >
              {showAllSkills ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
