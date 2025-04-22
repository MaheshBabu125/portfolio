import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../utils/projects';

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-6">
      {projects.map((proj, idx) => (
        <ProjectCard
          key={idx}
          title={proj.title}
          subtitle={proj.subtitle}
          description={proj.description}
        />
      ))}
    </div>
  );
}
