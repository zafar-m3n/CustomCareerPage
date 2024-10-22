import React from "react";

const CompanyInformation = () => {
  const companyInfo = {
    tagline: "Utilizing AI Precision to Augment Human Expertise",
    description:
      "Cleveri leverages cutting-edge AI technology to complement human expertise in recruitment, optimizing decision-making by refining and streamlining the candidate screening process.",
    industry: "Information Technology Industry",
    website: "https://moneta.lk",
    founded: "2019",
    size: "11 - 20",
    locations: [
      {
        name: "Orthodontist",
        address:
          "No 309 High Level Road, Colombo 06, 00600, Colombo, Western Province, Sri Lanka",
      },
    ],
    socialLinks: [
      { icon: "fas fa-envelope", link: "#" },
      { icon: "fab fa-linkedin-in", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-facebook", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div
        id="company-details"
        className="flex flex-col md:flex-row justify-between"
      >
        <div className="w-full me-0 md:w-3/5 md:me-4">
          <h2 className="text-xl font-bold mb-4">{companyInfo.tagline}</h2>
          <p className="mb-4">{companyInfo.description}</p>
        </div>
        <div className="flex flex-col w-full md:w-2/5 text-sm">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border border-black p-3 rounded-lg flex flex-col">
              <span className="font-semibold">Industry:</span>
              <span>{companyInfo.industry}</span>
            </div>
            <div className="border border-black p-3 rounded-lg flex flex-col">
              <span className="font-semibold">Website:</span>
              <a
                href={companyInfo.website}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {companyInfo.website}
              </a>
            </div>
            <div className="border border-black p-3 rounded-lg flex flex-col">
              <span className="font-semibold">Founded:</span>
              <span>{companyInfo.founded}</span>
            </div>
            <div className="border border-black p-3 rounded-lg flex flex-col">
              <span className="font-semibold">Company Size:</span>
              <span>{companyInfo.size}</span>
            </div>
          </div>
          <div className="flex justify-start space-x-4 mb-4">
            {companyInfo.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black hover:text-blue-500"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div id="company-locations">
        <h2 className="text-xl font-bold mb-4">Our Locations</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-2">
          {companyInfo.locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col space-y-2"
            >
              <h3 className="font-semibold text-gray-900">{location.name}</h3>
              <div className="flex items-start space-x-2 text-gray-700">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>{location.address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
