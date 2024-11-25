import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex justify-center items-center bg-gray-900 text-white gap-5"
    >
      <img
        src="/uu.jpg"
        alt="public"
        width="150px"
        style={{ clipPath: "circle()" }}
      />
      <div>
        Hi! I'm Yusran. "Welcome! Let’s create something amazing together."
        <p>Fullstack Developer</p>
      </div>
    </section>
  );
};

export default Home;
