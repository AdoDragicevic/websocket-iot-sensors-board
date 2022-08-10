import { useCallback } from "react";
import { Sensor } from "../models/sensor";
import useWebSocket from "./useWebSocket";


const useSensors = (): [Record<string, Sensor>, (s: Sensor) => void] => {

  const [sensors, sendMessage] = useWebSocket<Sensor>("ws://localhost:5000");

  const toggleSensor = useCallback((sensor: Sensor) => {
    sendMessage(JSON.stringify({
      command: sensor.connected ? "disconnect" : "connect",
      id: sensor.id
    }));
  }, [sendMessage]);
  
  return [sensors, toggleSensor];

};

export default useSensors;