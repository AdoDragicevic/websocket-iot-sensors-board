import { useEffect } from "react";


const App = () => {

  

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = function (event) {
      console.log("message");
      //const json = JSON.parse(event.data);
      //console.log(json);
    };
  }, []);
  

  return (
    <p>Hi there App!</p>
  )
};

export default App;
