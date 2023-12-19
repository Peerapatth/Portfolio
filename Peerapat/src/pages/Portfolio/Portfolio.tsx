import Nav from "../Nav";
import "./Portfolio.css";
import {About, Project} from '../index'

export const Portfolio = () => {
  const handleButtonClick = (button: string) => {
    button;
  };

  return (
    <div className="Portfolio">
      <div className="Container">
        <Nav handleButtonClick={handleButtonClick} />
        </div>
        <About/>
        <Project/>
    </div>
  );
};
