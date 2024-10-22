import React, { useState } from "react";
import Slider from "./Slider";

const VideoGalleryCustomization = ({ section, onVideoGalleryChange }) => {
  const [videos, setVideos] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [borderRadius, setBorderRadius] = useState(0);

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    const uploadedVideos = files.map((file) => URL.createObjectURL(file));
    setVideos((prevVideos) => [...prevVideos, ...uploadedVideos]);
    onVideoGalleryChange({ videos: [...videos, ...uploadedVideos] });
  };

  const handleLayoutChange = (e) => {
    setLayout(e.target.value);
    onVideoGalleryChange({ layout: e.target.value });
  };

  const handleBorderRadiusChange = (value) => {
    setBorderRadius(value);
    onVideoGalleryChange({ borderRadius: value });
  };

  const handleRemoveVideo = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
    onVideoGalleryChange({ videos: updatedVideos });
  };

  return (
    <div>
      {/* Video Upload */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">
          Upload Videos
        </label>
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center space-y-3">
          <label className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
            Upload Videos
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={handleVideoUpload}
              className="hidden"
            />
          </label>
          <p className="text-gray-500 text-sm">
            Accepted formats: .mp4, .webm, .ogg
          </p>
        </div>
        <div className="mt-4 space-y-2">
          {videos.length > 0 &&
            videos.map((video, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded-md"
              >
                <video
                  src={video}
                  controls
                  className="h-16 w-16 object-cover rounded-md"
                  style={{ borderRadius: `${borderRadius}px` }}
                />
                <button
                  onClick={() => handleRemoveVideo(index)}
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

      {/* Border Radius Slider */}
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

export default VideoGalleryCustomization;
