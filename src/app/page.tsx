import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import { HeroSection } from "./_components/HeroSection";
import {AboutMe} from "./_components/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto py-4">
        <HeroSection />
        <AboutMe/>
      </div>
    </main>
  );
}
