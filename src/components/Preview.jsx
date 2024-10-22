import React from "react";
import Navbar from "./Navbar"; // Assuming this is where your Navbar component is located

const Preview = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <Navbar />
      <div className="p-4">
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Hero Section Preview
          </h2>
          {/* Placeholder for Hero Section */}
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Company Information Preview
          </h2>
          {/* Placeholder for Company Information */}
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Photo Gallery Preview
          </h2>
          {/* Placeholder for Photo Gallery */}
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Video Gallery Preview
          </h2>
          {/* Placeholder for Video Gallery */}
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Jobs Section Preview
          </h2>
          {/* Placeholder for Jobs Section */}
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Footer Preview</h2>
          {/* Placeholder for Footer */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
