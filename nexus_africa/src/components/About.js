import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bot, User } from 'lucide-react';

const examples = [
  {
    prompt: "Show traditional African dance in Lagos",
    videoDescription: "Generated video shows generic dance moves in a studio setting",
    improvement: "Specify Nigerian cultural elements like aso-ebi clothing, add market scenes or community gatherings for context, include traditional Yoruba dance movements"
  },
  {
    prompt: "African tech startup office in Nairobi",
    videoDescription: "Generated video shows western-style office with generic decorations",
    improvement: "Include local artwork, show mix of traditional and modern architecture, capture Nairobi's skyline, show diverse team members in both traditional and modern attire"
  },
  {
    prompt: "Street food vendor in Accra",
    videoDescription: "Generic food cart in undefined urban setting",
    improvement: "Specify Ghanaian dishes like waakye or kenkey, show characteristic umbrellas, include local street signs, capture authentic market atmosphere"
  }
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === examples.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? examples.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };


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

        <div className="relative max-w-4xl mx-auto rounded-xl p-8 bg-white shadow-2xl">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            Our Why?
          </h3>

          <div className="relative overflow-hidden">
            <div className={`transform transition-transform duration-500 ease-in-out ${isAnimating ? (direction === 'right' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'}`}>
              {/* Chat-like interface */}
              <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
                {/* User prompt */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tl-none shadow-md">
                      {examples[currentIndex].prompt}
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Bot className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-gray-200">
                      <h4 className="font-medium text-purple-600 mb-2">Current Output:</h4>
                      <p className="text-gray-700">{examples[currentIndex].videoDescription}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-gray-200">
                      <h4 className="font-medium text-purple-600 mb-2">Improvements Needed:</h4>
                      <p className="text-gray-700">{examples[currentIndex].improvement}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons with hover effects */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>

            {/* Enhanced pagination dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110 ${currentIndex === index
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
