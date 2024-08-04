import useData from "@/hooks/useData";

const Stats = () => {
  const { Contact } = useData();
  return (
    <div className="mt-20">
      <h1 className="text-center text-5xl underline underline-offset-4 text-light-primary-color max-lg:dark:text-dark-primary-color max-lg:mb-4 lg:-mb-16 ">
        My{" "}
        <span className="text-light-secondary-color max-lg:dark:text-dark-primary-color">
          GitHub
        </span>{" "}
        Stats
      </h1>
      <div className="width bg-dark-primary-color ref={ref} mx-auto sm:p-10 py-8 sm:pt-20">
        <div className="flex flex-col sm:flex-row gap-[24px] justify-center max-w-[90%] lg:max-w-[92%] lg:h-[300px] mx-auto">
          <a
            href={`https://github.com/${Contact?.githubUser}`}
            target="_blank"
            rel="noreferrer"
            className="relative z-[5]"
          >
            <img
              style={{ filter: "grayscale(100%)" }}
              src={`https://github-profile-cards-nemo.vercel.app/api/cards/stats?username=${Contact?.githubUser}&amp;theme=thenemo`}
              alt="GitHub Contribution"
              className="mx-auto w-full lg:w-[100%] h-full"
            />
          </a>
          <a
            href={`https://github.com/${Contact?.githubUser}`}
            target="_blank"
            rel="noreferrer"
            className="relative z-[5]"
          >
            <img
              style={{ filter: "grayscale(100%)" }}
              src={`https://github-profile-cards-nemo.vercel.app/api/cards/profile-details?username=${Contact?.githubUser}&amp;theme=thenemo`}
              alt="GitHub Contribution"
              className="mx-auto w-full lg:w-[100%] h-full"
            />
          </a>
          <a
            href={`https://github.com/${Contact?.githubUser}`}
            target="_blank"
            rel="noreferrer"
            className="relative z-[5]"
          >
            <img
              style={{ filter: "grayscale(100%)" }}
              src={`https://github-profile-cards-nemo.vercel.app/api/cards/productive-time?username=${Contact?.githubUser}&amp;theme=thenemo&amp;utcOffset=8`}
              alt="GitHub Contribution"
              className="mx-auto w-full lg:w-[100%] h-full"
            />
          </a>
        </div>
        <a
          href={`https://github.com/${Contact?.githubUser}`}
          target="_blank"
          rel="noreferrer"
          className="relative z-[5]"
        >
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${Contact?.githubUser}&theme=react-dark&bg_color=dark&color=777777&line=181818&area_color=181818&area=true&point=575757&hide_border=true&hide_title=true&`}
            alt="GitHub Contribution"
            className="mx-auto  w-full lg:w-[92%] h-full"
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
