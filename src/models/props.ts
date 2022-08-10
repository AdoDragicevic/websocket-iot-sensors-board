import { ReactNode } from "react";
import { Sensor } from "./sensor";


export interface ChildrenProp {
  children: ReactNode;
}

export interface SensorListProps {
  sensors: Sensor[];
  onToggleSensorConnection: (s: Sensor) => void;
}

export interface SensorProps {
  sensor: Sensor;
  onToggleSensorConnection: (s: Sensor) => void;
}

export interface ToggleSliderProps {
  onToggle: () => void;
  optionOne: string;
  optionTwo: string;
}