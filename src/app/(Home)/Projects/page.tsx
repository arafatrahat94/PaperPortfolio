"use client";
import ProjectsCard from "@/components/PageWise/Home/ProjectsCard";
import useData from "@/hooks/useData";

const Projects = () => {
  const { Projects: data } = useData();
  return (
    <div className="my-10">
      {/*-> Rahat code */}
      <h1 className="text-5xl underline mb-10 text-center">
        <span>Projects</span> I have done
      </h1>
      {data?.length > 0 &&
        data.map((item: any, i: any) => (
          <ProjectsCard index={i} datas={item} key={i} />
        ))}
    </div>
  );
};

export default Projects;
