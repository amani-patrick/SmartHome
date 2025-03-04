import React from 'react';
import Hero from '@/components/Hero';
import Scenes from '@/components/Scenes';
import QuickControls from '@/components/QuickControls';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-7xl space-y-8">
        <Hero />
        <Scenes />
        <QuickControls />
        <div className="flex items-center justify-between border-t border-accent/50 pt-4">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-primary">Smart<span className="text-red-500">Home</span></p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">
              Settings
            </button>
            <button className="text-gray-400 hover:text-white">
              Help
            </button>
            <button className="text-gray-400 hover:text-white">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index; 