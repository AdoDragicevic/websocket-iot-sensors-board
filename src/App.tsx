import { useEffect } from "react";
import useStoreObjectsById from "./hooks/useStoreObjectsById";
import { Sensor } from "./models/sensor";


const App = () => {

  const [sensors, addSensor] = useStoreObjectsById<Sensor>();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = function (event) {

      const data = JSON.parse(event.data);
      addSensor(data);
    };
  }, [addSensor]);
  

  console.log(sensors);

  return (
    <p>Hi there App!</p>
  )
};

export default App;
