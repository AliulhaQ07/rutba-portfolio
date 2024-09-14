import { useState } from "react";
import modal from "/src/assets/modal.jpg";

const Aboutme = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("skills");

  // Function to handle button click and change the active section
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Content for different sections
  const renderSectionContent = () => {
    switch (activeSection) {
      case "skills":
        return (
          <div className="px-4 md:px-5 py-6 md:py-9">
            <div className="flex flex-col items-start gap-4 md:gap-6">
              <h1 className="text-lg md:text-xl lg:text-2xl underline underline-offset-4">
                SKILLS
              </h1>
              <div>
                <p className="text-indigo-500 font-bold">UI/UX</p>
                <p>Designing web/App interfaces</p>
              </div>
              <div>
                <p className="text-indigo-500 font-bold">Web Development</p>
                <p>Web app Development</p>
              </div>
              <div>
                <p className="text-indigo-500 font-bold">App Development</p>
                <p>Building Android/iOS apps</p>
              </div>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="px-4 md:px-5 py-6 md:py-9">
            <h1 className="text-lg md:text-xl lg:text-2xl underline underline-offset-4 mb-4">
              EXPERIENCE
            </h1>
            <p className="text-indigo-500 font-bold">Web Developer</p>
            <p>Web App Development</p>
            <p>
              HTML | CSS | JS | REACT | TAILWIND-CSS | GIT | GITHUB | FIGMA |
              UI/UX DESIGNING
            </p>
          </div>
        );
      case "education":
        return (
          <div className="px-4 md:px-5 py-6 md:py-9">
            <h1 className="text-lg md:text-xl lg:text-2xl underline underline-offset-4 mb-4">
              EDUCATION
            </h1>
            <p className="text-indigo-500 font-bold">
              Bachelors in Computer Science <span>(BSCS)</span>
            </p>
            <p>Institute Of Management Sciences</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-4 mt-3 p-4 md:p-8">
        {/* PICTURE */}
        <div className="hidden md:flex justify-center">
          <img
            className="h-[40vh] md:h-[60vh] lg:h-[70vh] w-auto rounded"
            src={modal}
            alt="Profile"
          />
        </div>

        {/* PERSONAL INFO */}
        <div className="flex flex-col justify-start px-4 md:px-16 items-start font-Montserrat font-normal">
          <h1 className="text-3xl md:text-4xl lg:text-6xl mb-3 font-LuckiestGuy">
            ABOUT ME
          </h1>
          <h5 className="text-xs md:text-base lg:text-2xl">
            Hello! I'm Rutba Chaudhary with a passion for tech-industry. With a
            background in Computer Science Engineering. Throughout my career, I
            have honed my skills in web development and content writing. My
            journey began at Institute of Management Sciences.
          </h5>

          {/* BUTTONS TO NAVIGATE */}
          <div className="flex gap-4 md:gap-6 justify-center items-center my-4 text-black">
            <button
              className={`text-xs md:text-base lg:text-lg border p-2 md:p-3 hover:border-gray-600 duration-200 ${
                activeSection === "skills" ? "border-indigo-500" : ""
              }`}
              onClick={() => handleSectionChange("skills")}
            >
              SKILLS
            </button>

            <button
              className={`text-xs md:text-base lg:text-lg border p-2 md:p-3 hover:border-gray-600 duration-200 ${
                activeSection === "experience" ? "border-indigo-500" : ""
              }`}
              onClick={() => handleSectionChange("experience")}
            >
              EXPERIENCE
            </button>

            <button
              className={`text-xs md:text-base lg:text-lg border p-2 md:p-3 hover:border-gray-600 duration-200 ${
                activeSection === "education" ? "border-indigo-500" : ""
              }`}
              onClick={() => handleSectionChange("education")}
            >
              EDUCATION
            </button>
          </div>

          {/* DYNAMIC SECTION CONTENT */}
          <div className="border min-h-[30vh] w-full md:w-[100%] hover:border-indigo-500 duration-200">
            {renderSectionContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
