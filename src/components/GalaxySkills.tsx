import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function GalaxySkills() {
  const [skills, setSkills] = useState([
    { id: 1, name: 'React', x: 20, y: 20, vx: 0.1, vy: 0.15, stopped: false },
    { id: 2, name: 'JavaScript', x: 60, y: 50, vx: -0.12, vy: 0.08, stopped: false },
    { id: 3, name: 'Tailwind', x: 30, y: 70, vx: 0.14, vy: -0.1, stopped: false },
    { id: 4, name: 'css', x: 70, y: 30, vx: -0.08, vy: -0.12, stopped: false },
    { id: 5, name: 'TypeScript', x: 40, y: 60, vx: 0.06, vy: -0.16, stopped: false },
    { id: 6, name: 'Angular', x: 80, y: 80, vx: -0.1, vy: -0.06, stopped: false },
    { id: 7, name: 'Ionic', x: 50, y: 40, vx: 0.08, vy: 0.1, stopped: false },
    { id: 8, name: 'Redux', x: 25, y: 85, vx: 0.12, vy: -0.08, stopped: false },
    { id: 9, name: 'Html', x: 75, y: 15, vx: -0.14, vy: 0.1, stopped: false },
    { id: 9, name: 'scss', x: 85, y: 85, vx: -0.14, vy: 0.1, stopped: false },
    { id: 9, name: 'Git', x: 15, y: 15, vx: -0.14, vy: 0.1, stopped: false },
    { id: 9, name: 'Storybook', x: 85, y: 15, vx: -0.14, vy: 0.1, stopped: false },
  ]);
  
  // State for moving stars
  const [stars, setStars] = useState(Array.from({ length: 150 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 0.2 + 0.05, // Smaller size between 0.05rem and 0.25rem
    opacity: Math.random() * 0.5 + 0.1,
    vx: (Math.random() - 0.5) * 0.02, // Very slow horizontal movement
    vy: (Math.random() - 0.5) * 0.02, // Very slow vertical movement
  })));
  
  const [activeSkill, setActiveSkill] = useState(null);
  const containerRef = useRef(null);
  const skillsAnimationRef = useRef(null);
  const starsAnimationRef = useRef(null);
  
  // Animation for skills
  useEffect(() => {
    const updateSkills = () => {
      setSkills(prevSkills => prevSkills.map(skill => {
        if (skill.stopped) return skill;
        
        let newX = skill.x + skill.vx;
        let newY = skill.y + skill.vy;
        let newVx = skill.vx;
        let newVy = skill.vy;
        
        // Bounce off edges
        if (newX <= 0 || newX >= 100) newVx = -newVx;
        if (newY <= 0 || newY >= 100) newVy = -newVy;
        
        return {
          ...skill,
          x: newX < 0 ? 0 : newX > 100 ? 100 : newX,
          y: newY < 0 ? 0 : newY > 100 ? 100 : newY,
          vx: newVx,
          vy: newVy
        };
      }));
      
      skillsAnimationRef.current = requestAnimationFrame(updateSkills);
    };
    
    skillsAnimationRef.current = requestAnimationFrame(updateSkills);
    
    return () => {
      if (skillsAnimationRef.current) {
        cancelAnimationFrame(skillsAnimationRef.current);
      }
    };
  }, []);
  
  // Animation for stars
  useEffect(() => {
    const updateStars = () => {
      setStars(prevStars => prevStars.map(star => {
        let newX = star.x + star.vx;
        let newY = star.y + star.vy;
        
        // Wrap around the screen instead of bouncing
        if (newX < 0) newX = 100;
        if (newX > 100) newX = 0;
        if (newY < 0) newY = 100;
        if (newY > 100) newY = 0;
        
        return {
          ...star,
          x: newX,
          y: newY
        };
      }));
      
      starsAnimationRef.current = requestAnimationFrame(updateStars);
    };
    
    starsAnimationRef.current = requestAnimationFrame(updateStars);
    
    return () => {
      if (starsAnimationRef.current) {
        cancelAnimationFrame(starsAnimationRef.current);
      }
    };
  }, []);
  
  const handleSkillClick = (skill) => {
    setSkills(prevSkills => 
      prevSkills.map(s => 
        s.id === skill.id 
          ? { ...s, stopped: true } 
          : s
      )
    );
    setActiveSkill(skill.id);
  };
  
  // Handle reset of all skills
  const handleReset = () => {
    setSkills(prevSkills => 
      prevSkills.map(s => ({ ...s, stopped: false }))
    );
    setActiveSkill(null);
  };
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen bg-black overflow-hidden"
    >
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Moving stars */}
      {stars.map((star, index) => (
        <div 
          key={`star-${index}`}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}rem`,
            height: `${star.size}rem`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.size / 2}px rgba(255, 255, 255, ${star.opacity * 0.4})`
          }}
        />
      ))}
      
      {/* Subtle nebula effects */}
      <div className="absolute w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-800 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-1/3 h-1/3 bg-purple-800 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-1/4 h-1/4 bg-indigo-800 rounded-full blur-3xl"></div>
      </div>
      
      {/* Skills */}
      {skills.map(skill => (
        <div
          key={skill.id}
          className={`absolute px-4 py-2 rounded-lg cursor-pointer transform transition-all duration-500 
                     ${skill.stopped ? 'scale-125 z-10' : 'hover:scale-110'} 
                     ${activeSkill === skill.id ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/50' : 'bg-black text-blue-400 border border-blue-500/30 shadow-md shadow-blue-900/20'}`}
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            transform: `translate(-50%, -50%) ${activeSkill === skill.id ? 'scale(1.25)' : ''}`,
            backgroundColor: `${activeSkill === skill.id}`
          }}
          onClick={() => handleSkillClick(skill)}
        >
          {skill.name}
        </div>
      ))}
      
      {/* Reset button */}
      <button 
        type="button"
        onClick={handleReset}
        className="absolute top-6 right-6 px-4 py-2 bg-blue-900 bg-opacity-30 hover:bg-opacity-50 text-blue-400 rounded-lg border border-blue-500/30 transition-colors duration-300"
      >
        Reset All
      </button>
      
      {/* Info text */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-blue-400 text-sm opacity-60">
        Click on a skill to highlight it, and move the cursor out of the screen to see the <b className='text-indigo-700 bg-white'>magic!</b>
      </div>
    </div>
  );
}