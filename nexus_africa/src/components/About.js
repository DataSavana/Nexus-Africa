import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bot, User } from 'lucide-react';

const About = () => {

  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          About Us
        </h2>
        <p className="text-xl text-center mb-16 text-gray-700">
          Nexus Africa is building the first large-scale African AI data platform.
          We provide high-quality, ethically sourced datasets to make AI more
          inclusive and representative of Africa's diversity.
        </p>
      </div>
    </div>
  );
};

export default About;