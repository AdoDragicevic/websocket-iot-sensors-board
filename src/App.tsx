import useSensorsWithToggle from "./hooks/useSensorsWithToggle"
import Header from "./components/layout/Header";
import SensorList from "./components/sensor/SensorList";


const App = () => {

  const {
    sensors, toggleSensorConnection,
    isShowAll, toggleIsShowAll,
  } = useSensorsWithToggle();

  return (
    <>
      
      <Header>
        <button onClick={toggleIsShowAll}>
          {isShowAll ? "Show Connected" : "Show All"}
        </button>
      </Header>
      
      <main>
        <SensorList sensors={sensors} onToggleSensorConnection={toggleSensorConnection} />
      </main>

    </>
  )
};

export default App;