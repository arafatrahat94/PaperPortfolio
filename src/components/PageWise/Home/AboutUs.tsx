import Image from "next/image";
import img from "../../../assets/svg/aboutUs.png";
const AboutUs = () => {
  return (
    <div className="relative my-20">
      <h1 className="text-5xl text-light-primary-color dark:text-dark-primary-color text-center underline mb-10 font-bold tracking-wide">
        About Me
      </h1>
      {/*-> Rahat code */}
      <div className=" max-md:gap-0 max-lg:gap-10  max-lg:grid-cols-1 grid  grid-cols-2">
        <div className="h-fit w-full max-md:w-[85%]  max-md:h-[80%] mx-auto ">
          <Image
            src={img}
            alt="img"
            className=" h-[350px] w-full flex justify-center object-contain"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="font-Space  justify-center">
          <>
            This is <span className="font-bold">Md Arafath Hossain Rahat</span>,
          </>
          a Web Application Developer residing in{" "}
          <span className="font-bold">Chittagong</span>,{" "}
          <span className="font-bold">Bangladesh</span>
          .
          <br />
          <br />I started my development journey from{" "}
          <span className="font-bold">January 2023</span>. Within this period of
          time I have been trying to explore and implement stuffs regarding
          development as far as I can and sharpening my skills.
          <br />
          Recently from <span className="font-bold">2nd April 2024</span>, I
          started working remotely in{" "}
          <span className="font-bold">Across The Globe, Banao Tech</span>{" "}
          company as <span className="font-bold">Mern Stack developer.</span>
          <br />
          <br />
          From <span className="font-bold">January 2021</span>, I am persuing
          graduation in <span className="font-bold">BA Honors English</span>{" "}
          from <span className="font-bold">National University Bangladesh</span>
          . Within these years I have been being familiar with many programming
          languages and technologies. Beside this I have done some projects in
          MERN Stack Web App for personal purpose. I would like to see myself as
          a magnificent software engineer in near future.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
