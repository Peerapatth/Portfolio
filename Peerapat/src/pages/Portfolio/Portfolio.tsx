import Nav from "../Nav";
import "./Portfolio.css";
import { About, Project } from "../index";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }), [];
  const handleButtonClick = (button: string) => {
    const element = document.getElementById(button.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Portfolio">
      <div id="home"></div>
      <div id="about" style={{ paddingTop: "50px" }}>
        <About />
      </div>
      <div id="work" style={{ paddingTop: "50px" }}>
        <Project />
      </div>
      <div className="Container">
        <div className="Nav">
          <Nav handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};