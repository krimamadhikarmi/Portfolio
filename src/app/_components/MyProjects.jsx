
import {ProjectList} from './ProjectList' ;

export function MyProjects() {
  const projectData=
  [
  {
    id:1,
    title: "SpringBall",
    image: "images/spring.PNG",
    gitUrl: 'https://github.com/krimamadhikarmi/Spring-Ball.git'

  },
  {
    id:2,
    title: "Movie Review",
    image: "images/movierev.PNG",
    gitUrl: 'https://github.com/krimamadhikarmi/Movie-Review-App.git'
  },
  {
    id:3,
    title: "Ecommerce App",
    image: "images/cartify.PNG",
    gitUrl: 'https://github.com/krimamadhikarmi/Cartify_App.git'
  },
]
  return (
    <section>
      <h1 className=" text-3xl mt-4 mb-12 text-blue-300 text-center font-bold lg:text-4xl">
        My Projects
      </h1>
      <div>
        {projectData.map((project)=> 
        <ProjectList key={project.id}
        title={project.title}
        imgUrl= {project.image}
        gitUrl={project.gitUrl}/>
      )}
      </div>
    </section>
  );
}
