import React, { useState } from "react";
import Modal from "./Modal";

const NavbarCustomization = ({
  section,
  handleOpenModal,
  links,
  handleDeleteLink,
  handleEditLink,
  handleAddLink,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Background Color Picker */}
      <div className="flex items-center justify-between mb-4">
        <label className="text-gray-700 font-medium">Background Color</label>
        <input
          type="color"
          value={section.backgroundColor}
          onChange={(e) => section.onBackgroundColorChange(e.target.value)}
          className="w-6 rounded cursor-pointer bg-white"
        />
      </div>

      {/* Links Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <label className="block mb-2 text-gray-700 font-medium">Links</label>
          <button
            onClick={handleModalOpen}
            className="text-blue-500 font-light hover:text-blue-700 transition-all"
          >
            Add Link
          </button>
        </div>

        {links.length > 0 && (
          <ul className="mt-2">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md mb-2"
              >
                <span>{link.name}</span>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEditLink(index)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => handleDeleteLink(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Logo Upload Section */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">Logo</label>
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
                  onChange={(e) => section.onLogoChange(e.target.files[0])}
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

      {/* Modal for Adding Links */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onAddLink={handleAddLink}
      />
    </div>
  );
};

export default NavbarCustomization;
