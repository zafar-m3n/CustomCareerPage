import React, { useState, useRef } from "react";

const Modal = ({ isOpen, onClose, onAddLink }) => {
  const modalRef = useRef(null);
  const [linkName, setLinkName] = useState("");
  const [linkURL, setLinkURL] = useState("");

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = () => {
    if (linkName && linkURL) {
      onAddLink({ name: linkName, url: linkURL });
      setLinkName("");
      setLinkURL("");
      onClose();
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-start justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-4 w-full max-w-lg shadow-lg mt-10"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add A Header Link</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl">
            &times;
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Link Name
          </label>
          <input
            type="text"
            placeholder="Link Name"
            value={linkName}
            onChange={(e) => setLinkName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Link URL
          </label>
          <input
            type="text"
            placeholder="Link URL"
            value={linkURL}
            onChange={(e) => setLinkURL(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 text-sm"
          >
            Add Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
