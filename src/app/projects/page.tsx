"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTag } from "../../redux/action/ProjectAction";
import { ProjectDetails } from "../_components/ProjectDetails";
import project_data from "../utilis/project.json";
import ProjectTag from "./_components/ProjectLayout";
import { RootState } from "../../redux/store/configurStore";

export default function Project() {
  const dispatch = useDispatch();
  const tag = useSelector((state: RootState) => state.tag);

  const [open, setOpen] = useState(false);

  const tags = ["All", "React", "Laravel", "JS", "C", "C++", "Ruby"];

  const handleTagChange = (newTag: string) => {
    dispatch(setTag(newTag));
  };

  const filteredProjects = project_data.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag),
  );

  return (
    <>
      <h1 className="text-3xl mt-28 mb-10 sm:mb-12 text-blue-300 text-center font-bold lg:text-4xl">
        Projects
      </h1>

      <div className="hidden text-white md:flex flex-row justify-center items-center gap-2 py-6 flex-wrap mb-8">
        {tags.map((item) => (
          <ProjectTag
            key={item}
            name={item}
            onClick={handleTagChange}
            isSelected={tag === item}
          />
        ))}
      </div>

      <div className="md:hidden flex justify-center mb-8 relative">
        <div className="relative w-40">
          <button
            onClick={() => setOpen(!open)}
            className="w-full px-4 py-2 rounded-full bg-gray-900 text-white border border-gray-600 shadow-sm shadow-purple-300 flex justify-between items-center"
          >
            <span>{tag}</span>
            <span className="text-sm">{open ? "▲" : "▼"}</span>
          </button>

          {open && (
            <div className="absolute mt-2 w-full bg-gray-900 border border-gray-700 rounded-xl shadow-lg z-20 overflow-hidden">
              {tags.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    handleTagChange(item);
                    setOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-700 transition ${
                    tag === item ? "bg-gray-800 text-purple-400" : "text-white"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-10 lg:px-12">
        {filteredProjects.map((project) => (
          <ProjectDetails
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
}
