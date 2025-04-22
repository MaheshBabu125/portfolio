import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const HireMeGameButton = ({ formIsValid }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const randomOffset = () => Math.floor(Math.random() * 300 - 150); // -150 to +150 px

  const handleMouseEnter = () => {
    if (!formIsValid) {
      setPosition({
        x: randomOffset(),
        y: randomOffset(),
      });
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      animate={position}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      className="inline-block"
    >
      <a
        href={formIsValid ? "mailto:yourname@example.com" : "#"}
        className={`inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold rounded-full transition shadow-xl ${
          formIsValid
            ? 'bg-green-600 hover:bg-green-500'
            : 'bg-red-600 cursor-not-allowed'
        }`}
      >
        <Mail size={20} />
        Hire Me
      </a>
    </motion.div>
  );
};

export default HireMeGameButton;
