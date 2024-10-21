import React, { useState } from "react";
import Accordion from "./Accordion";
import Slider from "./Slider";
import ToggleSwitch from "./ToggleSwitch";

const Sidebar = ({ sections, onSectionToggle }) => {
  const [openAccordions, setOpenAccordions] = useState([]);

  const handleAccordionToggle = (sectionName) => {
    setOpenAccordions((prevOpenAccordions) => {
      if (prevOpenAccordions.includes(sectionName)) {
        return prevOpenAccordions.filter((name) => name !== sectionName);
      } else {
        return [...prevOpenAccordions, sectionName];
      }
    });
  };

  return (
    <div className="w-72 bg-white text-gray-800 h-screen fixed shadow-lg overflow-y-auto hide-scrollbar">
      <h2 className="text-xl font-bold p-4 text-center">Customization Panel</h2>

      {sections.map((section) => (
        <Accordion
          key={section.name}
          title={section.name}
          isOpen={openAccordions.includes(section.name)}
          onToggle={() => handleAccordionToggle(section.name)}
        >
          <ToggleSwitch
            label="Enable Section"
            enabled={section.enabled}
            onToggle={() => onSectionToggle(section.name)}
          />

          <Slider
            label="Size"
            value={section.size || 16}
            min={12}
            max={64}
            onChange={(e) => console.log(e.target.value)}
          />
        </Accordion>
      ))}
    </div>
  );
};

export default Sidebar;
