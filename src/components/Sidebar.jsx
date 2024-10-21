import React from "react";

const SectionToggle = ({ title, enabled, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm font-medium">{title}</span>
      <input
        type="checkbox"
        checked={enabled}
        onChange={onToggle}
        className="toggle-checkbox"
      />
    </div>
  );
};

const Sidebar = ({ sections, onSectionToggle }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-6 fixed">
      <h2 className="text-xl font-bold mb-6">Customization Panel</h2>

      <div>
        <h3 className="font-semibold text-md mb-4">Sections</h3>
        {sections.map((section) => (
          <SectionToggle
            key={section.name}
            title={section.name}
            enabled={section.enabled}
            onToggle={() => onSectionToggle(section.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
