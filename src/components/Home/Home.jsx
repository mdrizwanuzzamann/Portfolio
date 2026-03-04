import React from "react";
import avatarImg from "../../assets/mine4_edited.png";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 mt-16">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hi, I'm Rizwan
        </h1>
        <p className="text-sm mb-8 md:text-2xl tracking-tight ">
          A Full Stack Web Developer & Tech Enthusiast
        </p>
        <a href="#Footer">
          <button className="cursor-pointer mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>

        {/* Put resume link below 👇 */}
        <a href="https://drive.google.com/file/d/1evO978nu6FFr_hNwFfduXtpSsl9yRlhh/view?usp=sharing">
          <button className="cursor-pointer mx-2 mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Download Resume
          </button>
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
