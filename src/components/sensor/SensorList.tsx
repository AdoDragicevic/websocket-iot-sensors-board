import { SensorListProps } from "../../models/props";
import Sensor from "./Sensor";


const SensorList = ({ sensors, onToggleSensorConnection }: SensorListProps) => {

  if (!sensors.length) {
    return <h2 className="absolute-center header__secondary">No sensors</h2>;
  }

  return (
    <ul className="sensor-list">
      {sensors.map(s => (
        <li key={s.id} className="sensor-list__item">
          <Sensor
            sensor = {s}
            onToggleSensorConnection={onToggleSensorConnection}
          />
        </li>
      ))}
    </ul>
  )
};

export default SensorList;