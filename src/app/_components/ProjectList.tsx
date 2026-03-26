import React from 'react';
import { ProjectDetails } from './ProjectDetails';

interface Project {
  id: number;
  title: string;
  image: string;
  gitUrl: string;
}


const ProjectList = ({ projects,limitProjects}:{projects: Project[],limitProjects: boolean}) => {
  const displayedProjects = limitProjects ? projects.slice(0, 3) : projects;
  return (
    <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6   lg:gap-6 px-8 sm:px-6 lg:px-6 xl:px-8">
      {displayedProjects.map((project) => (
        <ProjectDetails
          key={project.id}
          title={project.title}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
        />
      ))}
    </div>
  );
};

export default ProjectList;
