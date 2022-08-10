import { useState, useEffect } from "react";
import useStoreObjectsById from "./useStoreObjectsById";


const useWebSocket = (url: string) => {
  
  const [storage, addToStorage] = useStoreObjectsById();
  const [sendMessage, setSendMessage] = useState<(msg:string) => void>();

  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = e => addToStorage(JSON.parse(e.data));
    setSendMessage(() => (msg: string) => ws.send(JSON.stringify(msg)) );
    return () => ws.close(1000, "Component unmounted");
  }, [url, addToStorage]);

  return [storage, sendMessage];
};

export default useWebSocket;