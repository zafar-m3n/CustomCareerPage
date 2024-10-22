import React, { useState } from "react";
import Slider from "./Slider";

const JobSectionCustomization = ({
  section,
  onLayoutChange,
  onBorderRadiusChange,
  onCardColorChange,
}) => {
  const [layout, setLayout] = useState("grid");
  const [borderRadius, setBorderRadius] = useState(8);
  const [cardColor, setCardColor] = useState("#ffffff");

  const handleLayoutChange = (e) => {
    const selectedLayout = e.target.value;
    setLayout(selectedLayout);
    onLayoutChange(selectedLayout);
  };

  const handleBorderRadiusChange = (value) => {
    setBorderRadius(value);
    onBorderRadiusChange(value);
  };

  const handleCardColorChange = (e) => {
    const selectedColor = e.target.value;
    setCardColor(selectedColor);
    onCardColorChange(selectedColor);
  };

  return (
    <div>
      {/* Layout Style Selection */}
      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-medium">
          Layout Style
        </label>
        <select
          value={layout}
          onChange={handleLayoutChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="grid">Standard Grid</option>
          <option value="compact">Minimalistic Compact</option>
          <option value="detailed">Detailed Card</option>
        </select>
      </div>

      {/* Border Radius Slider */}
      <div className="mb-4">
        <Slider
          label="Border Radius"
          value={borderRadius}
          min={0}
          max={50}
          onChange={(e) => handleBorderRadiusChange(Number(e.target.value))}
        />
      </div>

      {/* Card Background Color Picker */}

      <div className="flex items-center justify-between mb-4">
        <label className="text-gray-700 font-medium">
          Card Background Color
        </label>
        <input
          type="color"
          value={cardColor}
          onChange={handleCardColorChange}
          className="w-6 rounded cursor-pointer bg-white"
        />
      </div>
    </div>
  );
};

export default JobSectionCustomization;
