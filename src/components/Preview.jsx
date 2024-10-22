import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CompanyInformation from "./CompanyInformation";

const Preview = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <CompanyInformation />
    </div>
  );
};

export default Preview;
