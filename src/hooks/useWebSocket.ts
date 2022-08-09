import { useEffect } from "react";


const useWebSocket = (url: string, onMessage: (data: any) => void, onError: (err: string) => void) => {
  
  useEffect(() => {
    
    const ws = new WebSocket(url);
    
    ws.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);
      onMessage(parsedData);
    };
    
    return () => ws.close(1000, "Component unmounted");
  
  }, [url, onMessage, onError]);

  
};

export default useWebSocket;