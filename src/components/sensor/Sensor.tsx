import { memo } from "react";
import { SensorProps } from "../../models/props";

const Sensor = ({ sensor, onToggleSensorConnection }: SensorProps) => {

  const handleClick = () => onToggleSensorConnection(sensor.id);

  return (
    <article className="sensor">
      <h2 className="sensor__name">{sensor.name}</h2>
      <div className="sensor__values">
        <p className="sensor__value">{sensor.value}</p>
        <p className="sensor__unit">{sensor.unit}</p>
      </div>
      <div className="sensor__options">
        <button className="sensor__btn" onClick={handleClick}>Change</button>
      </div>
    </article>
  )
};

export default memo(Sensor);