"use client";

import { useState, useTransition } from "react";
import { EduButton } from "./Button";
import edu_data from "../utilis/education.json"

export function Education() {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = edu_data.find((t) => t.id === tab);
  return (
    <section>
      <div>
        <h1 className=" text-3xl mt-4 text-purple-300 text-center font-bold lg:text-4xl">
          Education & Experience
        </h1>
        <div className="text-center mt-8 space-x-4">
          <EduButton
            onClick={() => handleChange("education")}
            active={tab === "education"}
          >
            Education
          </EduButton>
          <EduButton
            onClick={() => handleChange("experience")}
            active={tab === "experience"}
          >
            Experience
          </EduButton>
        </div>
        <div className="mt-8  mx-auto grid grid-cols-1 sm:grid-cols-2 items-center lg:grid-cols-3 gap-4 w-2/3">
          {currentTab.content.map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-white text-xl font-bold">{item.title}</p>
              <p className="text-gray-300">{item.institution}</p>
              <p className="text-gray-300">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
