import React from "react";
import { FiExternalLink } from "react-icons/fi";

const WorkExperience = () => {
  return (
    <section className="mt-10 mb-14   ">
      <h2 className="mb-3">Work Experience</h2>

      <div className="xs:flex  grid grid-cols-1  xs:mt-auto mb-5  xs:gap-12 ">
        <span className="text-sm text-gray-400">2021 - 2023</span>

        <div>
          <div className="text-sm font-semibold hover:underline">
            <a
              className="flex"
              href="http://invoice-generator-beta-eosin.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Junior Frontend{" "}
              <FiExternalLink
                style={{
                  marginTop: "2px",
                  marginLeft: "2px",
                }}
              />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Building Custom Invoice Generator. <br />
            React • Vite • Tailwind • jsPDF
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
