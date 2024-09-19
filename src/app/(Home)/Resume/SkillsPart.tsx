const SkillsPart = () => {
  return (
    <div className="px-5">
      <div className="flex items-center gap-x-1">
        <h1 className="font-bold dark:bg-dark-primary-color bg-light-primary-color px-2 text-dark-primary-color tracking-wider text-lg dark:text-light-primary-color">
          SKILLS
        </h1>
        <div className="h-[1px] bg-primary-color flex-grow"></div>
      </div>

      <div className="my-2.5">
        <div className="flex items-center  gap-x-1">
          <h1 className="font-bold text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color uppercase ">
            Front End :
          </h1>
        </div>
        <div>
          <p className="text-justify font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color   text-xs lg:text-base mb-1">
            HTML, CSS, Tailwind, Bootstrap, DaisyUI, ShadCN, React Router,
            Aceternity, JavaScript, ReactJS, Next.js, TypeScript, Redux,
            Firebase
          </p>
        </div>
      </div>
      <div className="my-2.5">
        <div className="flex items-center  gap-x-1">
          <h1 className="font-bold text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color uppercase ">
            Back End :
          </h1>
        </div>
        <div>
          <p className="text-justify font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color text-xs lg:text-base mb-1">
            Node.js, Express.js, MongoDB (Mongoose), RESTful APIs, JWT,My Sql
          </p>
        </div>
      </div>
      <div className="my-2.5">
        <div className="flex items-center  gap-x-1">
          <h1 className="font-bold text-sm lg:text-base font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color uppercase ">
            Tools :
          </h1>
        </div>
        <div>
          <p className="text-justify font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color text-xs lg:text-base mb-1">
            Git, Github, VSCode, Figma, Vercel, Netlify, Postman, Slack, Notion
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPart;
