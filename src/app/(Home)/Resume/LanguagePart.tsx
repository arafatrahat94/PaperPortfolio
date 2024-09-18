const LanguagePart = () => {
  return (
    <div className="px-5">
      <div className="flex items-center gap-x-1">
        <h1 className="font-bold dark:bg-dark-primary-color bg-light-primary-color px-2 text-dark-primary-color tracking-wider text-lg dark:text-light-primary-color">
          Language Proficiency
        </h1>
        <div className="h-[1px] bg-primary-color flex-grow"></div>
      </div>
      <p>
        <li className=" mt-2.5 text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color  ">
          Bengali (Mother tongue) <span className=" font-bold">:</span> Fluent
          &nbsp;in&nbsp;Both &nbsp;Verbal <br className="lg:hidden" />
          &nbsp; and &nbsp;Writing
        </li>
        <li className="  text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color ">
          English &nbsp; <span className=" font-bold">:</span>
          &nbsp; Fluent &nbsp; in &nbsp; Both &nbsp;Reading&nbsp; and
          &nbsp;Writing
        </li>
        <li className="  text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color ">
          Hindi &nbsp; <span className=" font-bold">:</span>
          &nbsp; Fluent &nbsp; in &nbsp; speaking
        </li>
      </p>
      <div className="flex my-5 items-center gap-x-1">
        <h1 className="font-bold dark:bg-dark-primary-color bg-light-primary-color px-2 text-dark-primary-color tracking-wider text-lg dark:text-light-primary-color">
          Achievements{" "}
        </h1>
        <div className="h-[1px] bg-primary-color flex-grow"></div>
      </div>{" "}
      <p>
        <li className=" mt-2.5 text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color  ">
          Mastered Full Stack Development with proficiency in both frontend and
          backend technologies
        </li>
        <li className=" mt-2.5 text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color  ">
          Developed a solid understanding of building and deploying enterprise
          grade applications.
        </li>
      </p>
    </div>
  );
};

export default LanguagePart;
