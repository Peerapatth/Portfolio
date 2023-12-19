import Peerapat from "../assets/Peerapat.svg";
import { NavLink } from "react-router-dom";
import React from "react";

interface NavProps {
  handleButtonClick: (button: string) => void;
}

const Nav: React.FC<NavProps> = ({ handleButtonClick }) => {
  return (
    <div className="Card__nav">
      <div className="Card__nav__left">
        <div className="Card__nav__icon">
          <NavLink
            to="/"
            className="Card__nav__icon"
            onClick={() => handleButtonClick("Home")}
          >
            <img src={Peerapat} alt="Logo" style={{ width: "125%" }} />
          </NavLink>
        </div>
      </div>
      <div className="Card__nav__right">
        <NavLink
          to="/"
          className="Card__nav__item"
          onClick={() => handleButtonClick("Home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="Card__nav__item"
          onClick={() => handleButtonClick("About")}
        >
          About
        </NavLink>
        <NavLink
          to="/work"
          className="Card__nav__item"
          onClick={() => handleButtonClick("Work")}
        >
          Work & Project
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
