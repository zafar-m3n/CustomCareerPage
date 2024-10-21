import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [sections, setSections] = useState([
    { name: "Navbar", enabled: true },
    { name: "Hero Section", enabled: true },
    { name: "Company Information", enabled: true },
    { name: "Photo Gallery", enabled: false },
    { name: "Video Gallery", enabled: false },
    { name: "Jobs Section", enabled: true },
    { name: "Footer", enabled: true },
  ]);

  const handleSectionToggle = (sectionName) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.name === sectionName
          ? { ...section, enabled: !section.enabled }
          : section
      )
    );
  };

  return (
    <div className="flex">
      <Sidebar sections={sections} onSectionToggle={handleSectionToggle} />
      <div className="ml-64 p-8 w-full bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Career Page Preview</h1>
        {sections.map((section) =>
          section.enabled ? (
            <div
              key={section.name}
              className="mb-6 p-6 bg-white shadow-md rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.name}</h2>
              <p className="text-gray-600">
                Content for {section.name} goes here...
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default App;
