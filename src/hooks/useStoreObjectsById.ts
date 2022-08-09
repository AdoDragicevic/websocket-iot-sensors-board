import { useCallback, useState } from "react";

interface ObjectWithId {
  id: string;
}

const useStoreObjectsById = <T extends ObjectWithId>(): [Record<string, T>, (object: T) => void] => {

  const [storage, setStorage] = useState<Record<string, any>>({});
  
  const addToStorage = useCallback( (object: T) => {
    setStorage(prevStorage => (
      { ...prevStorage, [object.id]: object }
    ));
  }, []);

  return [storage, addToStorage];
}

export default useStoreObjectsById;