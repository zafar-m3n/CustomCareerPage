import React, { useRef, useEffect } from "react";

const Modal = ({ isOpen, onClose, onSave, title, children }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-start justify-center z-50 transition-opacity duration-300"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-full max-w-lg mt-10 shadow-lg transition-transform duration-300"
        style={{ transform: isOpen ? "scale(1)" : "scale(0.9)" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl">
            &times;
          </button>
        </div>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
