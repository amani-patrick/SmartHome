import React from 'react';
import { Control, controls as controlsData } from './util/data';
import { Lightbulb, Thermometer, Music2, Shield, Camera, PanelTop } from 'lucide-react';

const iconMap = {
  lamp: Lightbulb,
  thermometer: Thermometer,
  music: Music2,
  lock: Shield,
  video: Camera,
  'panel-top': PanelTop
};

const QuickControls = () => {
  const [controls, setControls] = React.useState(controlsData);

  const toggleControl = (id: string) => {
    setControls(controls.map(control => 
      control.id === id ? {...control, status: !control.status} : control
    ));
  };

  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-white">Quick Controls</h2>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {controls.map((control) => {
          const Icon = iconMap[control.icon as keyof typeof iconMap];
          return (
            <button 
              key={control.id}
              className={`control-button ${control.status ? 'bg-accent' : ''}`}
              onClick={() => toggleControl(control.id)}
            >
              <Icon className={`h-6 w-6 ${control.status ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className="text-sm font-medium text-gray-300">{control.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickControls;