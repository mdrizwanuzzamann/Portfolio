import React from "react";
import avatarImg from "../../assets/mine6.png";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-center md:gap-x-10 items-center p-6 sm:p-10 md:p-20">


      {/* Text Section */}
      <div className="w-full md:w-2/4 pt-6 md:pt-10 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-normal tracking-tighter">
          Hi, I'm Rizwan
        </h1>
        <p className="text-sm sm:text-base md:text-2xl mb-6 tracking-tight">
          A Full Stack Web Developer & Tech Enthusiast
        </p>

        <div className="mt-10 flex flex-row gap-3 justify-center md:justify-start">
          <a href="#Footer">
            <button className="cursor-pointer text-white px-4 py-2 text-sm sm:text-base md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact Me
            </button>
          </a>

          <a href="https://drive.google.com/file/d/1evO978nu6FFr_hNwFfduXtpSsl9yRlhh/view?usp=sharing">
            <button className="cursor-pointer text-white px-4 py-2 text-sm sm:text-base md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="mx-auto md:mx-0 bg-white p-1 rounded-3xl shadow-lg border-4 border-gray-200 flex items-center justify-center overflow-hidden w-36 h-36 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <img className="w-full h-full object-cover object-top" src={avatarImg} alt="Rizwan" />
      </div>

    </div>
  );
};

export default Home;