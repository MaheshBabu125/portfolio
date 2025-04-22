import React, { useState, useEffect } from 'react';
import HireMeGameButton from './HireMeGameButton';
import HireMeSection from './HireMeSection';

const MysteryModal = ({ isOpen, onClose, children }) => {
  const [animationState, setAnimationState] = useState('closed');

  useEffect(() => {
    if (isOpen) {
      setAnimationState('opening');
      const timer = setTimeout(() => setAnimationState('open'), 600);
      return () => clearTimeout(timer);
    }
    setAnimationState('closed');
  }, [isOpen]);

  // Handle backdrop click to dismiss the modal
  const handleBackdropClick = (e) => {
    // Only close if the click is outside the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      className="fixed inset-0 bg-opacity-80 flex items-center justify-center z-50"
      onClick={handleBackdropClick} // Handle backdrop click
    >
      <div
        className={`relative gradient-background rounded-2xl p-6 shadow-2xl border-4 border-dashed border-purple-400 transform transition-all duration-500 ${
          animationState === 'closed'
            ? 'scale-0'
            : animationState === 'opening'
            ? 'scale-75 rotate-6'
            : 'scale-100'
        }`}
      >
        <button
          type="button"
          className="absolute top-2 right-2 text-xl text-white"
          onClick={onClose} // Handle close button click
        >
          ✖
        </button>
        <HireMeSection />
      </div>
    </div>
  );
};

export default MysteryModal;
