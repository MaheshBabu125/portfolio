import { useState } from "react";
import VerticalNavbar from "./components/verticalNavbar/VerticalNavbar";
import "./index.css";
import ProfileName from "./components/profileName/ProfileName";
import CarouselWrapper from "./components/CarouselWrapper";
import MysteryModal from "./components/MysteryModal";
import GalaxySkills from "./components/GalaxySkills";
import Projects from "./components/projects/Projects";
import MobileOnlyContent from './components/WebContentComponent';
import ExperienceSection from "./components/ExperienceSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [navItem, setNavItem] = useState("home");
  const [isMobile, setIsMobile] = useState(null);
  const handleNavigation = (navItem) => {
    console.log(`Navigated to: ${navItem}`);
    setNavItem(navItem);
    if (navItem === "choose") {
      setIsOpen(true);
    }
    // Handle navigation logic here
  };

  const handleDeviceDetect = (mobile) => {
    setIsMobile(mobile);
    console.log('Device is mobile:', mobile);
  };

  return (
    <div className="min-h-screen bg-[#15161A] text-white">
      <MobileOnlyContent onDetectDevice={handleDeviceDetect}/>
      {!isMobile && <>
      <div className="flex flex-row h-full gap-40 p-10">
        <div className="size-fit bg-gradient-to-t from-[#15161A] via-[#656A7B] to-[#15161A] border-gradient fixed top-10 left-10 z-50">
          <VerticalNavbar handleButtonClick={handleNavigation} />
        </div>

        {navItem === "home" && (
          <div className="w-full ml-60">
            <ProfileName />
          </div>
        )}
      </div>
      {navItem === "home" && (
        <div className="pl-63">
          <CarouselWrapper />
        </div>
      )}

      {navItem === "skills" && (
        <div className="w-full h-full">
          <p className="text-3xl font-bold ml-13 mb-10">Skills</p>
          <GalaxySkills />
        </div>
      )}

      {navItem === "projects" && (
        <div className="ml-60">
          <Projects />
        </div>
      )}

      {navItem === "experience" && (
        <div className="ml-60">
          <ExperienceSection/>
        </div>
      )}
      <p className="text-sm text-[#A9AEB9] text-center mt-30 pb-20">
        Developed by <span className="text-white font-bold">Mahesh Babu.K</span>
      </p>

      <MysteryModal isOpen={isOpen} onClose={() => {
        setIsOpen(false);
        setNavItem("skills");

      }}>
        <p className="text-gray-300 mb-4">
          You found a special surprise inside!
        </p>
        <div className="flex justify-center mb-4">
          <span className="text-4xl">🎉</span>
        </div>
        <button
          type="button"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsOpen(false)}
        >
          Claim Reward
        </button>
      </MysteryModal>
      </>}
    </div>
  );
}

export default App;
