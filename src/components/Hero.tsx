
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-3xl bg-[url('/lovable-uploads/08900ad4-2141-474b-9197-cf07c9b5266a.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent">
        <div className="absolute bottom-8 left-8 space-y-2">
          <h1 className="text-4xl font-bold text-white">Welcome Home, Alex</h1>
          <p className="text-lg text-gray-300">Your smart home is ready for action</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
