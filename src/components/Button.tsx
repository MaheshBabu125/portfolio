import React from "react";

type ButtonProps = {
  text: string;
  className?: string;
  onclick: () => void;
  isActive?: boolean; // <- New prop
};

export default function Button({
  text,
  className,
  onclick,
  isActive,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`group font-normal text-gray-300 rounded-full transition-all duration-300 border-2 focus:outline-none 
          ${
            isActive
              ? "bg-gray-700 border-gray-500"
              : "bg-gray-800 border-gray-700 hover:bg-gray-700"
          } 
          ${className}`}
      style={{
        boxShadow: "inset 10px -5px 78px 3px #15161A",
      }}
      onClick={onclick}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
}
