import { Component } from "react";
export default function Contact() {
  return (
    <>
      <h1 className=" text-3xl mt-32 mb-12 text-purple-200 text-center font-bold lg:text-4xl">
        Email Me
      </h1>

      <div className="mx-auto">
        <form
          method="post"
          action=""
          className="flex flex-col"
          name="contact_form"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="abc@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-80 p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-80 p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            name="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {" "}
            Send
          </button>
        </form>
      </div>
      <script src="/sheet.js"></script>
    </>
  );
}
