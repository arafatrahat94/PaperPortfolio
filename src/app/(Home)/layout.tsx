"use client";
import NavBar from "@/components/Shared/Nav";
import LoadingAnimation from "@/components/ui/loadingAnimation/loading";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const HomeLayout = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  console.log(theme);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <main>
      {loading && <LoadingAnimation />}
      {!loading && (
        <>
          <div className="max-lg:hidden">
            {" "}
            <AnimatedCursor
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              innerStyle={{
                backgroundColor: theme.theme === "dark" ? "white" : "black",
              }}
              outerStyle={{
                border: `3px solid ${
                  theme.theme === "dark" ? "white" : "black"
                }`,
              }}
            />
          </div>
          <NavBar />
          {children}
        </>
      )}
    </main>
  );
};

export default HomeLayout;
