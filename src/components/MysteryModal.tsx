import React, { useState, useEffect } from 'react';

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

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-opacity-80 flex items-center justify-center z-50"
    style={{ background: 'linear-gradient(198deg,rgba(15, 12, 29, 1) 0%, rgba(77, 46, 101, 1) 50%, rgba(235, 115, 28, 1) 100%)' }}>
      <div className={`relative bg-gray-900 rounded-2xl p-6 w-80 shadow-2xl border-4 border-dashed border-purple-400 transform transition-all duration-500 ${
        animationState === 'closed' ? 'scale-0' : 
        animationState === 'opening' ? 'scale-75 rotate-6' : 'scale-100'
      }`}>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-xl font-bold"
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">
            🎁 Mystery Box
            {animationState === 'opening' && <span className="ml-2">✨</span>}
          </h2>
          <div className={`transition-opacity duration-500 ${animationState === 'open' ? 'opacity-100' : 'opacity-0'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MysteryModal;