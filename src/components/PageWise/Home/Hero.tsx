import useData from "@/hooks/useData";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEye,
  FaWhatsapp,
} from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import { TbBorderCornerSquare } from "react-icons/tb";
import { VscCallOutgoing } from "react-icons/vsc";
import hero from "../../../assets/svg/Hero.svg";
import "./Hero.css";

const Hero = () => {
  const { data, error, PersonalInfo, Contact } = useData();

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
                <span className="font-bold strokeText">
                  {PersonalInfo?.name}
                </span>{" "}
                {PersonalInfo?.secondName}
              </span>
            </div>
            <div className="relative">
              <div className="max-lg:w-full max-md:text-2xl  w-[769px] dark:text-dark-primary-color text-[#333333] text-[40px] font-normal font-Rubik">
                {PersonalInfo?.title}
              </div>
              <Link href="/Resume">
                <button className="absolute top-16 xl:flex hidden left-80  items-center px-6 py-3 overflow-hidden font-medium transition-all bg-light-primary-color rounded-md group">
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-light-secondary-color rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-light-secondary-color rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-light-primary-color rounded-md group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out flex items-center gap-x-1 group-hover:text-white">
                    <FaRegEye />
                    Resume
                  </span>
                </button>
              </Link>
            </div>
            <div className="max-lg:w-full max-md:text-sm w-[769px] dark:text-dark-primary-color text-[#333333] text-2xl font-normal font-Rubik">
              {PersonalInfo?.bio}
            </div>{" "}
            <Link href="/Resume">
              <button className=" flex relative xl:hidden   items-center px-6 py-3 overflow-hidden font-medium transition-all bg-light-primary-color rounded-md group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-light-secondary-color rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-light-secondary-color rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dark-primary-color"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-light-primary-color rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out flex items-center gap-x-1 group-hover:text-white">
                  <FaRegEye />
                  Resume
                </span>
              </button>
            </Link>
          </div>
          <div className="bg-light-primary-color dark:bg-dark-primary-color  min-h-[100px] max-xl:absolute block max-lg:hidden max-lg:static lg:w-[100px] lg:h-[450px] xl:h-[100px] right-0 xl:w-[80%] max-lg:h-[100px] max-lg:w-[80%]  ms-auto p-4 me-10 mt-5">
            <div className="w-full h-full dark:border-light-primary-color/30 border-dark-primary-color/30 border max-lg:grid-cols-7 grid relative xl:grid-cols-7">
              <TbBorderCornerSquare className="absolute text-white text-xl -top-1  dark:text-light-primary-color -left-1" />
              <TbBorderCornerSquare className="absolute rotate-90 text-white  dark:text-light-primary-color text-xl -top-1 -right-1" />
              <TbBorderCornerSquare className="absolute -rotate-180 text-white dark:text-light-primary-color text-xl -bottom-1  -right-1" />
              <TbBorderCornerSquare className="absolute -rotate-90 text-white  dark:text-light-primary-color text-xl -bottom-1 -left-1" />
              <Link
                target="_blank"
                rel="noreferrer"
                href={`tel:${Contact?.phoneOne}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <VscCallOutgoing className="text-3xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`mailto:${Contact?.email}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <LuMailPlus className="text-3xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/${Contact?.phoneOne}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <FaWhatsapp className="text-3xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`${Contact?.github}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <FaGithub className="text-3xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`${Contact?.linkedin}`}
                className="h-full w-full"
              >
                <div className="border-e flex items-center justify-center h-full transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <FaLinkedinIn className="text-3xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`${Contact?.faceBook}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <FaFacebookF className="text-3xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`${Contact?.instagram}`}
                className="h-full w-full"
              >
                <div className=" h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 text-dark-primary-color/60">
                  <FaInstagram className="text-3xl " />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex max-lg:my-10 max-lg:flex-col justify-center max-sm:-mt-5 items-center w-full">
          <Image
            className="p-1 mt-10 flex-grow hero w-full"
            src={hero}
            alt=""
            width={500}
            height={500}
            loading="lazy"
          />

          <div className="bg-light-primary-color dark:bg-dark-primary-color   max-xl:absolute block max-lg:block lg:hidden max-lg:static lg:w-[100px] lg:h-[450px] max-md:w-full max-md:h-[80px] xl:h-[100px] right-0 xl:w-[80%] max-lg:h-[100px] max-lg:w-[80%] ms-auto p-4  mt-5">
            <div className="w-full h-full dark:border-light-primary-color/30 border-dark-primary-color/30 border max-lg:grid-cols-7 grid relative xl:grid-cols-7">
              <TbBorderCornerSquare className="absolute text-white text-xl -top-1   dark:text-light-primary-color -left-1" />
              <TbBorderCornerSquare className="absolute rotate-90 text-white  dark:text-light-primary-color text-xl -top-1 -right-1" />
              <TbBorderCornerSquare className="absolute -rotate-180 text-white dark:text-light-primary-color text-xl -bottom-1  -right-1" />
              <TbBorderCornerSquare className="absolute -rotate-90 text-white  dark:text-light-primary-color text-xl -bottom-1 -left-1" />
              <Link
                target="_blank"
                rel="noreferrer"
                href={`tel:${Contact?.phoneOne}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <VscCallOutgoing className="text-xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`mailto:${Contact?.email}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <LuMailPlus className="text-xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/${Contact?.phoneOne}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <FaWhatsapp className="text-xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`${Contact?.github}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <FaGithub className="text-xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`${Contact?.linkedin}`}
                className="h-full w-full"
              >
                <div className="border-e flex items-center justify-center h-full transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <FaLinkedinIn className="text-xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`${Contact?.faceBook}`}
                className="h-full w-full"
              >
                <div className="border-e h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 lg:border-b xl:border-b-0 text-dark-primary-color/60">
                  <FaFacebookF className="text-xl " />
                </div>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={`${Contact?.instagram}`}
                className="h-full w-full"
              >
                <div className=" h-full flex items-center justify-center transform duration-500 hover:dark:bg-light-primary-color hover:dark:text-dark-primary-color hover:bg-dark-primary-color hover:text-light-primary-color dark:text-light-primary-color/70 dark:border-light-primary-color/30 border-dark-primary-color/30 text-dark-primary-color/60">
                  <FaInstagram className="text-xl " />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
