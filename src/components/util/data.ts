export interface Control {
  id: string;
  name: string;
  icon: string;
  status: boolean;
}

export const controls: Control[] = [
  {
    id: "lights",
    name: "Lights",
    icon: "lamp",
    status: false
  },
  {
    id: "thermostat", 
    name: "Thermostat",
    icon: "thermometer",
    status: true
  },
  {
    id: "security",
    name: "Security", 
    icon: "lock",
    status: true
  },
  {
    id: "cameras",
    name: "Cameras",
    icon: "video",
    status: false
  },
  {
    id: "music",
    name: "Music",
    icon: "music",
    status: false
  },
  {
    id: "blinds",
    name: "Blinds",
    icon: "panel-top",
    status: true
  }
];
export interface Scene {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const scenes: Scene[] = [
  {
    id: "morning",
    name: "Morning",
    icon: "sun",
    description: "Open blinds, turn on lights gradually"
  },
  {
    id: "day",
    name: "Day",
    icon: "sun-medium",
    description: "Optimal lighting and temperature"
  },
  {
    id: "evening",
    name: "Evening", 
    icon: "sunset",
    description: "Dim lights, close blinds partially"
  },
  {
    id: "night",
    name: "Night",
    icon: "moon",
    description: "All lights off, security active"
  },
  {
    id: "away",
    name: "Away",
    icon: "home",
    description: "Energy saving, security maximum"
  },
  {
    id: "movie",
    name: "Movie",
    icon: "video",
    description: "Dim lights, close blinds fully"
  }
];
