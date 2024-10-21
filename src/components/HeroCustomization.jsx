import React, { useState } from "react";

const HeroCustomization = ({
  section,
  onTitleChange,
  onDescriptionChange,
  onBackgroundColorChange,
  onImageChange,
}) => {
  const [title, setTitle] = useState(section.title || "");
  const [description, setDescription] = useState(section.description || "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onTitleChange(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    onDescriptionChange(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <label className="text-gray-700 font-medium">Background Color</label>
        <input
          type="color"
          value={section.backgroundColor}
          onChange={(e) => onBackgroundColorChange(e.target.value)}
          className="w-6 rounded cursor-pointer bg-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">Title</label>
        <input
          type="text"
          value={title}
          placeholder="Hero Title"
          onChange={handleTitleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">
          Description
        </label>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Hero Description"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">
          Background Image
        </label>
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center space-y-3">
          {section.image ? (
            <>
              <img
                src={section.image}
                alt="Background"
                className="h-24 w-24 object-cover rounded-md"
              />
              <button
                onClick={() => onImageChange(null)}
                className="text-red-500 hover:text-red-700"
              >
                Remove Image
              </button>
            </>
          ) : (
            <>
              <label className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onImageChange(e.target.files[0])}
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
    </div>
  );
};

export default HeroCustomization;
