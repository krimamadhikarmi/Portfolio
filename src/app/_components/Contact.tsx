"use client";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function Contact() {
  return (
    <section id="contact" className="mt-14 px-4">
      <div className="max-w-2xl mx-auto mt-10 bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/10 transition duration-300">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center font-bold text-2xl">
          Let’s Connect 🚀
        </h2>

        <p className="text-gray-300 text-center mt-4 leading-relaxed">
          I’m currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi, feel free to reach out!
        </p>

        <div className="flex justify-center mt-6">
          <Link
            href="/email"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition duration-300"
          >
            Send Message
          </Link>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        <div className="flex justify-center gap-6">
          <Link href="https://github.com/krimamadhikarmi">
            <div className="p-3 bg-gray-900 rounded-full hover:scale-110 hover:bg-gray-800 transition duration-300 cursor-pointer">
              <Image src={GithubIcon} alt="Github" className="w-6 h-6" />
            </div>
          </Link>

          <Link href="https://www.linkedin.com/in/krima-madhikarmi-02b402294/">
            <div className="p-3 bg-gray-900 rounded-full hover:scale-110 hover:bg-gray-800 transition duration-300 cursor-pointer">
              <Image src={LinkedinIcon} alt="Linkedin" className="w-6 h-6" />
            </div>
          </Link>

          <Link href="/email">
            <div className="p-3 bg-gray-900 rounded-full hover:scale-110 hover:bg-gray-800 transition duration-300 cursor-pointer">
              <EnvelopeIcon className="w-6 h-6 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
