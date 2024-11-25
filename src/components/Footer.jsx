import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 h-1/2 grid grid-cols-2 sm:grid-cols-3 p-5 gap-8 ">
      {/* Tech Section */}
      <div className="mt-1 m-5">
        <h2>Tech</h2>
        <ul className="list-disc">
          <li>React/React Native</li>
          <li>Tailwind/Bootstrap</li>
          <li>Postgre/Mongoo</li>
          <li>Express/Next</li>
          <li>TypeOrm</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-1 m-5 text-blue-400">
        <h2 className="text-white">Contact</h2>
        <ul className="list-disc">
          <li>
            <a href="mailto:yyuussrraann1992@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="http://www.instagram.com/yusran_uca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="http://www.github.com/YusranFrontEnd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="http://www.youtube.com/@Yusran_Uca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>

      {/* Services Section */}
      <div className="mt-1 m-5">
        <h2>Services</h2>
        <ul className="list-disc">
          <li>Front-end</li>
          <li>Back-end</li>
          <li>DevOps & Deployment</li>
          <li>Testing & Debugging</li>
        </ul>
      </div>

      {/* Document Section */}
      <div className="mt-1 m-5 text-blue-400">
        <h2 className="text-white">Document</h2>
        <ul className="list-disc">
          <li>
            <a href="/yusran-cv.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
          <li>Certificate</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
