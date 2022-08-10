import { SensorListProps } from "../../models/props";
import Sensor from "./Sensor";


const SensorList = ({ sensors, onToggleSensorConnection }: SensorListProps) => (
  <ul className="sensor-list">
    {sensors.map(s => (
      <li className="sensor-list__item">
        <Sensor
          key={s.id} 
          sensor = {s}
          onToggleSensorConnection={onToggleSensorConnection}
        />
      </li>
    ))}
  </ul>
);

export default SensorList;