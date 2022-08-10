import useSensorsWithToggle from "./hooks/useSensorsWithToggle"
import Header from "./components/layout/Header";
import SensorList from "./components/sensor/SensorList";
import ToggleSlider from "./components/UI/ToggleSlider";

const App = () => {

  const { 
    sensors, 
    toggleSensorConnection, 
    toggleIsShowAll,
  } = useSensorsWithToggle();

  return (
    <>
      
      <Header>
        <ToggleSlider onToggle={toggleIsShowAll} optionOne="All" optionTwo="Connected" />
      </Header>
      
      <main>
        <SensorList sensors={sensors} onToggleSensorConnection={toggleSensorConnection} />
      </main>

    </>
  )
};

export default App;