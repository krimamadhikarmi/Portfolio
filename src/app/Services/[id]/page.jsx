"use client";
import { useSearchParams } from "next/navigation";
import data from "../../utilis/services.json";
import {
  CodeBracketSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const Service = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const selectedService = data.find((service) => service.id === parseInt(id));
  {
    console.log(selectedService);
  }
  return (
    <div className="container mx-auto  mt-12 px-4 py-8 md:py-16">
      <div className="max-w-xl mx-auto rounded-lg shadow-lg p-6 md:p-8">
        {selectedService ? (
          <div>
            <div class="flex flex-row items-center justify-center">
              <h1
                className={`text-4xl md:text-5xl text-center mb-6 font-bold ${
                  selectedService.id === 1 ? "text-purple-400" : "text-blue-400"
                }`}
              >
                {selectedService.name}
              </h1>

              {selectedService.id === 1 ? (
                <CodeBracketSquareIcon class="w-[3rem] h-[3rem] ml-4 text-red-300 mb-6" />
              ) : (
                <RocketLaunchIcon class="w-[3rem] h-[3rem] ml-4 text-blue-200 mb-6" />
              )}
            </div>

            <p className="text-white text-justify">
              {selectedService.description}
            </p>
            {selectedService.My_Services && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-purple-300">
                  My Services
                </h2>
                {selectedService.My_Services.map((service) => (
                  <div key={service.id} className="mt-4">
                    <h3 className="text-lg font-medium text-blue-300">
                      {service.title}
                    </h3>
                    <p className="text-white text-justify">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-red-500 font-bold">
            Service not found
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
