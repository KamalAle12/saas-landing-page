import React from 'react';
import saas from '../assets/images/saas.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center justify-center min-h-screen gap-10 px-0 pt-20 mb-0"
    >
      {/* Middle Section: Text and Image */}
      <div className="flex xl:flex-row flex-col items-center justify-between w-full mt-0 relative">
        {/* Left Section: Text */}
        <div className="xl:w-2/5 flex flex-col items-start text-left relative z-10">
          <div className="text-center">
            <p className="text-[20px] font-bold font-rubik text-gray-800 leading-relaxed mb-10">
              Welcome to Your <span className="text-coral-red">SaaS</span> Solution
            </p>
          </div>
          <h1 className="font-rubik text-[50px] max-sm:text-[27px] font-bold text-gray-900 leading-snug">
            Scale your business with our
            <span className="text-coral-red block">modern tools</span>
            and solutions
          </h1>
          <div className="flex justify-start mt-10 gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md">
              Get Started
            </button>
            <button className="bg-white border border-gray-300 text-gray-900 py-3 px-6 rounded-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="xl:w-3/5 flex justify-center items-center xl:-ml-16 mt-10 xl:mt-0 relative">
          <img
            src={saas}
            alt="SaaS"
            width={610}
            height={500}
            className="object-contain relative z-0"
          />
        </div>

        {/* Overlapping Effect */}
        <div className="absolute inset-0 flex justify-end xl:-mr-12 opacity-60 z-0">
          <img
            src={saas}
            alt="SaaS Background"
            width={610}
            height={500}
            className="object-contain opacity-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
