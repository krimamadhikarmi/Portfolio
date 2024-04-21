import React from 'react';
import { ProjectDetails } from './ProjectDetails';

const ProjectList = ({ projects }) => {
  return (
    <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projects.map((project) => (
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
