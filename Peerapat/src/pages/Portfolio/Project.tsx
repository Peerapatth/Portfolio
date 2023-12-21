import Ant from "../../assets/Project/Ant.png";
import Bangmod from "../../assets/Project/Bangmod.png";
import Pre from "../../assets/Project/Pre.png";
import Tradekub from "../../assets/Project/TradeKub.png";
import Comcamp from "../../assets/Project/Comcamp.png";
import Pres from "../../assets/Project/Pres.png";
import Hack from "../../assets/Project/Hack.png";

import ProjectTradekub from "../../assets/TradeKub/ProjectTradekub.png";
import banner from "../../assets/TradeKub/Banner.png";
import ProjectMODX from "../../assets/MODX/Logo.png";
import MODXBanner from "../../assets/MODX/MODX_Banner.png";
import Mock from "../../assets/MODX/Mock.png";
import Savorly from "../../assets/Savorly/Icon.png";
import BannerSavorly from "../../assets/Savorly/Savorly..png";
import SavorlyPersona from "../../assets/Savorly/Persona.png";
import Style from "../../assets/Savorly/Style.png";

import { useState, useEffect } from "react";
import "./Project.css";

export const Project = () => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setFontSize(20);
      } else if (window.innerWidth >= 768) {
        setFontSize(18);
      } else {
        setFontSize(16);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Project">
      <div className="Work__Title">
        <div className="Work__Toppic">
          <h1>WORK & PROJECT</h1>
        </div>
        <div className="Work__Title__Container">
          <div className="Work__Text">
            <div className="Work__Icon">
              <div className="Work__Logo__Center">
                <div
                  className="Work__Icon__Pic"
                  style={{ backgroundImage: `url(${Hack})` }}
                ></div>
              </div>
              <div className="Work__Logo__Center">
                <div
                  className="Work__Icon__Pic"
                  style={{ backgroundImage: `url(${Pres})` }}
                ></div>
              </div>
              <div className="Work__Logo__Center">
                <div
                  className="Work__Icon__Pic"
                  style={{ backgroundImage: `url(${Comcamp})` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="Work__Text__Title">
                <h2><a
                href="https://www.figma.com/file/peGwOZHzRK1B6d0UoqvFuA/WEBHACKATHON23?type=design&node-id=0%3A1&mode=design&t=vH5Hhu9FTnLELoX4-1"
                target="_blank"
                rel="noopener noreferrer"
              >Staff At BangMod hackathon 2023</a></h2>
                <p>
                  KMUTT <br />
                  Oct 2022 - Nov 2022 · 2 mounts
                  <br />
                  Role : Graphics & UX/UI Team
                </p>
              </div>
              <div className="Work__Text__Title">
                <h2><a
                href="https://www.behance.net/gallery/146855429/Pre-Freshy-CPE-2022"
                target="_blank"
                rel="noopener noreferrer"
              >Staff At Pre Freshy CPE2022</a></h2>
                <p>
                  KMUTT <br />
                  Jun 2022 - Jul 2022 · 2 mounts
                  <br />
                  Role : Graphics Term
                </p>
              </div>
              <div className="Work__Text__Title">
                <h2><a
                href="https://www.behance.net/gallery/146855757/Comcamp-33"
                target="_blank"
                rel="noopener noreferrer"
              >Staff At Comcamp 33</a></h2>
                <p>
                  KMUTT <br />
                  Mar 2022 - Mar 2022 · 2 mounts <br />
                  Role : Graphics & UX/UI Team
                </p>
              </div>
            </div>
          </div>
          <div className="Work__Logo">
            <div className="Work__Logo__Text">
              <h2>LOGO DESIGN</h2>
            </div>
            <div className="Work__Logo__Center">
              <div
                className="Work__Logo__Pic"
                style={{ backgroundImage: `url(${Ant})` }}
              ></div>
            </div>
            <div className="Work__Logo__Center">
              <div
                className="Work__Logo__Pic"
                style={{ backgroundImage: `url(${Bangmod})` }}
              ></div>
            </div>
            <div className="Work__Logo__Center">
              <div
                className="Work__Logo__Pic"
                style={{ backgroundImage: `url(${Pre})` }}
              ></div>
            </div>
            <div className="Work__Logo__Center">
              <div
                className="Work__Logo__Pic"
                style={{ backgroundImage: `url(${Tradekub})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Project__Container">
        <div className="Project__Header">
          <div>
            <div className="Project__Header__Left">
              <div className="Project__Logo">
                <div
                  className="Project__Logo__Pic"
                  style={{ backgroundImage: `url(${ProjectTradekub})` }}
                ></div>
              </div>
              <div>
                <p>Mar 2023 - Feb 2023</p>
              </div>
            </div>
          </div>
          <div>
            <div className="Project__Link">
              <a
                href="https://www.behance.net/gallery/171777891/Tradekub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bx bxl-github"
                  style={{
                    color: "#FFFFFF",
                    fontSize: `${fontSize}px`,
                    marginLeft: "0.5rem",
                  }}
                ></i>
              </a>
              <a
                href="https://www.behance.net/gallery/171777891/Tradekub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bx bxl-behance"
                  style={{
                    color: "#FFFFFF",
                    fontSize: `${fontSize}px`,
                    marginLeft: "0.5rem",
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="Project__Body">
          <p>
            <span
              style={{
                color: "var(--clr6)",
              }}
            >
              TradeKub
            </span>
            {"\u00A0"}is a website used to trade securities online. Its purpose
            is to make it more convenient for investors to issue stock orders.
            TradeKub acts as an intermediary between brokers and users in
            conducting transactions.
          </p>
        </div>
        <div
          className="Project__Banner"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
      </div>
      <div className="Project__Container">
        <div className="Project__Header">
          <div>
            <div className="Project__Header__Left">
              <div className="Project__Logo">
                <div
                  className="Project__Logo__Pic"
                  style={{ backgroundImage: `url(${ProjectMODX})` }}
                ></div>
              </div>
              <div>
                <p>Sep 2023 - Dec 2023</p>
              </div>
            </div>
          </div>
          <div>
            <div className="Project__Link">
              <a
                href="https://github.com/JOKPOON/ModX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bx bxl-github"
                  style={{
                    color: "#FFFFFF",
                    fontSize: `${fontSize}px`,
                    marginLeft: "0.5rem",
                  }}
                ></i>
              </a>
              <a
                href="https://www.behance.net/gallery/186493453/MODX-KMUTT-Book-Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bx bxl-behance"
                  style={{
                    color: "#FFFFFF",
                    fontSize: `${fontSize}px`,
                    marginLeft: "0.5rem",
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="Project__Body">
          <p>
            <span
              style={{
                color: "var(--clr6)",
              }}
            >
              Modx
            </span>
            {"\u00A0"}is an online shopping platform designed specifically for
            the KMUTT bookstore.
          </p>
        </div>
        <div className="Banner__Mid">
          <div className="MODX__Banner">
            <div
              className="Project__Banner__MODX"
              style={{ backgroundImage: `url(${MODXBanner})` }}
            ></div>
          </div>
        </div>
        <div className="Project__Body">
          <h2>The Problem</h2>
          <p>
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}
            {"\u00A0"}The current method of selling products online for King
            Mongkut's University of Technology Thonburi (KMUTT) relies on the
            Facebook page of KMUTT Book Store. However, this approach comes with
            several limitations. For instance, the process of purchasing a
            specific item requires customers to notify store staff and wait for
            a response before proceeding with the purchase. Additionally, buyers
            must complete a money transfer and send a payment slip for
            confirmation. The search for products is also challenging through
            this platform.
          </p>
        </div>
        <div
          className="Project__MODX__MOCKUP"
          style={{ backgroundImage: `url(${Mock})` }}
        ></div>
      </div>
      <div className="Project__Container">
        <div className="Project__Header">
          <div>
            <div className="Project__Header__Left">
              <div className="Project__Logo">
                <div
                  className="Project__Logo__Pic"
                  style={{ backgroundImage: `url(${Savorly})` }}
                ></div>
              </div>
              <div>
                <p>Mar 2023 - Feb 2023</p>
              </div>
            </div>
          </div>
          <div>
            <div className="Project__Link">
              <a
                href="https://www.behance.net/gallery/178419879/Savorly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bx bxl-behance"
                  style={{
                    color: "#FFFFFF",
                    fontSize: `${fontSize}px`,
                    marginLeft: "0.5rem",
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="Project__Body">
          <p>
            <span
              style={{
                color: "var(--clr6)",
              }}
            >
              Savorly
            </span>
            , your comprehensive meal companion designed to seamlessly address
            the challenges of your busy lifestyle. to make your days more
            comfortable by revolutionizing the way you approach meals.
          </p>
        </div>
        <div className="Banner__Mid">
          <div className="MODX__Banner">
            <div
              className="Project__Banner__Savoly"
              style={{ backgroundImage: `url(${BannerSavorly})` }}
            ></div>
          </div>
        </div>
        <div className="Project__Body">
          <h2>Persona</h2>
        </div>
        <div
          className="Project__Pesona"
          style={{ backgroundImage: `url(${SavorlyPersona})` }}
        ></div>
      </div>
      <div className="Pains__Container">
        <div className="Project__Pains">
          <h2>Pain Points</h2>
        </div>
        <div className="Project__Painpoits">
          <p>
            <span
              style={{
                color: "#FF784D",
                fontWeight: "bold",
              }}
            >
              Time Constraints:
            </span>
            {"\u00A0"}Long work hours limit time and energy for meal
            preparations.
          </p>
        </div>
        <div className="Project__Painpoits">
          <p>
            <span
              style={{
                color: "#FF784D",
                fontWeight: "bold",
              }}
            >
              Quality Concerns:
            </span>
            {"\u00A0"}Difficulty identifying consistent and quality dining
            options.
          </p>
        </div>
        <div className="Project__Painpoits">
          <p>
            <span
              style={{
                color: "#FF784D",
                fontWeight: "bold",
              }}
            >
              Health Consciousness:
            </span>
            {"\u00A0"}Struggles to find healthy meals that match his
            preferences.
          </p>
        </div>
        <div className="Project__Painpoits">
          <p>
            <span
              style={{
                color: "#FF784D",
                fontWeight: "bold",
              }}
            >
              Lack of Variety:
            </span>
            {"\u00A0"}Becomes bored with repetitive dining choices.
          </p>
        </div>
      </div>
      <div className="Banner__Mid">
        <div className="MODX__Banner">
          <div className="Project__StyleGuide">
            <h2>Style Guide</h2>
          </div>
          <div
            className="Project__Banner__Savoly"
            style={{ backgroundImage: `url(${Style})` }}
          ></div>
        </div>
      </div>
      <div className="Work__Toppic">
        <h1>CERTIFICATES</h1>
      </div>
      <div className="Cer__Container">
        <div className="Cer__Container__Text">
          <p>May - Aug 2022 · 4 months</p>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/WCSPYVHZZQSY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Google UX Design Specialization</h2>
          </a>
          <p>
            Acquired proficiency in user research, prototyping, wireframing, and
            interaction design.
          </p>
        </div>
        <div className="Cer__Container__Text">
          <p>Sep 2022 - Present</p>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/BVC3DFWVX2F9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Advanced React</h2>
          </a>
          <p>
            6/9 Completed - Meta FrontEnd Developer Professional Certificate
          </p>
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
