const ExperiencePart = () => {
  return (
    <div className="p-5">
      <div className="flex items-center gap-x-1">
        <h1 className="font-bold dark:bg-dark-primary-color bg-light-primary-color px-2 text-dark-primary-color tracking-wider text-lg dark:text-light-primary-color">
          Experience
        </h1>
        <div className="h-[1px] bg-primary-color flex-grow"></div>
      </div>
      <div className="flex justify-between">
        <h1 className="font-bold my-5 w-fit dark:bg-dark-primary-color bg-light-primary-color px-2 text-dark-primary-color tracking-wider dark:text-light-primary-color">
          MERN Stack Developer <br />
        </h1>
        <h1 className="font-bold my-5 w-fit dark:bg-dark-primary-color bg-light-primary-color px-2 text-dark-primary-color tracking-wider dark:text-light-primary-color">
          Aprill 2024 - Present
        </h1>
      </div>
      <div className="-mt-4 dark:text-dark-primary-color tracking-wider font-Space text-light-primary-color">
        Banao Tech, India (Remote)
      </div>
      <div className="mt-2.5 dark:text-dark-primary-color tracking-wider font-Space text-light-primary-color">
        <li>
          Spearheaded the development of web applications using cutting-edge
          technologies, including Express.js, MongoDB, Next.js, React.js, Redux,
          and RTK Query.
        </li>

        <li>
          Utilized Git and GitHub for version control and collaborative
          development, ensuring streamlined workflows and effective team
          coordination.
        </li>
        <li>
          Actively collaborated with cross-functional teams comprising
          developers, designers, and stakeholders to deliver high-quality
          solutions within project timelines. This involved effective
          communication, task delegation, and alignment of project objectives.
        </li>
        <li>
          Conducted requirement analysis to ensure project objectives were met.
        </li>
        <li>
          Contributed to the development of 1-2 enterprise-level projects,
          leading teams of 15-20 members in each project.
        </li>
      </div>
    </div>
  );
};

export default ExperiencePart;
