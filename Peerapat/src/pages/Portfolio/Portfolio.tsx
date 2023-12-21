import  { useEffect, useState } from 'react';
import Nav from "../Nav";
import "./Portfolio.css";
import { About, Project } from "../index";

export const Portfolio = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleButtonClick = (button: string) => {
    const element = document.getElementById(button.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`Portfolio ${fadeIn ? 'fade-in' : ''}`}>
      <div id="home"></div>
      <div id="about" className="Container">
        <About />
      </div>
      <div id="work" className="Container">
        <Project />
      </div>
      <div className={`Container Nav ${fadeIn ? 'fade-in' : ''}`}>
        <Nav handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};
