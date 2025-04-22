import React, { useState } from 'react';

const ProjectOne = ({ children }) => (
    <div className='p-8'>
      <p className='text-3xl font-bold'>Projects</p>
      <div className='w-[60%]'>
        {children}
      </div>
    </div>
  );

export default ProjectOne;