import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ShowCase = () => {
  return (
    <section className="mt-10 mb-14   ">
      <h2 className="mb-3">Skill Set</h2>

      <div className="xs:flex  grid grid-cols-1  xs:mt-auto mb-5  xs:gap-10 ">
        <span className="text-sm text-gray-400">2025-Update</span>

        <div>
          <div className="text-sm font-semibold hover:underline">
            <a
              className="flex"
              href="http://github.com/Yusran-Code/RestfullApi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Golang Back End{" "}
              <FiExternalLink
                style={{
                  marginTop: "2px",
                  marginLeft: "2px",
                }}
              />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Restfull Api & Database Integration. <br />
            Gorm • GIn • Postgres
          </p>
        </div>
      </div>

      <div className="xs:flex  grid grid-cols-1  xs:mt-auto mb-5  xs:gap-10 ">
        <span className="text-sm text-gray-400">2025-Update</span>

        <div>
          <div className="text-sm font-semibold hover:underline">
            <a
              className="flex"
              href="http://github.com/Yusran-Code/Authorization"
              target="_blank"
              rel="noopener noreferrer"
            >
              Golang Back End{" "}
              <FiExternalLink
                style={{
                  marginTop: "2px",
                  marginLeft: "2px",
                }}
              />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Authenticazion & Authorization. <br />
            JWTToken • GIn • Postgres
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
