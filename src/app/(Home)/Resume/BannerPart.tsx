import Image from "next/image";
import Link from "next/link";

const BannerPart = () => {
  return (
    <div className=" flex bg-primary-color/5 p-5">
      <div className="w-full  ">
        <h1 className="lg:text-4xl text-[18px] dark:text-dark-primary-color tracking-wider text-light-primary-color font-bold">
          MD ARAFATH HOSSAIN RAHAT
        </h1>
        <h1 className="lg:mt-1.5 text-sm lg:text-xl dark:text-dark-primary-color tracking-wider text-light-primary-color">
          MERN STACK DEVELOPER
        </h1>
        <div className="lg:flex-row flex flex-col lg:items-center  lg:mt-3">
          <Link
            href="mailto:arafatrahat94@gmail"
            rel="noreferrer"
            target="_blank"
            className="lg:text-base text-xs text-pretty font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color underline"
          >
            arafatrahat94@gmail.com
          </Link>{" "}
          <div className="h-8 lg:block hidden bg-primary-color mx-3 w-0.5"></div>
          <Link
            href="tel:+8801980389400"
            target="_blank"
            rel="noreferrer"
            className=" text-pretty lg:text-base text-xs font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color text-primary-color underline"
          >
            +8801980389400
          </Link>
        </div>
        <Link
          href="https://arafathhossain.vercel.app/"
          rel="noreferrer"
          target="_blank"
          className=" text-pretty text-xs absolute lg:text-base font-VarelaRound text-primary-color underline font-Space dark:text-dark-primary-color tracking-wider text-light-primary-color"
        >
          https://arafathhossain.vercel.app/
        </Link>
      </div>
      <div className="w-[25%] lg:w-[17%] lg:rounded-xl overflow-hidden">
        <Image
          alt=""
          src={"https://i.ibb.co/SxwVZTJ/74829-1.jpg"}
          width={500}
          height={500}
          className="w-full bg-transparent lg:rounded-xl h-full"
        ></Image>
      </div>
    </div>
  );
};

export default BannerPart;
