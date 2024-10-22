import React, { useState } from "react";
import Modal from "./Modal";

const FooterCustomization = ({
  section,
  footerLinks,
  handleAddFooterLink,
  handleDeleteFooterLink,
  handleEditFooterLink,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [linkName, setLinkName] = useState("");
  const [linkURL, setLinkURL] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setLinkName("");
    setLinkURL("");
  };

  const handleSaveLink = () => {
    handleAddFooterLink({ name: linkName, url: linkURL });
    handleModalClose();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <label className="text-gray-700 font-medium">Background Color</label>
        <input
          type="color"
          value={section.backgroundColor}
          onChange={(e) => section.onBackgroundColorChange(e.target.value)}
          className="w-6 rounded cursor-pointer bg-white"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <label className="text-gray-700 font-medium">Text Color</label>
        <input
          type="color"
          value={section.textColor}
          onChange={(e) => section.onTextColorChange(e.target.value)}
          className="w-6 rounded cursor-pointer bg-white"
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <label className="block mb-2 text-gray-700 font-medium">
            Footer Links
          </label>
          <button
            onClick={handleModalOpen}
            className="text-blue-500 font-light hover:text-blue-700 transition-all"
          >
            Add Link
          </button>
        </div>

        {footerLinks.length > 0 && (
          <ul className="mt-2">
            {footerLinks.map((link, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md mb-2"
              >
                <span>{link.name}</span>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEditFooterLink(index)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    onClick={() => handleDeleteFooterLink(index)}
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

      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">
          Footer Description
        </label>
        <textarea
          value={section.footerDescription}
          onChange={(e) => section.onFooterDescriptionChange(e.target.value)}
          placeholder="Enter footer description"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows="3"
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSaveLink}
        title="Add a Footer Link"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Link Name
          </label>
          <input
            type="text"
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
            placeholder="Enter link name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Link URL
          </label>
          <input
            type="url"
            value={linkURL}
            onChange={(e) => setLinkURL(e.target.value)}
            placeholder="Enter link URL"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </Modal>
    </div>
  );
};

export default FooterCustomization;
