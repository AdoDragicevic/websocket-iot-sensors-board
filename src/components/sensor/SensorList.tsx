import { SensorListProps } from "../../models/props";
import Sensor from "./Sensor";


const SensorList = ({ sensors, onToggleSensorConnection }: SensorListProps) => {

  if (!sensors.length) {
    return <h2 className="absolute-center header__secondary">No sensors</h2>;
  }

  return (
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
  )
};

export default SensorList;