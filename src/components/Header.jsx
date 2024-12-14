import React from "react";

const Header = () => {
  const pdfUrl = "public/Yusran -Resume.pdf";

  return (
    <div className="flex justify-between  text-white  ">
      <img src="/linux.png" alt="Logo" width="60px" />

      <button className="bg-zinc-800 py-0 m-3 px-2 rounded text-xs hover:bg-gray-700">
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </button>
    </div>
  );
};

export default Header;
