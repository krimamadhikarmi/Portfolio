import { ProjectDetails } from "../_components/ProjectDetails";
import project_data from '../utilis/project.json'
export default function Project(){
    return(
        <>
         <h1 className="text-3xl mt-28 mb-12 text-blue-300 text-center font-bold lg:text-4xl">
          Projects
        </h1>
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project_data.map((project) => (
            <ProjectDetails
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            />
        ))}
    </div>
        </>
    )
}