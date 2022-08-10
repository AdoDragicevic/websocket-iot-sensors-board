import useToggleBool from "./useToggle";
import useSensors from "./useSensors";
import { Sensor } from "../models/sensor";


const useSensorsWithToggle = (isShowAllSensors: boolean) => {

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