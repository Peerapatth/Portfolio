import "./homepage.css";
import Me from "../../assets/Me.jpg";
import Nav from "../Nav";


import { useState, useEffect } from "react";
const TypingName = () => {
  const fullName = "Peerapat Padtawaro";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, index + 1));
      index++;
      if (index > fullName.length) {
        index = 0; 
        setDisplayedName(""); 
      }
    }, 200); 

    return () => clearInterval(interval); 
  }, [fullName]);

  return (
    <div className="Card__body__name">{displayedName}</div>
  );
};
export const Homepage = () => {
  const handleButtonClick = (button: string) => {
    button;
  };

  return (
    <div className="homepage">
      <div className="Card">
        <Nav handleButtonClick={handleButtonClick} />
        <div className="Card__body">
          <div className="Card__body__left">
            <div className="Card__body__title">Hello, I am</div>
            <TypingName />
            <div className="Card__body__subtitle">
              <span
                className="Card__body__subtitle__text"
                style={{
                  color: "#F2F2F2",
                  fontWeight: "500",
                  marginRight: "2%",
                }}
              >
                COMPUTER ENGINEERING
              </span>
              STUDENT
            </div>
          </div>
          <div className="Card__body__right">
            <div className="Card__body__circle">
              <div
                className="Card__body__image"
                style={{ backgroundImage: `url(${Me})` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="Card__footer">
          peerapat.xiv@gmail.com / +66 (0) 09 174 5520
        </div>
      </div>
      <div className="Contact">
        <div className="Contact__title">Contact me</div>
        <div className="Contact__body">
          <a href="https://www.linkedin.com/in/peerapatpadt/" target="_blank">
            <i
              className="bx bxl-linkedin"
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                margin: "0.25rem",
              }}
            ></i>
          </a>
          <a href="https://github.com/Peerapatth" target="_blank">
            <i
              className="bx bxl-github"
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                margin: "0.25rem",
              }}
            ></i>
          </a>
          <a href="https://www.behance.net/peerapatpadtawaro" target="_blank">
            <i
              className="bx bxl-behance"
              style={{
                color: "#FFFFFF",
                fontSize: "1.5rem",
                margin: "0.25rem",
              }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};
