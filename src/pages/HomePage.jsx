import React from "react";

const handleGetContact = () => {
  window.open("yusran-cv.pdf", "_blank");
};
const HomePage = () => {
  return (
    <section className="grid grid-cols-1 text-center mt-5 gap-3 text-sm xxs:grid-cols-3 mx-10">
      <div className="max-w-xs p-5 bg-slate-200 rounded ">
        <h2 className="font-bold">Team Work </h2>
        <p>Team work collaboration for big project, single for small project</p>
      </div>

      <div className="max-w-xs p-5 bg-slate-200 rounded">
        <h2 className="font-bold">About</h2>
        <p>Base in Indonesia, Otodidact learning with base project learning.</p>
        <button
          className="bg-neutral-500 p-1 text-white mt-1 text-sm rounded-sm"
          onClick={handleGetContact}
        >
          Get CV
        </button>
      </div>

      <div className="max-w-xs p-5 bg-slate-200 rounded">
        <h2 className="font-bold">Specialist</h2>
        <p>
          prefer to React library, it make deep and variously problem solving.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
