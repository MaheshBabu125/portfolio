import React from 'react';

export default function ProjectCard({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle?: string;
  description?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-[#2a2a33] to-[#1c1c21] p-6 rounded-xl text-white shadow-lg hover:scale-105 transition">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-indigo-400 mb-2">{subtitle}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
