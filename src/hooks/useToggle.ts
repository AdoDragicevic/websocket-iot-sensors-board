import { useCallback, useState } from "react";


const useToggleBool = (initState = true): [boolean, () => void] => {
  const [val, setVal] = useState(initState);
  const toggle = useCallback(() => setVal(v => !v), []);
  return [val, toggle];
}

export default useToggleBool;