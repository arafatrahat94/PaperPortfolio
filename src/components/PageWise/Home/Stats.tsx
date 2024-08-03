const Stats = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-5xl underline underline-offset-4 text-light-primary-color dark:text-dark-primary-color lg:-mb-14 ">
        My{" "}
        <span className="text-light-secondary-color dark:text-dark-primary-color">
          GitHub
        </span>{" "}
        Stats
      </h1>
      <div className="width ref={ref} mx-auto sm:p-10 py-8 sm:pt-20">
        <div className="flex flex-col sm:flex-row gap-[24px] justify-center max-w-[90%] lg:max-w-[92%] lg:h-[300px] mx-auto">
          <a
            href="https://github.com/arafatrahat94"
            target="_blank"
            rel="noreferrer"
            className="relative z-[5]"
          >
            <img
              src="https://github-profile-cards-nemo.vercel.app/api/cards/stats?username=arafatrahat94&amp;theme=thenemo"
              alt="GitHub Contribution"
              className="mx-auto w-full lg:w-[100%] h-full"
            />
          </a>
          <a
            href="https://github.com/arafatrahat94"
            target="_blank"
            rel="noreferrer"
            className="relative z-[5]"
          >
            <img
              src="https://github-profile-cards-nemo.vercel.app/api/cards/profile-details?username=arafatrahat94&amp;theme=thenemo"
              alt="GitHub Contribution"
              className="mx-auto w-full lg:w-[100%] h-full"
            />
          </a>
          <a
            href="https://github.com/arafatrahat94"
            target="_blank"
            rel="noreferrer"
            className="relative z-[5]"
          >
            <img
              src="https://github-profile-cards-nemo.vercel.app/api/cards/productive-time?username=arafatrahat94&amp;theme=thenemo&amp;utcOffset=8"
              alt="GitHub Contribution"
              className="mx-auto w-full lg:w-[100%] h-full"
            />
          </a>
        </div>
        <a
          href="https://github.com/arafatrahat94"
          target="_blank"
          rel="noreferrer"
          className="relative z-[5]"
        >
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=arafatrahat94&amp;theme=react-dark&amp;bg_color=dark&amp;color=777777&amp;line=181818&amp;area_color=181818&amp;area=true&amp;point=575757&amp;hide_border=true"
            alt="GitHub Contribution"
            className="mx-auto dark:hidden w-full lg:w-[92%] h-full"
          />
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=arafatrahat94&amp;theme=react-dark&amp;bg_color=dark&amp;color=777777&amp;area_color=efebeb&amp;area=true&amp;line=efebeb&amp;point=575757&amp;hide_border=true"
            alt="GitHub Contribution"
            className="mx-auto dark:block hidden w-full lg:w-[92%] h-full"
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
