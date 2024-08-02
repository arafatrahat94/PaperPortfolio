"use client";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import darklogo from "../../assets/dark.png";
import logo from "../../assets/light.png";
import "./Nav.css";
const Navbar = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const { setTheme, resolvedTheme } = useTheme();

  // Initialize theme based on localStorage only on the client side
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  // Handle click outside to close the menu
  useEffect(() => {
    if (!isOpen && !isOpen2) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setTimeout(() => {
          setIsOpen2(false);
        }, 200);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isOpen2]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex relative bg-black-100 justify-between w-full items-center overflow-hidden mx-auto sm:p-5 p-5 h-[75px] ">
      {/*-> Rahat code */}
      <div className="max-md:scale-90  flex dark:hidden max-md:-ms-4">
        <Image
          src={logo}
          className="h-[60px] w-fit"
          alt="logo"
          width={500}
          height={500}
        />
        <h1 className="relative bg-red-500  text-3xl">
          <span className="bottom-0 absolute h-fit dark:text-dark-primary-color text-light-primary-color ">
            Arafath
          </span>
        </h1>
      </div>
      <div className="max-md:scale-90  dark:flex hidden max-md:-ms-4">
        <Image
          src={darklogo}
          className="h-[60px] w-fit"
          alt="logo"
          width={500}
          height={500}
        />
        <h1 className="relative bg-red-500  text-3xl">
          <span className="bottom-0 absolute h-fit dark:text-dark-primary-color text-light-primary-color ">
            Arafath
          </span>
        </h1>
      </div>
      <div className=" max-xl:hidden gap-x-10 justify-between flex items-center h-full">
        <CustomButton className={"text-xl"} path="/">
          Hello
        </CustomButton>
        <CustomButton className={"text-xl"} path="/GCamUpdates">
          About
        </CustomButton>
        <CustomButton className={"w-[120px] text-xl"} path="/ConfigFiles">
          Experience
        </CustomButton>
        <CustomButton className={"w-[120px] text-xl"} path="/PhotoGallery">
          Projects
        </CustomButton>

        <div className="">
          <label className="switch">
            <span className="sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g className="fill-black dark:fill-white">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                </g>
              </svg>
            </span>
            <span className="moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
            </span>
            <input
              onChange={handleThemeChange}
              type="checkbox"
              className="input"
              checked={resolvedTheme === "dark"}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button
          className={
            "border-2 py-1 xl:py-1.5 px-6 xl:text-lg hover:bg-light-primary-color dark:hover:bg-dark-primary-color dark:hover:text-light-primary-color dark:border-dark-primary-color dark:text-dark-primary-color hover:text-dark-primary-color transform duration-300 rounded font-Space uppercase text-light-primary-color border-light-primary-color"
          }
        >
          Contact
        </button>
      </div>

      {/* mobile Navebar */}
      <div
        role="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsOpen2(!isOpen2);
        }}
        className="xl:hidden"
      >
        <div className="switch2">
          <input checked={isOpen} type="checkbox" />
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen2 ? "h-screen w-screen opacity-100 " : "opacity-0"
        } fixed z-50 overflow-hidden top-0 left-0 bg-black/90`}
      >
        <div
          ref={divRef}
          className={`${
            isOpen ? "top-0" : "-top-[120%]"
          } absolute transform duration-700 bg-background w-full border-s-2  p-4 border-[#575757] h-full`}
        >
          <div className="w-full flex justify-center z-50 min-h-screen flex-col h-full ">
            <div
              role="button"
              className="xl:hidden px-4 absolute z-50 top-5 right-0 left-0 w-full flex items-center justify-between"
            >
              <label className="switch scale-[200%]">
                <span className="sun">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g className="fill-black dark:fill-white">
                      <circle r="5" cy="12" cx="12"></circle>
                      <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                    </g>
                  </svg>
                </span>
                <span className="moon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                  </svg>
                </span>
                <input
                  onChange={handleThemeChange}
                  type="checkbox"
                  className="input"
                  checked={resolvedTheme === "dark"}
                />
                <span className="slider"></span>
              </label>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                  setTimeout(() => {
                    setIsOpen2(!isOpen2);
                  }, 400);
                }}
                className="switch2"
              >
                <input checked={isOpen} type="checkbox" />
                <div>
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                  <span className="line-3"></span>
                </div>
              </div>
            </div>

            <div className="h-[500px] mt-10 z-50 relative flex flex-col">
              <CustomButton className={"text-3xl "} path="/">
                Hello
              </CustomButton>
              <CustomButton className={"text-3xl "} path="/GCamUpdates">
                About
              </CustomButton>
              <CustomButton className={"text-3xl"} path="/ConfigFiles">
                Experience
              </CustomButton>
              <CustomButton className={"text-3xl"} path="/PhotoGallery">
                Projects
              </CustomButton>
            </div>
            <div className="h-[60px] flex justify-center items-center mt-10 gap-x-7">
              <div className=" text-5xl w-[55px] hover:scale-110 transform duration-500 h-[55px] text-light-primary-color dark:text-dark-primary-color rounded">
                <FaGithub />
              </div>
              <div className=" text-5xl w-[55px] hover:scale-110 transform duration-500 h-[55px] text-light-primary-color dark:text-dark-primary-color rounded">
                <IoMdMail />
              </div>
              <div className=" text-5xl w-[55px] hover:scale-110 transform duration-500 h-[55px] text-light-primary-color dark:text-dark-primary-color rounded">
                <FaLinkedinIn />
              </div>
              <div className=" text-5xl w-[55px] hover:scale-110 transform duration-500 h-[55px] text-light-primary-color dark:text-dark-primary-color rounded">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
