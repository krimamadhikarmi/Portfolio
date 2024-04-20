"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link';

export function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mt-32 text-4xl sm:text-5xl lg:text-6xl font-bold px-6 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Hi ! I am {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Krima Madhikarmi",
                1000,
                "Front End Developer",
                1000,
                "Student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-4 sm:text-xl text-justify px-6 lg:px-6 text-xl">
            I am a Computer Science student with a passion for problem-solving
            and technology. I have foundation in programming, web development,
            and data structures. I'm eager to learn and apply my skills to
            real-world challenges.
          </p>
          <div className="px-6">
            <Link href={"./Cv.pdf"} target="_blank" download>
              <button className="px-6 py-3 w-full sm:w-fit text-white lg:px-8 lg:py-4 rounded-full bg-gradient-to-br from-green-500 via-purple-500 to-pink-500 hover:bg-slate-200">
                Download CV
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-12 lg:mt-0">
          <div className="rounded-full bg-[#121212] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="my avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
