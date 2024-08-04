"use client";

import Hero from "@/components/PageWise/Home/Hero";
import HireMe from "@/components/PageWise/Home/HireMe";
import Projects from "@/components/PageWise/Home/Projects";
import Services from "@/components/PageWise/Home/Services";
import MySkills from "@/components/PageWise/Home/Skills";
import Stats from "@/components/PageWise/Home/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto  lg:px-10 px-5">
        <div
          className="max-w-7xl flex flex-col gap-y-10
         h-full w-full mx-auto"
        >
          <Services />
          <Projects />
          <MySkills />
          <Stats />
          <HireMe />
        </div>
      </main>
    </>
  );
}
