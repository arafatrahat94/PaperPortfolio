import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousal/Carousal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";

const ProjectsCard = ({ index, datas }: any) => {
  console.log(datas);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(datas?.images?.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const [newHeight, setHeight] = React.useState(0 as number);
  useEffect(() => {
    const contentElement = document.getElementById("content");
    if (contentElement && window.innerWidth > 768) {
      const newHeight = contentElement.offsetHeight;
      console.log("Content Height:", newHeight); // Ensure this logs a valid height
      setHeight(newHeight);
    } else {
      setHeight(document.getElementById("content2")?.offsetHeight as number);
    }
  }, [window.innerWidth]);

  return (
    <div className="my-10">
      {/*-> Rahat code */}
      <div
        className={` min-h-[292px] w-[90%] grid max-md:grid-cols-1 max-md:w-full grid-cols-3 border-black mx-auto  md:gap-x-5`}
      >
        <div
          className={`${
            index % 2 === 0 ? "md:order-1" : "md:order-2"
          } w-full h-full min-h-[292px]   flex-grow `}
        >
          <Carousel
            id="content2"
            setApi={setApi}
            className="w-full  flex items-center h-full"
          >
            <CarouselContent className="w-full h-full object-cover bg-black">
              {datas?.images?.map((item: any, index: number) => (
                <CarouselItem
                  style={{ height: newHeight }}
                  className={`w-full  max-md:h-full object-cover `}
                  key={index}
                >
                  <Image
                    src={item}
                    alt=""
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div
          id="content"
          className={`${
            index % 2 === 0 ? "md:order-2" : "md:order-1"
          } relative col-span-2 max-md:p-5 border dark:border-dark-primary-color/5 border-light-primary-color/5 p-10 w-full  h-full`}
        >
          <div className="flex justify-end mb-4 md:hidden">
            <div className="md:absolute max-md:w-fit max-md:px-3 max-md:relative max-md:top-0 top-5 max-md:left-0 dark:text-light-primary-color dark:bg-dark-primary-color  right-5 bg-light-primary-color text-dark-primary-color p-2 font-Space flex items-center gap-x-2">
              {datas?.techStack === "ReactJs" ? (
                <RiReactjsLine className="text-xl" />
              ) : (
                <RiNextjsLine className="text-xl" />
              )}
              {datas?.techStack}
            </div>
          </div>
          <div className="md:absolute max-md:w-fit max-md:px-3 max-md:relative max-md:top-0 top-5 max-md:left-0 md:flex right-5 bg-light-primary-color text-dark-primary-color p-2 font-Space hidden dark:text-light-primary-color dark:bg-dark-primary-color  items-center gap-x-2">
            {datas?.techStack === "ReactJs" ? (
              <RiReactjsLine className="text-xl" />
            ) : (
              <RiNextjsLine className="text-xl" />
            )}
            {datas?.techStack}
          </div>
          <h1 className="text-3xl font-Space">{datas?.title}</h1>
          <div className="flex items-center max-lg:flex-col max-lg:items-start gap-x-2">
            <h1 className="text-xl mt-1 font-Space">Role: {datas?.role}</h1>
            <span className="font-sans font-bold">|</span>
            <h1 className="text-xl mt-1 font-Space">
              Type: {datas?.projectType}
            </h1>
          </div>
          <p className="font-Space my-3">
            Technologies :{" "}
            {datas?.technologies.map((item: any, i: any) => (
              <span key={i}> {item},</span>
            ))}
          </p>
          <p className="font-Space">{datas?.description}</p>
          <div className="h-[50px] text-3xl items-center flex justify-between mt-5  relative -bottom-5 -right-5 max-md:right-0 max-md:-bottom-2  flex-grow flex-1  ">
            <div className="py-2 -ml-5 max-md:ml-0 text-center text-sm text-muted-foreground">
              Github repo - {datas?.githubRepo[0]}
            </div>
            <Link href={datas?.link} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkSquareAlt />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
