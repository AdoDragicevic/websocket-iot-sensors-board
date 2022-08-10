import { ChildrenProp } from "../../models/props";

const Header = ({ children }: ChildrenProp) => (
  <header className="header">
    <h1 className="header__title">SensorX</h1>
    {children}
  </header>
);

export default Header;