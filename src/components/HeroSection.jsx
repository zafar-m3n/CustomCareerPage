import React from "react";
import backgroundImage from "../assets/hero-bg.jpg";

const HeroSection = () => {
  const heroConfig = {
    title: "Welcome to Our Company",
    description:
      "We are committed to excellence and delivering the best services to our clients.",
    bgColor: "#f0f5f9",
    image: backgroundImage,
  };

  return (
    <div
      className="relative flex items-center justify-center text-center"
      style={{
        backgroundColor: heroConfig.bgColor,
        backgroundImage: `url(${heroConfig.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">{heroConfig.title}</h1>
        <p className="text-lg">{heroConfig.description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
