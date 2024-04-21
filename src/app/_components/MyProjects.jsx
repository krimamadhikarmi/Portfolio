import React from 'react';
import { ProjectDetails } from './ProjectDetails';
import ProjectList from './ProjectList'; // Import the ProjectList component
import project_data from '../utilis/project.json';

export function MyProjects() {
  
  return (
    
    <section id="projects">
      <h1 className="text-3xl mt-4 mb-12 text-blue-300 text-center font-bold lg:text-4xl">
        My Projects
      </h1>
     
      <ProjectList projects={project_data} />
    </section>
  );
}
