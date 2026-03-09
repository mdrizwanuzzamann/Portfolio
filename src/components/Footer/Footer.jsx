import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col sm:flex-row justify-around bg-[#465697] text-white p-8 sm:p-10 md:p-12 items-center gap-6 sm:gap-0"
    >
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-base sm:text-lg md:text-2xl font-normal">Feel Free to reach out!</h3>
      </div>

      <ul className="text-sm sm:text-base md:text-xl flex flex-col gap-3">
        <li className="flex gap-2 items-center justify-center sm:justify-start">
          <MdOutlineEmail size={20} />
          <a href="mailto:mdrizwanuzzaman46@gmail.com" className="hover:underline">Email</a>
        </li>
        <li className="flex gap-2 items-center justify-center sm:justify-start">
          <CiLinkedin size={20} />
          <a href="https://www.linkedin.com/in/mdrizwanuzzaman/" className="hover:underline">LinkedIn</a>
        </li>
        <li className="flex gap-2 items-center justify-center sm:justify-start">
          <FaGithub size={20} />
          <a href="https://github.com/mdrizwanuzzamann" className="hover:underline">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;