import useSensorsWithToggle from "./hooks/useSensorsWithToggle";


const App = () => {

  const {
    sensors,
    toggleSensorConnection,
    isShowAll,
    toggleIsShowAll
  } = useSensorsWithToggle(false);

  const handleToggleFirstSensor = () => toggleSensorConnection("0");

  return (
    <button onClick={handleToggleFirstSensor}>Send</button>
  )
};

export default App;