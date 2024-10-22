import React, { useState } from "react";
import Modal from "./Modal";

const CompanyInfoCustomization = ({ section, onCompanyInfoChange }) => {
  const [locations, setLocations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locationDetails, setLocationDetails] = useState({
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    locationName: "",
  });

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setLocationDetails({
      country: "",
      streetAddress: "",
      city: "",
      state: "",
      locationName: "",
    });
  };

  const handleSaveLocation = () => {
    setLocations([...locations, locationDetails]);
    handleModalClose();
  };

  const handleDeleteLocation = (index) => {
    const updatedLocations = locations.filter((_, i) => i !== index);
    setLocations(updatedLocations);
  };

  const handleInputChange = (setter, value, key) => {
    setter(value);
    onCompanyInfoChange({ [key]: value });
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          value={section.companyName}
          placeholder="Enter company name"
          onChange={(e) =>
            handleInputChange(setCompanyName, e.target.value, "companyName")
          }
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Website
        </label>
        <input
          type="url"
          value={section.companyWebsite}
          placeholder="Enter company website"
          onChange={(e) =>
            handleInputChange(
              setCompanyWebsite,
              e.target.value,
              "companyWebsite"
            )
          }
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Tagline
        </label>
        <input
          type="text"
          value={section.companyTagline}
          placeholder="Enter company tagline"
          onChange={(e) =>
            handleInputChange(
              setCompanyTagline,
              e.target.value,
              "companyTagline"
            )
          }
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Description
        </label>
        <textarea
          value={section.companyDescription}
          placeholder="Enter company description"
          onChange={(e) =>
            handleInputChange(
              setCompanyDescription,
              e.target.value,
              "companyDescription"
            )
          }
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows="3"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Industry
        </label>
        <input
          type="text"
          value={section.industry}
          placeholder="Enter industry"
          onChange={(e) =>
            handleInputChange(setIndustry, e.target.value, "industry")
          }
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4 flex space-x-4">
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Size
          </label>
          <select
            value={section.companySize}
            onChange={(e) =>
              handleInputChange(setCompanySize, e.target.value, "companySize")
            }
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="101-500">101-500</option>
            <option value="500+">500+</option>
          </select>
        </div>
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Founded Year
          </label>
          <select
            value={section.foundedYear}
            onChange={(e) =>
              handleInputChange(setFoundedYear, e.target.value, "foundedYear")
            }
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            {Array.from({ length: 50 }, (_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Email
        </label>
        <input
          type="email"
          value={section.companyEmail}
          placeholder="Enter company email"
          onChange={(e) =>
            handleInputChange(setCompanyEmail, e.target.value, "companyEmail")
          }
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Phone
        </label>
        <input
          type="tel"
          value={section.companyPhone}
          placeholder="Enter company phone"
          onChange={(e) =>
            handleInputChange(setCompanyPhone, e.target.value, "companyPhone")
          }
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Locations Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Locations
          </label>
          <button
            onClick={handleModalOpen}
            className="text-blue-500 hover:text-blue-700 transition-all"
          >
            Add Location
          </button>
        </div>

        {locations.length > 0 && (
          <ul className="mt-2 space-y-2">
            {locations.map((location, index) => (
              <li
                key={index}
                className="bg-gray-100 p-2 rounded-md flex justify-between items-center"
              >
                <span>{location.locationName}</span>
                <button
                  onClick={() => handleDeleteLocation(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal for Adding Locations */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSaveLocation}
        title="Add New Location"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Country/Region
          </label>
          <input
            type="text"
            value={locationDetails.country}
            onChange={(e) =>
              setLocationDetails({
                ...locationDetails,
                country: e.target.value,
              })
            }
            placeholder="Select a country"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            value={locationDetails.streetAddress}
            onChange={(e) =>
              setLocationDetails({
                ...locationDetails,
                streetAddress: e.target.value,
              })
            }
            placeholder="Enter the street address"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              value={locationDetails.city}
              onChange={(e) =>
                setLocationDetails({ ...locationDetails, city: e.target.value })
              }
              placeholder="Enter the city"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700">
              State/Province
            </label>
            <input
              type="text"
              value={locationDetails.state}
              onChange={(e) =>
                setLocationDetails({
                  ...locationDetails,
                  state: e.target.value,
                })
              }
              placeholder="Enter the state/province"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Location Name
          </label>
          <input
            type="text"
            value={locationDetails.locationName}
            onChange={(e) =>
              setLocationDetails({
                ...locationDetails,
                locationName: e.target.value,
              })
            }
            placeholder="Enter the location name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </Modal>
    </>
  );
};

export default CompanyInfoCustomization;
