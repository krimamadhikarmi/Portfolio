import Image from "next/image";
export function AboutMe() {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-8 px-4 xl:gap-12 sm:py-16 xl:px-16">
        <Image src="/images/avatar.png" width={300} height={300} />
        <div>
          <h2 className="text-5xl font-bold text-blue-200 mb-4">About Me</h2>
          <p className="text-base text-justify lg:text-lg text-[#ADB7BE]">
            I am currently 3rd year student on Samriddhi College studying
            Bsc.Computer Science and Information Technology. I have been
            interested in frontend developing as well as backend developing. I
            have an internship experience at Chulo Solution.
            <p>
              Aside from this, I have a hobby of reading books and traveling. I
              am also interested in Astronomy.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}
