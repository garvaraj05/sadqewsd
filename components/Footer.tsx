import React from 'react';
import { config } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-neon-cyan font-semibold">{config.organizer}</span> – All Rights Reserved.
        </p>
        <p className="mt-2 text-xs text-gray-600 font-mono">
          Be Technical by Technique
        </p>
      </div>
    </footer>
  );
};

export default Footer;