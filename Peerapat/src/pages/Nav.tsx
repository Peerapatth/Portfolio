import Peerapat from "../assets/Peerapat.svg";
import "./Home/homepage.css";
import {Link} from "react-router-dom"

import React from "react";

interface NavProps {
  activeButton: string;
  handleButtonClick: (button: string) => void;
}

const Nav: React.FC<NavProps> = ({ activeButton, handleButtonClick }) => {
  return (
    <div className="Card__nav">
      <div className="Card__nav__left">
        <div className="Card__nav__icon">
          <img src={Peerapat} alt="Logo" style={{ width: "120%" }} />
        </div>
      </div>
      <div className="Card__nav__right">
        <button
          className={`Card__nav__item ${
            activeButton === "Home" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Home")}
        >
          Home
        </button>
        <button
          className={`Card__nav__item ${
            activeButton === "About" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("About")}
        >
          About
        </button>
        <button
          className={`Card__nav__item ${
            activeButton === "Work" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("Work")}
        >
          Work & Project
        </button>
      </div>
    </div>
  );
};

export default Nav;
