import React, { useState } from 'react';

const ProfileName = ({ handleButtonClick }) => {
    return (
        <div className='p-8'>
            <p className='text-3xl font-bold'>Mahesh Babu Kethineni</p>
            <div className='w-[60%]'>
                <p className='text-base pt-10 text-[#A9AEB9]'>Welcome to the world of <span className='text-white'>Mahesh Babu</span> — a creative and detail-driven developer crafting seamless digital experiences across <span className='text-white'>web and mobile</span>.
                 With a passion for clean design, functional code, and user-focused solutions, I bring ideas to life through technologies like <span className='text-white'>React, Ionic, Angular,</span>, and beyond. From interactive <span className='text-white'>map integrations</span> to scalable <span className='text-white'>PWA</span> architectures, every project I build tells a story — one that blends innovation,
                  usability, and purpose.</p>
            </div>
        </div>
    );
};

export default ProfileName;