import Link from "next/link";

import BannerPart from "./BannerPart";
import CarrerGoal from "./CarrerGoal";
import EducationPart from "./EducationPart";
import { default as ExperiencePart } from "./ExperiencePart";
import LanguagePart from "./LanguagePart";
import SkillsPart from "./SkillsPart";
const ConnectingResume = () => {
  return (
    <div className="text-white max-w-4xl lg:mx-auto lg:m-5">
      <BannerPart />
      <CarrerGoal />
      <SkillsPart />
      <ExperiencePart />
      <EducationPart />
      <LanguagePart />
      {/* <SignaturePart /> */}
      <div className="py-12">
        <div className="isolate rounded-full flex items-center justify-center sm:justify-between duration-200">
          <Link
            className="font-semibold text-primary-color  rounded-l-full sm:rounded-full border-2 border-r-[1px] sm:border-2 border-light-primary-color  dark:border-dark-primary-color text-light-primary-color dark:text-dark-primary-color duration-200"
            href="/"
          >
            <button
              type="button"
              className="uppercase relative inline-flex items-center  focus:ring-2 px-6 py-3  rounded-r-none rounded-l-full sm:rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="-ml-1 mr-3 h-5 w-5 text-primary-color  cursor-pointer"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              HOME
            </button>
          </Link>
          <a
            className="font-semibold text-primary-color  rounded-r-full sm:rounded-full border-2 border-r-[2px] sm:border-2 border-light-primary-color  dark:border-dark-primary-color text-light-primary-color dark:text-dark-primary-color duration-200"
            target="_blank"
            download="ArafathHossainResume"
            href="https://drive.usercontent.google.com/u/0/uc?id=1byQJA6I0kTy7agzfj8V7j5cUmMzFlvNn&export=download"
          >
            <button
              type="button"
              className="uppercase relative inline-flex items-center px-6 py-3 focus:ring-2 rounded-l-none rounded-r-full sm:rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="-ml-1 mr-3 h-5 w-5 text-primary-color cursor-pointer"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
              </svg>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectingResume;
