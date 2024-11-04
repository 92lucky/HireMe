import React, { useRef } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import FooterPage from "./pages/FooterPage";
import ServicePage from "./pages/ServicePage";
import "./index.css";

const App = () => {
  const homeRef = useRef(null);
  const techRef = useRef(null);
  const serviceRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  //get contact
  const handleGetContact = () => {
    window.location.href = "mailto:yyuussrraann1992@gmail.com";
  };

  return (
    <Router>
      <div>
        <nav className="flex justify-center items-center mb-5  ">
          <ul className="flex gap-5 p-2">
            <h1 className="text-orange-500 text-l font-extrabold">.Yusran</h1>
            <li className="hover:text-orange-500">
              <NavLink to="#" onClick={() => scrollToSection(homeRef)}>
                Home
              </NavLink>
            </li>

            <li className="hover:text-orange-500">
              <NavLink to="#" onClick={() => scrollToSection(projectRef)}>
                Project
              </NavLink>
            </li>

            <li className="hover:text-orange-500">
              <NavLink to="#" onClick={() => scrollToSection(serviceRef)}>
                Service
              </NavLink>
            </li>
            <li className="hover:text-orange-500">
              <NavLink to="#" onClick={() => scrollToSection(techRef)}>
                Tech
              </NavLink>
            </li>
          </ul>
        </nav>

        <section
          id="banner"
          className="bg-slate-800 w-3/4 text-white text-center m-auto h-96    "
          ref={homeRef}
        >
          <h1 className="text-white text-center p-12 font-semibold text-4xl ">
            Welcome To My Profile
          </h1>
          <p>Im .Yusran</p>
          <p>Fullstack Web Developer</p>
          <p>Freelancer & Company </p>
          <button
            className="rounded-sm p-2 font-semibold mt-2 bg-orange-500"
            onClick={handleGetContact}
          >
            Get Email
          </button>
        </section>
        <HomePage />

        <section ref={projectRef}>
          <ProjectPage />
        </section>

        <section ref={serviceRef}>
          <ServicePage />
        </section>
        <section ref={techRef}>
          <FooterPage />
        </section>
      </div>
    </Router>
  );
};

export default App;
