import Image from "next/image";
import Link from "next/link";
export function AboutMe() {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-8 px-4 xl:gap-12 sm:py-16 xl:px-16">
        <Image src="/images/avatar.png" width={300} height={300} />
        <div>
          <h2 className="text-5xl font-bold text-blue-200 mb-4 mt-4">About Me</h2>
          <p className="text-base text-justify lg:text-lg text-[#ADB7BE] mb-8">
            I am currently 3rd year student on Samriddhi College studying
            Bsc.Computer Science and Information Technology. I have been
            interested in frontend developing as well as backend developing. I
            have an internship experience at Chulo Solution.
            <br/>
              Aside from this, I have a hobby of reading books and traveling. I
              am also interested in Astronomy.
            
          </p>
          <Link
            href={"/Cv.pdf"}
            target="/blank"
            alt="see more"
            className=" mb-6 mt-8 px-6 py-3 w-full sm:w-fit text-white lg:px-8 lg:py-4 rounded-full bg-gradient-to-br from-green-500  to-red-500 hover:bg-slate-200"
          >
            View My CV
          </Link>
          
        </div>
        
      </div>
    </section>
  );
}
