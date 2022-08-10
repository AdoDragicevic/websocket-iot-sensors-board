import { useState, useEffect } from "react";
import useStoreObjectsById from "./useStoreObjectsById";
import { ObjectWithId } from "../models/util";


const useWebSocket = <T extends ObjectWithId>(url: string): [Record<string, T>, (str: string) => void] => {
  
  const [storage, addToStorage] = useStoreObjectsById<T>();
  const [sendMessage, setSendMessage] = useState<(msg:string) => void>(() => {});

  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onmessage = e => addToStorage(JSON.parse(e.data));
    setSendMessage(() => (msg: string) => ws.send(msg) );
    return () => ws.close(1000, "Component unmounted");
  }, [url, addToStorage]);

  return [storage, sendMessage];
};

export default useWebSocket;