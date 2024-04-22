'use client';
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function Contact() {
  return (
    <section id="contact">
      <h1 className=" text-3xl mt-20 text-purple-300 text-center font-bold lg:text-4xl">
        Contact
      </h1>
      <div>
        <h2 className="text-white text-center font-bold mt-12 text-xl">
          Lets Connect
        </h2>
        <p className="text-white text-jutify text-center mt-4 font-semibold px-4 sm:text-lg">
          I'm currently looking for new opportunities, my inbox is always open.{" "}
          <br />
          Whether you have a question or just want to say hi, I'll <br />
          try my best to get back to you! <br />
        </p>
        <div className="socials flex flex-row justify-center gap-2 mt-4">
          <Link href="https://github.com/krimamadhikarmi">
            <Image src={GithubIcon}  alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/krima-madhikarmi-02b402294/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href={'/email'}>
            <EnvelopeIcon  className="h-12 w-12 text-white cursor-pointer"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
