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
    <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
