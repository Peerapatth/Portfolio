import Nav from "../Nav";
import "./Portfolio.css";
import { About, Project } from "../index";

export const Portfolio = () => {
  const handleButtonClick = (button: string) => {
    button;
  };

  return (
    <div className="Portfolio">
      <div className="Container">
        <div className="Nav">
          <Nav handleButtonClick={handleButtonClick} />
        </div>
      </div>
      <About />
      <Project />
    </div>
  );
};
