import { memo } from "react";
import { ToggleSliderProps } from "../../models/props";


const ToggleSlider = ({ onToggle, optionOne, optionTwo }: ToggleSliderProps) => (
  <nav className="toggle-slider">
    <span className="toggle-slider__option toggle-slider__option--2">
      {optionOne}
    </span>
    <label className="switch">
      <input type="checkbox" onChange={onToggle}/>
      <span className="slider round"></span>
    </label>
    <span className="toggle-slider__option toggle-slider__option--2">
      {optionTwo}
    </span>
  </nav>
);

export default memo(ToggleSlider);