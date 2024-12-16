import React from "react";
import { FiExternalLink } from "react-icons/fi";

const SideProject = () => {
  return (
    <section>
      <h2 className="mb-4">Side Project</h2>

      <div className="xs:flex  grid grid-cols-1 xs:gap-8">
        <span className="text-sm text-gray-400">2020 - present</span>

        <div>
          <div className="text-sm  font-semibold hover:underline">
            <a
              className="flex"
              href="http://web-hairbugx.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Barbershop Web
              <FiExternalLink
                style={{
                  marginTop: "2px",
                  marginLeft: "2px",
                }}
              />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Card service price list. <br />
            React • Vite • Tailwind • CSS •
          </p>
        </div>
      </div>

      {/* job 2 */}
      <div className="mt-5">
        <div className="xs:flex  grid grid-cols-1 xs:gap-8">
          <span className="text-sm text-gray-400 ">2023 - present</span>
          {/* Detail pekerjaan di sebelah kanan */}
          <div>
            <div className="text-sm  font-semibold hover:underline">
              <a
                className="flex"
                href="http://web-hairbugx.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Senior Frontendr{" "}
                <FiExternalLink
                  style={{
                    marginTop: "2px",
                    marginLeft: "2px",
                  }}
                />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Building Custom Invoice. <br />
              Vite • React • Tailwind • CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideProject;
