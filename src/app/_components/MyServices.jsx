import { CodeBracketSquareIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";

export function MyServices() {
  return (
    <section>
      <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
        <h1 className="text-4xl mb-12 text-purple-300 text-center font-bold lg:text-4xl">
          My Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-lg w-[60%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
            <div className="rounded-lg overflow-hidden hover:scale-110 transform transition-all duration-300">
                <div className="bg-red-700 uppercase font-semibold text-center p-[2rem]">
                  <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                  <h1 className="text-[20px]">FrontEnd</h1>
                  <p className="text-[15px] text-[#d3d2d2]">I am a front end developer</p>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden hover:scale-110 transform transition-all duration-300">
                <div className="bg-blue-600 uppercase font-semibold text-center p-[2rem]">
                  <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                  <h1 className="text-[20px]">BackEnd</h1>
                  <p className="text-[15px] text-[#d3d2d2]">I am a back end developer</p>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
}

export default MyServices;
