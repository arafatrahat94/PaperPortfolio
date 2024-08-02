"use client";
import NavBar from "@/components/Shared/Nav";
import LoadingAnimation from "@/components/ui/loadingAnimation/loading";
import { useEffect, useState } from "react";

const HomeLayout = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
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
          <NavBar />
          {children}
        </>
      )}
    </main>
  );
};

export default HomeLayout;
