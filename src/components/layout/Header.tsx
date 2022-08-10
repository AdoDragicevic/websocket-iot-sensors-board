import { ChildrenProp } from "../../models/props";

const Header = ({ children }: ChildrenProp) => (
  <header className="header">
    <h1>SensorX</h1>
    {children}
  </header>
);

export default Header;