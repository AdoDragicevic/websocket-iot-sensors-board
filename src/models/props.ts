import { ReactNode } from "react";
import { Sensor } from "./sensor";


export interface ChildrenProp {
  children: ReactNode;
}

export interface SensorListProps {
  sensors: Sensor[];
  onToggleSensorConnection: (id: string) => void;
}

export interface SensorProps {
  sensor: Sensor;
  onToggleSensorConnection: (id: string) => void;
}