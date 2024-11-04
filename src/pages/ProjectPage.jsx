import React from "react";

const ProjectPage = () => {
  return (
    <>
      <h1 className="text-center font-bold mt-24">
        My Client Published Project
      </h1>
      <section className="mt-20 bg-gray-200 h-auto grid grid-cols-1  xxs:grid-cols-3  gap-8  p-5 ">
        <div className="relative inline-block group inset-0">
          <button className="bg-zinc-800 mb-2 p-1 text-white">
            <a className="items-center" href="https://web-hairbugx.vercel.app/">
              Demo
            </a>
          </button>
          <img width={300} src="capture.png" alt="web" />
          <div
            className="absolut inset-0 flex items-center  justify-center bg-black sm:w-72 h-14
bg-opacity-70 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p>Barbershop : React,Vite,Tailwind</p>
          </div>
        </div>

        <div className="relative inline-block group inset-0">
          <button className="bg-zinc-800 mb-2 p-1 text-white">
            <a
              href="https://invoice-generator-beta-eosin.vercel.app/"
              target="blank"
            >
              Demo
            </a>
          </button>
          <img width={300} src="Invoice.png" alt="web" />
          <div
            className="absolut inset-0 flex items-center  justify-center bg-black sm:w-72 h-14
bg-opacity-70 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p>Generator Invoice : React,Vite</p>
          </div>
        </div>
        <div className="relative inline-block group inset-0">
          <button className="bg-zinc-800 mb-2 p-1 text-white">Demo</button>
          <img width={300} src="capture.png" alt="web" />
          <div
            className="absolut inset-0 flex items-center  justify-center bg-black sm:w-72 h-14
bg-opacity-70 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p>Ecommerce : coming soon</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
