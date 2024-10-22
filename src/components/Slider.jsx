import React from "react";

const Slider = ({ label, value, min, max, onChange, unit = "" }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700 font-medium">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div className="flex justify-between mt-1 text-sm text-gray-600">
        <span>
          {min}
          {unit}
        </span>
        <span>
          {value}
          {unit}
        </span>
        <span>
          {max}
          {unit}
        </span>
      </div>
    </div>
  );
};

export default Slider;
