import Image from "next/image";
export function Skills() {
  const skills_data = [
    {
      name: "C",
      image: "./images/c.png",
    },
    {
      name: "C++",
      image: "./images/c++.png",
    },
    {
      name: "HTML",
      image: "./images/html.png",
    },
    {
      name: "CSS",
      image: "./images/css.png",
    },
    {
      name: "JavaScript",
      image: "./images/js.png",
    },
    {
      name: "React",
      image: "./images/react.png",
    },
    {
      name: "Ruby",
      image: "./images/ruby.png",
    },
    {
      name: "Rails",
      image: "./images/rails.png",
    },
  ];
  return (
    <section>
      <div className="mt-20">
        <h1 className=" text-3xl mt-4 mb-12 text-blue-300 text-center font-bold lg:text-4xl">
          Skills
        </h1>
        <div className="mx-auto px-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {skills_data.map((skill) => (
        <div key={skill.name} className="text-center">
         
          <div className="rounded-full overflow-hidden w-24 h-24 mx-auto ">
            <img src={skill.image} alt={skill.name} className="object-cover w-full h-full" />
          </div>
          <h3 className="text-lg font-bold text-white mb-6">{skill.name}</h3>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
}
