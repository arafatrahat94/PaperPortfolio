import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import { TbBorderCornerSquare } from "react-icons/tb";
import { VscCallOutgoing } from "react-icons/vsc";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="py-10 max-md:py-5 mt-5 max-w-[1380px] mx-auto px-5 lg:px-10">
      {/*-> Rahat code */}
      <div className="min-h-[640px] max-xl:flex-col justify-between items-start flex">
        <div className="max-lg:w-full w-[799px] self-stretch flex-col justify-start items-start gap-5 inline-flex">
          <div className="justify-start  items-center gap-x-2  inline-flex">
            <div className="w-12 dark:border-dark-primary-color h-[0px]  -rotate-180 border-2 border-[#333333]"></div>
            <div className=" text-[#333333] dark:text-dark-primary-color max-md:text-3xl max-md:leading-0 text-[44px] font-extrabold font-Bayon tracking-widest ">
              Hello
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="max-lg:w-full max-md:leading-none  w-[899px]">
              <span className="text-[#333333] text-[74px] font-normal max-md:text-4xl dark:text-dark-primary-color font-sans">
                I’m
              </span>
              <span className="text-[#333333] dark:text-dark-primary-color text-[74px] font-bold ">
                {" "}
              </span>
              <span className="text-[#333333] text-[74px] font-medium dark:text-dark-primary-color font-Space">
                <span className="font-bold strokeText">Arafath</span> Hossain
              </span>
            </div>
            <div className="max-lg:w-full max-md:text-2xl  w-[769px] dark:text-dark-primary-color text-[#333333] text-[40px] font-normal font-Rubik">
              A web developer & with front‑end & back-end skills.
            </div>
            <div className="max-lg:w-full max-md:text-sm w-[769px] dark:text-dark-primary-color text-[#333333] text-2xl font-normal font-Rubik">
              I focused on crafting clean & user‑friendly experiences. I am
              passionate about building excellent software that improves the
              lives of those around me.
            </div>
          </div>
          <div className="bg-light-primary-color dark:bg-dark-primary-color  min-h-[100px] max-xl:absolute block max-lg:hidden max-lg:static lg:w-[100px] lg:h-[450px] xl:h-[100px] right-0 xl:w-[80%] max-lg:h-[100px] max-lg:w-[80%]  ms-auto p-4 me-10 mt-5">
            <div className="w-full h-full dark:border-light-primary-color/30 border-dark-primary-color/30 border max-lg:grid-cols-7 grid relative xl:grid-cols-7">
              <TbBorderCornerSquare className="absolute text-white text-xl -top-1  dark:text-light-primary-color -left-1" />
              <TbBorderCornerSquare className="absolute rotate-90 text-white  dark:text-light-primary-color text-xl -top-1 -right-1" />
              <TbBorderCornerSquare className="absolute -rotate-180 text-white dark:text-light-primary-color text-xl -bottom-1  -right-1" />
              <TbBorderCornerSquare className="absolute -rotate-90 text-white  dark:text-light-primary-color text-xl -bottom-1 -left-1" />
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <VscCallOutgoing className="text-3xl " />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <LuMailPlus className="text-3xl " />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <FaWhatsapp className="text-3xl " />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <FaGithub className="text-3xl " />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <FaLinkedinIn className="text-3xl " />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <FaFacebookF className="text-3xl " />
              </div>
              <div className=" flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 text-dark-primary-color/60">
                <FaInstagram className="text-3xl " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-lg:my-10 max-lg:flex-col justify-center items-center w-full">
          <img
            className="p-1 lg:mt-10 flex-grow w-full"
            src="https://via.placeholder.com/480x540"
          />
          <div className="bg-light-primary-color dark:bg-dark-primary-color   max-xl:absolute block max-lg:block lg:hidden max-lg:static lg:w-[100px] lg:h-[450px] max-md:w-full max-md:h-[80px] xl:h-[100px] right-0 xl:w-[80%] max-lg:h-[100px] max-lg:w-[80%] ms-auto p-4  mt-5">
            <div className="w-full h-full dark:border-light-primary-color/30 border-dark-primary-color/30 border max-lg:grid-cols-7 grid relative xl:grid-cols-7">
              <TbBorderCornerSquare className="absolute text-white text-xl -top-1   dark:text-light-primary-color -left-1" />
              <TbBorderCornerSquare className="absolute rotate-90 text-white  dark:text-light-primary-color text-xl -top-1 -right-1" />
              <TbBorderCornerSquare className="absolute -rotate-180 text-white dark:text-light-primary-color text-xl -bottom-1  -right-1" />
              <TbBorderCornerSquare className="absolute -rotate-90 text-white  dark:text-light-primary-color text-xl -bottom-1 -left-1" />
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <VscCallOutgoing className="text-3xl max-md:text-lg" />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <LuMailPlus className="text-3xl max-md:text-lg" />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <FaWhatsapp className="text-3xl max-md:text-lg" />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <FaGithub className="text-3xl max-md:text-lg" />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <FaLinkedinIn className="text-3xl max-md:text-lg" />
              </div>
              <div className="border-e flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                <FaFacebookF className="text-3xl max-md:text-lg" />
              </div>
              <div className=" flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 text-dark-primary-color/60">
                <FaInstagram className="text-3xl max-md:text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
