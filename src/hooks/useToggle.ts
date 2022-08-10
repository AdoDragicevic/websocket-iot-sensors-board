import { useState } from "react";


const useToggleBool = (initState = true): [boolean, () => void] => {
  const [val, setVal] = useState(initState);
  const toggle = () => setVal(v => !v);
  return [val, toggle];
}

export default useToggleBool;