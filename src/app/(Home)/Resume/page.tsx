"use client";
import LoadingAnimation from "@/components/ui/loadingAnimation/loading";
import { useEffect, useState } from "react";
import ConnectingResume from "./ConnectingPage";

const Resume = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading && <LoadingAnimation />}
      {!loading && (
        <>
          <ConnectingResume />
        </>
      )}
    </div>
  );
};

export default Resume;
