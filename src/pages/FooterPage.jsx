import React from "react";
import "./FooterPage.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

const FooterPage = () => {
  return (
    <main id="techs" className="bg-gray-200 h-40 m-5 p-2 text-center pt-11">
      <button>Html</button>
      <button>Css</button>
      <button>Javascript</button>
      <button>Node.js</button>
      <button className="text-blue-500">React</button>
      <button>Tailwind</button>
      <button>PostgreSQL</button>
      <button>TypeOrm</button>
      <button>Vite</button>
      <button>PHP</button>
      <button>Laravel</button>
      <button>Pern Stack</button>

      <div className="text-center gap-6 flex justify-center mt-5">
        <a
          href="https://www.instagram.com/Yusran_uca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://www.github.com/YusranFrontEnd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </main>
  );
};

export default FooterPage;
