import React from "react";
import {
  CodeBracketSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import service_data from "../utilis/services.json";

export function MyServices() {
  return (
    <section id="services">
      <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
        <h1 className="text-4xl mb-12 text-purple-300 text-center font-bold lg:text-4xl">
          My Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-lg w-[60%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
          {service_data.map((service) => (
            <div
              key={service.id}
              className={`rounded-lg overflow-hidden hover:scale-110 transform transition-all duration-300 cursor-pointer ${
                service.id === 1 ? "bg-red-800" : service.id === 2 ? "bg-blue-800" : ""
              }`}
            >
              <div className="uppercase font-semibold text-center p-[2rem]">
                <Link href={`/Services/${service.id}?id=${service.id}`}>
                  {service.id === 1 ? (
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
                  ) : (
                    <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
                  )}
                </Link>
                <h1 className="text-[20px]">{service.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


