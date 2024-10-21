import React from "react";

const Slider = ({ label, value, min, max, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-gray-600">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default Slider;
