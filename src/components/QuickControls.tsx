
import React from 'react';
import { Lightbulb, Thermometer, Music2, Shield, Camera, DoorClosed } from 'lucide-react';

const controls = [
  { title: 'Lights', icon: <Lightbulb className="h-6 w-6" /> },
  { title: 'Temperature', icon: <Thermometer className="h-6 w-6" /> },
  { title: 'Music', icon: <Music2 className="h-6 w-6" /> },
  { title: 'Security', icon: <Shield className="h-6 w-6" /> },
  { title: 'Cameras', icon: <Camera className="h-6 w-6" /> },
  { title: 'Doors', icon: <DoorClosed className="h-6 w-6" /> },
];

const QuickControls = () => {
  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-white">Quick Controls</h2>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {controls.map((control) => (
          <button key={control.title} className="control-button">
            {control.icon}
            <span className="text-sm font-medium text-gray-300">{control.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickControls;
