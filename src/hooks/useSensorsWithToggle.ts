import useToggleBool from "./useToggle";
import useSensors from "./useSensors";
import { Sensor } from "../models/sensor";



/*
const useFilteredSensors = (filter: SensorFilter) => {
  const [sensors, toggleSensorConnection] = useSensors();
  let filtered: Sensor[];
  switch(filter) {
    
  }
};
*/

const useSensorsWithToggle = (isShowAllSensors = true) => {

  const [sensors, toggleSensorConnection] = useSensors();

  const [isShowAll, toggleIsShowAll] = useToggleBool(isShowAllSensors);

  let filtered = Object.keys(sensors).map(key => sensors[key]);

  if (!isShowAll) {
    filtered = filtered.filter((s: Sensor) => s.connected);
  }

  return {
    sensors: filtered,
    isShowAll,
    toggleSensorConnection,
    toggleIsShowAll
  }

};

export default useSensorsWithToggle;