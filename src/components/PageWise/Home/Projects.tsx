import useData from "@/hooks/useData";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const { Projects: data } = useData();
  console.log(data);
  return (
    <div id="Projects" className="relative h-full ">
      {/*-> Rahat code */}
      <h1 className="text-5xl underline mb-10 text-center">
        <span>Projects</span> I have done
      </h1>
      {data?.length > 0 &&
        data
          ?.slice(0, 3)
          .map((item: any, i: any) => (
            <ProjectsCard index={i} datas={item} key={i} />
          ))}
      <Link
        href="/Projects"
        className="w-fit ms-auto me-14 max-md:top-0 top-5 max-md:left-0 md:flex right-5 bg-light-primary-color focus:bg-dark-primary-color focus:text-light-primary-color focus:dark:bg-light-primary-color focus:dark:text-dark-primary-color dark:text-light-primary-color dark:bg-dark-primary-color text-dark-primary-color p-2 font-Space hidden items-center gap-x-2"
      >
        View All <IoIosArrowDropright className="text-xl" />
      </Link>
    </div>
  );
};

export default Projects;
