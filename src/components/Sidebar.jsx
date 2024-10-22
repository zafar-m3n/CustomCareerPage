import React, { useState } from "react";
import Accordion from "./Accordion";
import ToggleSwitch from "./ToggleSwitch";
import NavbarCustomization from "./NavbarCustomization";
import HeroCustomization from "./HeroCustomization";
import CompanyInfoCustomization from "./CompanyInfoCustomization";
import PhotoGalleryCustomization from "./PhotoGalleryCustomization";
import VideoGalleryCustomization from "./VideoGalleryCustomization";
import JobSectionCustomization from "./JobSectionCustomization";
import FooterCustomization from "./FooterCustomization";

const Sidebar = ({ sections, onSectionToggle }) => {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [links, setLinks] = useState([]);

  const handleAccordionToggle = (sectionName) => {
    setOpenAccordions((prevOpenAccordions) => {
      if (prevOpenAccordions.includes(sectionName)) {
        return prevOpenAccordions.filter((name) => name !== sectionName);
      } else {
        return [...prevOpenAccordions, sectionName];
      }
    });
  };

  const handleAddLink = (newLink) => {
    setLinks([...links, newLink]);
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  const handleEditLink = (index) => {
    const linkToEdit = links[index];
    console.log("Edit link:", linkToEdit);
  };

  return (
    <div className="w-72 bg-gray-50 text-gray-800 h-screen fixed shadow-lg overflow-y-auto hide-scrollbar">
      <h2 className="text-2xl font-bold p-4 text-center border-b border-gray-200">
        Customization Panel
      </h2>

      {sections.map((section) => (
        <Accordion
          key={section.name}
          title={section.name}
          isOpen={openAccordions.includes(section.name)}
          onToggle={() => handleAccordionToggle(section.name)}
        >
          {section.name === "Navbar" ? (
            <NavbarCustomization
              section={section}
              links={links}
              handleAddLink={handleAddLink}
              handleDeleteLink={handleDeleteLink}
              handleEditLink={handleEditLink}
            />
          ) : section.name === "Hero Section" ? (
            <>
              <ToggleSwitch
                label="Enable Section"
                enabled={section.enabled}
                onToggle={() => onSectionToggle(section.name)}
              />
              <HeroCustomization
                section={section}
                onTitleChange={(title) => console.log("Title updated:", title)}
                onDescriptionChange={(description) =>
                  console.log("Description updated:", description)
                }
                onBackgroundColorChange={(color) =>
                  console.log("Background color updated:", color)
                }
                onImageChange={(image) => console.log("Image updated:", image)}
              />
            </>
          ) : section.name === "Company Information" ? (
            <>
              <ToggleSwitch
                label="Enable Section"
                enabled={section.enabled}
                onToggle={() => onSectionToggle(section.name)}
              />
              <CompanyInfoCustomization
                section={section}
                onCompanyInfoChange={(info) =>
                  console.log("Company info updated:", info)
                }
              />
            </>
          ) : section.name === "Photo Gallery" ? (
            <>
              <ToggleSwitch
                label="Enable Section"
                enabled={section.enabled}
                onToggle={() => onSectionToggle(section.name)}
              />
              <PhotoGalleryCustomization
                section={section}
                onPhotoGalleryChange={(data) =>
                  console.log("Photo Gallery updated:", data)
                }
              />
            </>
          ) : section.name === "Video Gallery" ? (
            <>
              <ToggleSwitch
                label="Enable Section"
                enabled={section.enabled}
                onToggle={() => onSectionToggle(section.name)}
              />
              <VideoGalleryCustomization
                section={section}
                onVideoGalleryChange={(data) =>
                  console.log("Video Gallery updated:", data)
                }
              />
            </>
          ) : section.name === "Jobs Section" ? (
            <>
              <ToggleSwitch
                label="Enable Section"
                enabled={section.enabled}
                onToggle={() => onSectionToggle(section.name)}
              />
              <JobSectionCustomization
                section={section}
                onLayoutChange={(layout) =>
                  console.log("Layout updated:", layout)
                }
                onBorderRadiusChange={(radius) =>
                  console.log("Border radius updated:", radius)
                }
                onCardColorChange={(color) =>
                  console.log("Card color updated:", color)
                }
              />
            </>
          ) : section.name === "Footer" ? (
            <FooterCustomization
              section={section}
              footerLinks={links}
              handleAddFooterLink={handleAddLink}
              handleDeleteFooterLink={handleDeleteLink}
              handleEditFooterLink={handleEditLink}
            />
          ) : (
            <ToggleSwitch
              label="Enable Section"
              enabled={section.enabled}
              onToggle={() => onSectionToggle(section.name)}
            />
          )}
        </Accordion>
      ))}
    </div>
  );
};

export default Sidebar;
