import React from 'react';
import {faDiscord, faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ParticlesComponent from '../particles.js';

const HeroSection = () => {
  return (
    <div className='relative'>
        <div class="-z-50">
        <ParticlesComponent /> 
    </div>
  
    <div className="h-[45vh] flex justify-between items-center text-white bg-blue-home p-12">
      <div>
        <h1 className="text-xl text-yellow-home font-bold">UNIVERSITY OF AUCKLAND</h1>
        <h2 className="text-4xl font-extrabold mt-2">Artificial Intelligence & Legal Club</h2>
        <p className="mt-8 max-w-md">Join AILC to engage in hands-on AI projects, learn about the legal and policy aspects of AI, and gain teamwork experience to prepare for future careers in software development.</p>

        <div className="flex gap-6 mt-6 cursor-pointer hover:scale-110 z-[9999]">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faDiscord} size="2x" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
