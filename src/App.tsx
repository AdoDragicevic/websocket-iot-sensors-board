import { useEffect, useState } from "react";
import useStoreObjectsById from "./hooks/useStoreObjectsById";
import { Sensor } from "./models/sensor";





const App = () => {

  const [sensors, addSensor] = useStoreObjectsById<Sensor>();
  const [error, setError] = useState<null | string>(null);
  useWebSocket("ws://localhost:5000", addSensor, setError);

  console.log(sensors);
  
  return (
    <p>Hi there App!</p>
  )
};

export default App;
