'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setTag } from '../../redux/action/ProjectAction'
import { ProjectDetails } from "../_components/ProjectDetails";
import project_data from "../utilis/project.json";
import ProjectTag from "./_components/ProjectLayout";

export default function Project() {
  const dispatch = useDispatch();
  const tag = useSelector((state) => state.tag);

  const handleTagChange = (newTag) => {
    dispatch(setTag(newTag));
  };

  const filteredProjects = project_data.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  return (
    <>
      <h1 className="text-3xl mt-28 mb-12 text-blue-300 text-center font-bold lg:text-4xl">
        Projects
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="C"
          onClick={handleTagChange}
          isSelected={tag === "C"}
        />
        <ProjectTag
          name="C++"
          onClick={handleTagChange}
          isSelected={tag === "C++"}
        />
        <ProjectTag
          name="JS"
          onClick={handleTagChange}
          isSelected={tag === "JS"}
        />
        <ProjectTag
          name="Ruby"
          onClick={handleTagChange}
          isSelected={tag === "Ruby"}
        />
        <ProjectTag
          name="React"
          onClick={handleTagChange}
          isSelected={tag === "React"}
        />
      </div>

      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
