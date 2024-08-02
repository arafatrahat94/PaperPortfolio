const Services = () => {
  return (
    <>
      <div className="mt-10 grid lg:gap-5 xl:gap-10 gap-10 lg:grid-cols-2">
        {/*-> Rahat code */}
        <div>
          <h1 className="text-light-primary-color dark:text-dark-primary-color tracking-wider text-[64px] font-bold underline leading-[77.89px]">
            Services I<br />
            Offer
          </h1>
          <div className=" text-light-primary-color dark:text-dark-primary-color  max-md:text-justify mt-3 text-2xl max-md:text-base font-Space">
            As a skilled web developer, I specialize in bringing your digital
            vision to life with expert precision and creativity. My approach is
            rooted in a deep understanding of both the technical and aesthetic
            aspects of web development. I am dedicated to delivering
            high-quality, customized solutions that meet your unique business
            needs and objectives.
          </div>
        </div>
        <div>
          <div className="w-full py-5 max-md:px-0 px-5 border-y-2 border-light-primary-color  dark:border-dark-primary-color flex items-center ">
            <div>
              <div className="text-light-primary-color dark:text-dark-primary-color text-[55px] font-light font-Space max-md:text-5xl leading-[77.89px]">
                Web Design
              </div>
              <div className="text-justify max-md:mt-3 text-light-primary-color dark:text-dark-primary-color text-xl max-md:text-base font-normal font-Space">
                I specialize in creating visually captivating and intuitive
                websites that reflect your brand’s identity and values. My
                design process begins with a thorough understanding of your
                business goals and target audience.
              </div>
            </div>
          </div>
          <div className="w-full max-md:px-0 py-5 px-5  border-light-primary-color  dark:border-dark-primary-color flex items-center ">
            <div>
              <div className="text-light-primary-color dark:text-dark-primary-color text-[55px] font-light font-Space max-md:text-5xl text-nowrap max-xl:text-wrap leading-[77.89px]">
                Web Development
              </div>
              <div className=" max-md:mt-3 max-md:text-base text-light-primary-color dark:text-dark-primary-color text-justify text-xl font-normal font-Space">
                I transform your web design into a fully functional,
                high-performance website. My development process involves
                building responsive, scalable, and secure websites tailored to
                your specific needs.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-10 max-md:px-0 py-5 px-5 border-y-2 border-light-primary-color  dark:border-dark-primary-color flex items-center ">
        <div>
          <div className="text-light-primary-color dark:text-dark-primary-color text-[55px] font-light font-Space max-md:text-5xl leading-[77.89px]">
            Maintenance & Support
          </div>
          <div className=" text-light-primary-color dark:text-dark-primary-color max-md:mt-3 text-xl font-normal max-md:text-base font-Space max-md:text-justify">
            I offer ongoing maintenance and support to keep your website running
            smoothly and securely. From regular updates and backups to
            troubleshooting and performance optimization, I ensure that your
            site remains in top condition. My support services help prevent
            potential issues and ensure that your website continues to meet your
            evolving business needs.
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
