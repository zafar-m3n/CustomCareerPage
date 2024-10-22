import React, { useRef, useEffect, useState } from "react";

const Accordion = ({ title, isOpen, onToggle, children }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="">
      <div
        className="flex items-center justify-between py-3 px-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition duration-200 shadow-sm"
        onClick={onToggle}
      >
        <span className="text-md font-medium text-gray-800">{title}</span>
        <span className="text-gray-800">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? `${height}px` : "0" }}
      >
        <div className="mt-2 p-4 bg-white text-sm text-gray-700 rounded-md shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
