import React, { useState } from "react";
import Accordion from "./Accordion";
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
    <div className="w-72 bg-gray-50 text-gray-800 h-screen fixed shadow-lg overflow-y-auto hide-scrollbar">
      <h2 className="text-2xl font-bold p-4 text-center border-b border-gray-200">
        Customization Panel
      </h2>

      {sections.map((section) => (
        <Accordion
          key={section.name}
          title={section.name}
          isOpen={openAccordions.includes(section.name)}
          onToggle={() => handleAccordionToggle(section.name)}
        >
          {section.name === "Navbar" || section.name === "Footer" ? (
            <>
              <div className="flex items-center justify-between mb-4">
                <label className="text-gray-700 font-medium">
                  Background Color
                </label>
                <input
                  type="color"
                  value={section.backgroundColor}
                  onChange={(e) =>
                    section.onBackgroundColorChange(e.target.value)
                  }
                  className="w-6 rounded cursor-pointer bg-white"
                />
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <label className="block mb-2 text-gray-700 font-medium">
                    Links
                  </label>
                  <button
                    onClick={section.onAddLink}
                    className="text-blue-500 font-light hover:text-blue-700 transition-all"
                  >
                    Add Link
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-medium">
                  Logo
                </label>
                <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center space-y-3">
                  {section.logo ? (
                    <>
                      <img
                        src={section.logo}
                        alt="Logo"
                        className="h-24 w-24 object-cover rounded-md"
                      />
                      <button
                        onClick={() => section.onLogoChange(null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove Logo
                      </button>
                    </>
                  ) : (
                    <>
                      <label className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
                        Upload Logo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            section.onLogoChange(e.target.files[0])
                          }
                          className="hidden"
                        />
                      </label>
                      <p className="text-gray-500 text-sm">
                        Accepted formats: .png, .jpg, .jpeg
                      </p>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <ToggleSwitch
                label="Enable Section"
                enabled={section.enabled}
                onToggle={() => onSectionToggle(section.name)}
              />
            </>
          )}
        </Accordion>
      ))}
    </div>
  );
};

export default Sidebar;
