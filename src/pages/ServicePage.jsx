import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const services = [
  {
    title: "Frontend",
    description: "Building attractive and responsive user interfaces.",
  },
  {
    title: "Backend",
    description: "Managing servers and databases for applications.",
  },
  {
    title: "DevOps",
    description:
      "Automating and integrating development and operations processes.",
  },
  {
    title: "Database",
    description: "Designing and managing efficient databases.",
  },
];

const ServicePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextService,
    onSwipedRight: prevService,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      style={{
        width: "50%",
        margin: "auto",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1 className="text-center mb-5 font-bold">Services</h1>
      <div
        style={{
          display: "flex",
          transition: "transform 0.3s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {services.map((service, index) => (
          <div
            className="bg-slate-200"
            key={index}
            style={{
              minWidth: "100%",
              padding: "20px",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <h3 className="font-bold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Navigasi Manual */}
      <button
        className="bg-orange-500"
        onClick={prevService}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "3px",
          color: "white",
        }}
      >
        Prev
      </button>
      <button
        className="bg-orange-500"
        onClick={nextService}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "3px",
          color: "white",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ServicePage;
