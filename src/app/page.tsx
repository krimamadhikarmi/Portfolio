import Image from "next/image";

import { HeroSection } from "./_components/HeroSection";
import {AboutMe} from "./_components/AboutMe";
import {Education} from "./_components/Education"
import {Skills} from "./_components/Skills";
import {MyServices} from "./_components/MyServices";
import {MyProjects} from "./_components/MyProjects";
import {Contact} from "./_components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      
      <div className="container mx-auto py-4">
        <HeroSection />
        <AboutMe/>
        <Education/>
        <Skills/>
        <MyServices/>
        <MyProjects/>
        <Contact/>

      </div>
    </main>
  );
}
