import React from "react";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import Links from "./components/Links";
import Profile from "./components/Profile";
import SideProject from "./components/SideProject";

const App = () => {
  return (
    <section>
      {/* Header */}
      <header className="top-0 sticky bg-black">
        <Header />
      </header>

      <div className="bg-black text-white min-h-screen flex justify-around items-center">
        <div className="max-w-sm w-full px-1 mt-8">
          <Profile />
          <WorkExperience />
          <SideProject />
          <Links />
        </div>
      </div>
    </section>
  );
};

export default App;
