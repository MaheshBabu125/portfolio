import React, { useState } from 'react';
import HomeIcon from '../../assets/icons/Home.png';
import ActiveHome from '../../assets/icons/OnHome.png';
import RulerIcon from '../../assets/icons/Ruler.png';
import ActiveRuler from '../../assets/icons/OnRuler.png';
import Skill from '../../assets/icons/Skill.png';
import ActiveSkill from '../../assets/icons/OnSkill.png';
import GitHub from '../../assets/icons/github.png';
import Experience from '../../assets/icons/Experience.png';
import OnExperience from '../../assets/icons/OnExperience.png';
import Choose from '../../assets/icons/choose-person.png';

const VerticalNavbar = ({ handleButtonClick }) => {
  const [activeItem, setActiveItem] = useState('home');

  const handleClick = (item) => {
    setActiveItem(item);
    handleButtonClick(item);
  };

  const navItems = [
    { id: 'home', src: HomeIcon, active: ActiveHome, alt: 'Home' },
    { id: 'skills', src: Skill, active: ActiveSkill, alt: 'Skills' },
    { id: 'projects', src: RulerIcon, active: ActiveRuler, alt: 'Projects' },
    { id: 'experience', src: Experience, active: OnExperience, alt: 'Experience' },
    { id: 'choose', src: Choose, active: Choose, alt: 'Hire Me' },
  ];

  return (
    <div className="flex flex-col items-center rounded-full gap-5 p-2 shine-glow">
      {navItems.map((item) => {
        const isActive = activeItem === item.id;
        return (
          <div className="relative group" key={item.id}>
            <button
              type="button"
              aria-label={item.alt}
              aria-pressed={isActive}
              onClick={() => handleClick(item.id)}
              className={`flex flex-col items-center justify-center rounded-full transition-all duration-300 ${
                isActive || item.id === "choose" ? 'bg-[#656A7B] w-12 h-12 scale-110 shadow-md' : 'bg-transparent'
              }`}
            >
              <img
                src={isActive ? item.active : item.src}
                alt={item.alt}
                className="w-6 h-6"
              />
              {isActive && <div className="w-2 h-2 mt-1 rounded-full bg-[#A9AEB9]" />}
            </button>
            <span className={`absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-300 z-10
              ${item.id === "choose" ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
            `}>
              {item.alt}
            </span>
          </div>
        );
      })}

      <div className="w-full h-px bg-[#A9AEB9] my-2" />

      {/* LinkedIn */}
      <div className="relative group">
        <button
          id="linkedin"
          type="button"
          aria-label="LinkedIn"
          aria-pressed={activeItem === 'linkedin'}
          onClick={() => handleClick('linkedin')}
          className={`flex items-center justify-center mb-2 transition-all duration-300 rounded-full ${
            activeItem === 'linkedin' ? 'bg-gray-700 w-12 h-12' : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-center bg-gray-500 rounded-full w-12 h-12">
            <span className="text-gray-800 font-semibold text-lg">in</span>
          </div>
        </button>
        <span className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-opacity duration-300 z-10">
          LinkedIn
        </span>
      </div>

      {/* Dribbble */}
      <div className="relative group">
        <button
          id="github"
          type="button"
          aria-label="github"
          aria-pressed={activeItem === 'github'}
          onClick={() => handleClick('github')}
          className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 ${
            activeItem === 'github' ? 'bg-gray-700 w-12 h-12' : 'bg-transparent'
          }`}
        >
          <img src={GitHub} alt="github" className="w-6 h-6" />
        </button>
        <span className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-opacity duration-300 z-10">
          Github
        </span>
      </div>
    </div>
  );
};

export default VerticalNavbar;
