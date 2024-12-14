import React from "react";

const WorkExperience = () => {
  return (
    <section className="mt-10 mb-14   ">
      <h2 className="mb-3">Work Experience</h2>

      <div className="xs:flex  grid grid-cols-1  xs:mt-auto mb-5  xs:gap-8 ">
        <span className="text-sm text-gray-400">2021 - present</span>

        <div>
          <div className="text-sm font-semibold hover:underline">
            <a
              href="http://invoice-generator-beta-eosin.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Junior Frontend
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
