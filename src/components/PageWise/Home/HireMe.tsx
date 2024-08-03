const HireMe = () => {
  return (
    <div className="mt-10 mb-20">
      {/*-> Rahat code */}
      <div className="text-light-primary-color dark:text-dark-primary-color mb-20 text-center underline  text-[54px] font-medium max-sm:text-4xl">
        <span className="text-light-secondary-color dark:text-dark-primary-color/60">
          Hire
        </span>{" "}
        Me For Your Next{" "}
        <span className="text-light-secondary-color dark:text-dark-primary-color/60">
          Amazing
        </span>{" "}
        Project
      </div>
      <div className="max-w-[1280px] mx-auto max-lg:gap-14 gap-20 grid lg:grid-cols-2  ">
        <div className="flex max-lg:order-2 max flex-col">
          <div className="text-light-primary-color dark:text-dark-primary-color text-[40px] font-light font-Space mt-14 max-lg:text-justify max-lg:mt-5 max-lg:text-3xl leading-[52px]">
            Let’s make somthing new, different and more meaningful or make thing
            more visual or conceptual? Just say hello!
          </div>
          <div className="h-6 justify-start items-center gap-5 inline-flex max-lg:mt-20 mt-20 2xl:mt-[145px]">
            <div className="w-[22px] dark:border-dark-primary-color h-[0px] border border-[#333333]"></div>
            <div className="text-light-primary-color dark:text-dark-primary-color max-md:text-base text-xl font-light font-Space">
              <a href="tel:+8801980389400">+8801980389400</a>,{" "}
              <a href="tel:+8801571259354">+8801571259354</a>
            </div>
          </div>
          <div className="h-6 my-4 justify-start items-center gap-5 inline-flex">
            <div className="w-[22px] h-[0px] border dark:border-dark-primary-color border-[#333333]"></div>
            <div className="text-light-primary-color dark:text-dark-primary-color max-md:text-base text-xl font-light font-Space">
              <a href="mailto:arafatrahat94@gmail.com">
                arafatrahat94@gmail.com
              </a>
            </div>
          </div>
          <div className="h-12 justify-start items-center gap-5 inline-flex">
            <div className="w-[22px] h-[0px] border dark:border-dark-primary-color border-[#333333]"></div>
            <div className="text-light-primary-color dark:text-dark-primary-color max-md:text-base text-xl font-light font-Space">
              Dr Lokman House, Imam Nagar,
              <br />
              Chattogram, Bangladesh
            </div>
          </div>
        </div>
        <div className="bg-light-primary-color dark:bg-dark-primary-color flex max-lg:w-full flex-col gap-y-3 max-sm:gap-y-1 h-fit max-md:px-3 max-md:py-4 2xl:w-[90%] py-7 px-5">
          <div className="input-container ">
            <input
              placeholder="Your Name"
              className="input-field text-dark-primary-color dark:text-light-primary-color font-Space"
              type="text"
            />
            <label role="input-field" className="input-label font-Space">
              Your Name
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="Your email address"
              className="input-field text-dark-primary-color dark:text-light-primary-color font-Space"
              type="text"
            />
            <label role="input-field" className="input-label font-Space">
              Your email address
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="Your budget (Optional)"
              className="input-field text-dark-primary-color dark:text-light-primary-color font-Space"
              type="text"
            />
            <label role="input-field" className="input-label font-Space">
              Your budget (Optional)
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="Your project description"
              className="input-field text-dark-primary-color dark:text-light-primary-color font-Space"
              type="text"
            />
            <label role="input-field" className="input-label font-Space">
              Your project description
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="flex justify-end mt-2">
            <button className=" flex  w-[120px] relative right-3  items-center px-6 py-3 overflow-hidden font-medium transition-all bg-dark-primary-color dark:bg-light-primary-color rounded-md group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-light-secondary-color rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-light-secondary-color rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-dark-primary-color"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full  dark:bg-light-primary-color rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full  dark:text-white transition-colors duration-200 ease-in-out flex items-center gap-x-1  justify-center text-center group-hover:dark:text-white">
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
