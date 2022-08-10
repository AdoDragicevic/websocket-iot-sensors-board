import { useCallback } from "react";
import { Sensor } from "../models/sensor";
import useWebSocket from "./useWebSocket";


const useSensors = (): [Record<string, Sensor>, (id: string) => void] => {

  const [sensors, sendMessage] = useWebSocket<Sensor>("ws://localhost:5000");

  const toggleSensor = useCallback( (sensorId: string) => {
    const { connected } = sensors[sensorId];
    sendMessage(JSON.stringify({ 
      command: connected ? "disconnect" : "connect", 
      id: sensorId
    }));
  }, [sensors, sendMessage]);

  return [sensors, toggleSensor];

};

export default useSensors;