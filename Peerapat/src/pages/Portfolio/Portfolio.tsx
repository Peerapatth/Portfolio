import Nav from "../Nav";
import { useState } from "react";
import './Portfolio.css'

export const Portfolio = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="Portfolio">
      <Nav
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
    </div>
  );
};
