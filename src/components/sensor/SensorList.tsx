import { SensorListProps } from "../../models/props";
import SensorListItem from "./SensorListItem";


const SensorList = ({ sensors, onToggleSensorConnection }: SensorListProps) => {
  
  const items = sensors.map(s => {
    const handleToggleSensorConnection = () => {
      onToggleSensorConnection(s.id);
    }
    return (
      <SensorListItem 
        key={s.id} 
        sensor = {s}
        onToggleSensorConnection={handleToggleSensorConnection} 
      />
    )});
  
  return (
    <ul className="sensor-list">
      {items}
    </ul>
  )
};

export default SensorList;