import { useEffect } from "react";
import useSensorsWithToggle from "./hooks/useSensorsWithToggle";

let ws: WebSocket;

const App = () => {

  /*
  const { 
    sensors, 
    toggleSensorConnection, 
    isShowAll, 
    toggleIsShowAll } = useSensorsWithToggle();

  console.log(sensors);

  const handleToggleConnection = () => {
    toggleSensorConnection("0");
  }
  */

  /*
  useEffect( () => {
    console.log("RUNNNS ONCEEE")
    ws = new WebSocket("ws://localhost:5000");
    ws.onmessage = e => console.log(e);
    
    return () => ws.close(1000, "end");
  }, [] )

  const handleSend = () => {
    const instructions = { command: "disconnect", id: "1"};
    ws.send( JSON.stringify(instructions) );
    //ws.close();
  }
  */

  return (
    <button>Send</button>
  )
};

export default App;