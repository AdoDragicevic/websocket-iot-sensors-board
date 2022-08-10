import { useCallback, useState } from "react";
import { ObjectWithId } from "../models/util";


const useStoreObjectsById = <T extends ObjectWithId>(): [Record<string, T>, (object: T) => void] => {

  const [storage, setStorage] = useState<Record<string, T>>({});
  
  const addToStorage = useCallback( (object: T) => {
    setStorage(prevStorage => (
      { ...prevStorage, [object.id]: object }
    ));
  }, []);

  return [storage, addToStorage];
}

export default useStoreObjectsById;