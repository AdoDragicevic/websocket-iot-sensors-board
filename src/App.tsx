
import useWebSocket from "./hooks/useWebSocket";


const App = () => {

  const [data, sendMessage] = useWebSocket("ws://localhost:5000");
  
  return (
    <p>Hi there App!</p>
  )
};

export default App;