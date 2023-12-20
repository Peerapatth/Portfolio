import KMUTT from "../../assets/KMUTT.png";
import Address from "../../assets/Address.png";
import Email from "../../assets/Email.png";
import Phone from "../../assets/Call.png";
import Me from "../../assets/Me.png";

import React from "../../assets/Skills/Programming/React.svg";
import JS from "../../assets/Skills/Programming/React.svg";
import TS from "../../assets/Skills/Programming/TS.svg";
import HTML from "../../assets/Skills/Programming/HTML.svg";
import CSS from "../../assets/Skills/Programming/CSS.svg";
import Go from "../../assets/Skills/Programming/Go.svg";
import C from "../../assets/Skills/Programming/C.svg";
import Python from "../../assets/Skills/Programming/Python.svg";
import tailwind from "../../assets/Skills/Programming/Tailwind.svg";

import Figma from "../../assets/Skills/Tools/Figma.svg";
import AdobeXD from "../../assets/Skills/Tools/XD.svg";
import Photoshop from "../../assets/Skills/Tools/PS.svg";
import VSCode from "../../assets/Skills/Tools/VS.svg";
import Git from "../../assets/Skills/Tools/Git.svg";

import Mongo from "../../assets/Skills/Database/Mongo.svg";
import Prograse from "../../assets/Skills/Database/Prograse.svg";
import Oracle from "../../assets/Skills/Database/Oracle.svg";

import "./About.css";

export const About = () => {
  return (
    <div className="About">
      <div className="About__Me">
        <div className="About__Left">
          <div
            className="About__Me__Image"
            style={{ backgroundImage: `url(${Me})` }}
          ></div>
        </div>
        <div className="About__Right">
          <div className="About__Detail">
            <h3>PEERAPAT</h3>
            <h3>PADTAWARO</h3>
            <p>
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
            </p>
          </div>
          <div className="About__Contact">
            <div className="About__Contact__detail">
              <div
                className="Contact__Icon"
                style={{ backgroundImage: `url(${Address})` }}
              ></div>
              <div>
                <p>
                  P.S. House, Pracha Uthit 36 Alley,
                  <br />
                  Bang Mot, Thung Khru,
                  <br /> Bangkok 10140
                </p>
              </div>
            </div>
            <div className="About__Contact__detail">
              <div
                className="Contact__Icon"
                style={{ backgroundImage: `url(${Email})` }}
              ></div>
              <div>
                <p>peerapat.xiv@gmail.com</p>
              </div>
            </div>
            <div className="About__Contact__detail">
              <div
                className="Contact__Icon"
                style={{ backgroundImage: `url(${Phone})` }}
              ></div>
              <div>
                <p>+66 (0) 09 174 5520</p>
              </div>
            </div>
          </div>
          <div className="About__Profile">
            <h1>PROFILE</h1>
            <p>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"} 

              I'm a Computer Engineering student at KMUTT with a strong interest
              in Frontend Development and UX/UI Design. passion lies in creating
              seamless user experiences through clean and interactive
              interfaces. Currently learning, and exploring the world of
              technology.
            </p>
            <div className="About__Profile__Link">
              <div className="About__Profile__Link__Line"></div>
              <div className="About__Profile__Link__Icon">
                <div className="bx bx-expand-horizontal"></div>
                <div className="bx bxl-linkedin"></div>
                <div className="bx bxl-behance"></div>
                <div className="bx bxl-github"></div>
              </div>
              <div>
                <div className="About__Profile__Link__detail">
                  <a
                    href="https://www.figma.com/proto/zL8oeKqRLu2jqVApfUGLQP/Peerapat?page-id=323%3A20&type=design&node-id=490-2&viewport=528%2C490%2C0.68&t=z73s5ZlHRswFhRmq-1&scaling=contain&mode=design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </div>
                <div className="About__Profile__Link__detail">
                  <a
                    href="https://www.linkedin.com/in/peerapatpadt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="About__Profile__Link__detail">
                  <a
                    href="https://www.behance.net/peerapatpadtawaro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Behance
                  </a>
                </div>
                <div className="About__Profile__Link__detail">
                  <a
                    href="https://github.com/Peerapatth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="About__Education">
              <h1>EDUCATION</h1>
              <div className="About__Education__Cotainer">
                <div className="About__Education__Icon">
                  <div
                    className="Education__ICON"
                    style={{ backgroundImage: `url(${KMUTT})` }}
                  ></div>
                  <div className="Education__Line"></div>
                  <div className="Education__Dot"></div>
                </div>
                <div className="About__Education__detail">
                  <div className="About__Education__KMUTT">
                    <h2>King Mongkut's University of Technology Thonburi</h2>
                    <p>Computer Engineering</p>
                    <p>Bachelor of Engineering - BE</p>
                    <p>2021 - Present</p>
                  </div>
                  <div className="About__Education__KMUTT">
                    <h2>Sriboonruang Wittayakarn School</h2>
                    <p>Science Math Technology and Environment (SMTE)</p>
                    <p>High School Diploma</p>
                    <p>2018 - 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About__Grid">
        <div></div>
        <div className="About__Skill">
          <h1>SKILLS</h1>
          <h2>Programming Languages</h2>
          <div className="About__Skill__Container">
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${React})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${JS})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${TS})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${HTML})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${CSS})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${Go})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${C})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${Python})` }}
            ></div>

            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${tailwind})` }}
            ></div>
          </div>
          <h2>Software & Tools</h2>
          <div className="About__Skill__Container">
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${Figma})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${AdobeXD})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${Photoshop})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${VSCode})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${Git})` }}
            ></div>
          </div>
          <h2>Database</h2>
          <div className="About__Skill__Container">
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${Mongo})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${Prograse})` }}
            ></div>
            <div
              className="Skill__Icon"
              style={{ backgroundImage: `url(${Oracle})` }}
            ></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
