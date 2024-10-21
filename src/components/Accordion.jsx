import React from "react";

const Accordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between py-3 px-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition duration-200 rounded-md shadow-sm"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        <span className="text-gray-800">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-2 p-4 bg-white text-sm text-gray-700 rounded-md shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
