
import React from 'react';
import { Moon, Film, Sun, Laptop } from 'lucide-react';

const scenes = [
  {
    title: 'Movie Night',
    icon: <Film className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Sleep Mode',
    icon: <Moon className="h-6 w-6" />,
    image: '/sleep-mode.jpeg',
  },
  {
    title: 'Morning Routine',
    icon: <Sun className="h-6 w-6" />,
    image: '/morning-routine.jpeg',
  },
  {
    title: 'Work Mode',
    icon: <Laptop className="h-6 w-6" />,
    image: '/work-mode.jpeg',
  },
];

const Scenes = () => {
  return (
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-white">Your Scenes</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {scenes.map((scene) => (
          <div
            key={scene.title}
            className="scene-card"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${scene.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '200px',
            }}
          >
            <div className="flex items-center gap-2">
              {scene.icon}
              <h3 className="font-medium text-white">{scene.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scenes;
