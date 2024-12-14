import React from "react";

const WorkExperience = () => {
  return (
    <section className="mt-10  ">
      <h2 className="mb-4">Work Experience</h2>
      <div>
        <div className="flex gap-10">
          <span className="text-sm text-gray-400">2021 - present</span>

          <div>
            <div className="text-sm font-semibold hover:underline">
              <a
                href="http://invoice-generator-beta-eosin.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Junior Frontend
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Building Custom Invoice Generator * <br />
              React • Vite • Tailwind • jsPDF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
