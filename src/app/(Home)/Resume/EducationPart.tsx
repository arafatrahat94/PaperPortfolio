const EducationPart = () => {
  return (
    <div className="p-5">
      <div className="flex items-center gap-x-1">
        <h1 className="font-bold dark:bg-dark-primary-color bg-light-primary-color px-2 text-dark-primary-color tracking-wider text-lg dark:text-light-primary-color">
          EDUCATION
        </h1>
        <div className="h-[1px] bg-primary-color flex-grow"></div>
      </div>
      <div className="mt-2">
        <h1 className="font-bold  text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color uppercase">
          BA Honors :
        </h1>
        <li className=" text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color ">
          Institute <span className="">:</span> National&nbsp; University&nbsp;
          Bangladesh
        </li>
        <li className=" text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color">
          Subject <span className="">:</span> English
        </li>
        <li className=" text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color">
          JANUARY 2021 <span className="">–</span> CURRENT (2nd year)
        </li>
      </div>
      <div className="mt-2">
        <h1 className="font-bold  text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color uppercase">
          MERN Stack Course (6 Month) :
        </h1>
        <li className=" text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color ">
          Institute <span className="">:</span> Programming Hero, Dhaka,
          Bangladesh
        </li>

        <li className=" text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color">
          October 2023 - March 2024
        </li>
      </div>
    </div>
  );
};

export default EducationPart;
