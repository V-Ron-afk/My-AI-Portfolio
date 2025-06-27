import React from 'react';
import { Wave } from 'react-css-spinners';
import { AuroraBackground } from './AuroraBackground';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Loader = ({ fadeOut, isDarkMode }) => {
  return (
    <div
      className={`relative w-full h-screen flex items-center justify-center bg-white dark:bg-darkTheme transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Aurora Background */}
      <AuroraBackground className="absolute inset-0 z-0" showRadialGradient={false} />

      {/* Loader Content */}
      <div className="z-10 flex flex-col items-center justify-center gap-6">
        <Image
          src={isDarkMode ? assets.R_logowhite : assets.R_logo}
          alt="Logo"
          className="w-10 h-auto -mb-6"
        />
        <Wave
          height="100"
          width="100"
          color={isDarkMode ? 'white' : 'black'}
          ariaLabel="Loading"
        />
      </div>
    </div>
  );
};

export default Loader;
