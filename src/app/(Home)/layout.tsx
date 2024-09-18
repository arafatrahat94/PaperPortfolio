"use client";
import NavBar from "@/components/Shared/Nav";
import LoadingAnimation from "@/components/ui/loadingAnimation/loading";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HomeLayout = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();
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
          {pathName !== "/Resume" && <NavBar />}

          {children}
        </>
      )}
    </main>
  );
};

export default HomeLayout;
