'use client';
import React from "react";
import ProjectList from "./ProjectList";
import project_data from "../utilis/project.json";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
  limitProjects: boolean;
}


export function MyProjects() {
  const limitProjects = project_data.length > 3;
  return (
    <section id="my projects">
      <div className="flex flex-wrap justify-center items-center mt-20">
        <h1 className="text-3xl mt-4 mb-12 text-blue-300 text-center font-bold lg:text-4xl">
          My Projects
        </h1>
        {project_data.length > 3 && (
          <Link
            href={"/projects"}
            // alt="see more"
            className="ml-6 mb-6 px-6 py-3 w-full sm:w-fit text-white lg:px-8 lg:py-4 rounded-full bg-gradient-to-br from-green-500  to-red-500 hover:bg-slate-200"
          >
            See More
          </Link>
        )}
      </div>
      <ProjectList projects={project_data} limitProjects={limitProjects} />
    </section>
  );
}
