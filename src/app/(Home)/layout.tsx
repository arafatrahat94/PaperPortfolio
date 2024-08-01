import NavBar from "@/components/Shared/Nav";

const HomeLayout = ({ children }: any) => {
  return (
    <main>
      {/*-> Rahat code */}
      <>
        <NavBar />
        {children}
      </>
    </main>
  );
};

export default HomeLayout;
