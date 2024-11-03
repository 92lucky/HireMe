import React from "react";

const handleGetContact = () => {
  window.open("yusran-cv.pdf", "_blank");
};
const HomePage = () => {
  return (
    <section id="about" className="grid grid-cols-3 text-center mt-5 ml-12  ">
      <div className="max-w-xs p-5 bg-slate-200 rounded ">
        <h2 className="font-bold">Simple </h2>
        <p>
          Simple design and eficient logic , a little creativity result a
          powerfull concept.
        </p>
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
