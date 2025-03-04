
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[250px] w-[1500px] -mx-4 md:-mx-8 overflow-hidden bg-[url('/home-welcome.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent">
        <div className="absolute bottom-8 left-8 space-y-2">
          <h1 className="text-4xl font-bold text-white">Welcome Home, Amani</h1>
          <p className="text-lg text-gray-300">Your smart home is ready for action</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
