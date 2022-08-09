import { useEffect, useState } from "react";
import useStoreObjectsById from "./hooks/useStoreObjectsById";






interface Sensor { id:	string;	name:	string;	connected:	boolean; unit:	string;	value:	string }


const App = () => {

  const [sensors, setSensors] = useStoreObjectsById<Sensor>();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = function (event) {
      // we get an object
      //console.log(event);
      
      //console.log("message");
      //console.log(typeof event);
      //const json = JSON.parse(event.data);
      //console.log(typeof json);
    };
  }, []);
  

  return (
    <p>Hi there App!</p>
  )
};

export default App;
