import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";

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
      <div className="ml-72 p-8 w-full bg-gray-50 min-h-screen">
        <Preview />
      </div>
    </div>
  );
};

export default App;
