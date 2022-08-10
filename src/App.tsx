import useSensorsWithToggle from "./hooks/useSensorsWithToggle";


const App = () => {

  const {
    sensors,
    toggleSensorConnection,
    isShowAll,
    toggleIsShowAll
  } = useSensorsWithToggle();

  console.log(sensors);

  const handleToggleFirstSensor = () => toggleSensorConnection("0");

  return (
    <button onClick={handleToggleFirstSensor}>Send</button>
  )
};

export default App;