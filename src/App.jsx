import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="font-sans bg-gray-900 text-white">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
