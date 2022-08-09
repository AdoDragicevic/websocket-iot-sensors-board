import { useEffect } from "react";
import useStoreObjectsById from "./hooks/useStoreObjectsById";


interface Sensor { id:	string;	name:	string;	connected:	boolean; unit:	string;	value:	string }


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
