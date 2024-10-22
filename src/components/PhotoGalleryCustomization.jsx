import React, { useState } from "react";
import Slider from "./Slider";

const PhotoGalleryCustomization = ({ section, onPhotoGalleryChange }) => {
  const [images, setImages] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [borderRadius, setBorderRadius] = useState(0);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
    onPhotoGalleryChange({ images: [...images, ...uploadedImages] });
  };

  const handleLayoutChange = (e) => {
    setLayout(e.target.value);
    onPhotoGalleryChange({ layout: e.target.value });
  };

  const handleBorderRadiusChange = (value) => {
    setBorderRadius(value);
    onPhotoGalleryChange({ borderRadius: value });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onPhotoGalleryChange({ images: updatedImages });
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">
          Upload Images
        </label>
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center space-y-3">
          <label className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
            Upload Photos
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <p className="text-gray-500 text-sm">
            Accepted formats: .png, .jpg, .jpeg
          </p>
        </div>
        <div className="mt-4 space-y-2">
          {images.length > 0 &&
            images.map((image, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="h-16 w-16 object-cover rounded-md"
                  style={{ borderRadius: `${borderRadius}px` }}
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Layout Style Selection */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">
          Layout Style
        </label>
        <select
          value={layout}
          onChange={handleLayoutChange}
          className="w-full p-2 bg-white border border-gray-300 rounded-md"
        >
          <option value="grid">Grid</option>
          <option value="masonry">Masonry</option>
          <option value="carousel">Carousel</option>
        </select>
      </div>

      <Slider
        label="Border Radius"
        value={borderRadius}
        min={0}
        max={50}
        unit="px"
        onChange={(e) => handleBorderRadiusChange(Number(e.target.value))}
      />
    </div>
  );
};

export default PhotoGalleryCustomization;
