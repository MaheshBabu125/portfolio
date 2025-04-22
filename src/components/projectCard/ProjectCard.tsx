import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProjectCard = ({
  title = 'Design Projects',
  subtitle = 'Replace with cover',
  footerTitle = 'Design',
  footerDesc = 'My design projects',
  icon,
  backGround = 'linear-gradient(200deg,rgba(152, 255, 206, 1) 0%, rgba(131, 143, 255, 1) 49%, rgba(96, 178, 255, 1) 100%)',
}) => {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      backgroundPosition: '200% 0%',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'linear',
    });
  }, []);

  return (
    <div className="w-full max-w-[600px] rounded-3xl overflow-hidden shadow-xl text-white bg-[#262628] border-[#3C3C3E] border-[2px]">
      {/* Animated gradient background */}
      <div
        ref={bgRef}
        className="h-[250px] relative flex flex-col justify-center items-center text-center m-2 rounded-3xl"
        style={{
          background: backGround,
          backgroundSize: '400% 400%',
        }}
      >
        <div className="absolute inset-0 bg-opacity-30 z-0" />

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-extrabold mb-2">{title}</h1>
          <p className="text-gray-300 text-lg">{subtitle}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 px-6 py-4 bg-[#262628]">
        {/* Optional Icon */}
        {icon ? (
          <div className="p-2 rounded-md bg-gray-700">
            <img src={icon} alt="Icon" className="w-6 h-6" />
          </div>
        ) : (
          <div className="bg-gray-700 p-2 rounded-md">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-8 0h8" />
            </svg>
          </div>
        )}

        <div>
          <p className="text-white font-semibold">{footerTitle}</p>
          <p className="text-gray-400 text-sm truncate max-w-xs">{footerDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
