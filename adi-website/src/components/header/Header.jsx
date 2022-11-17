import React from "react";
import "./header.css";
// import CTA from "./CTA";
// import ME from "../../assets/me.png";
// import HeaderSocials from "./HeaderSocials";
// import { Circle } from "react-konva";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <div className="container header_container" id="#home">
        <h1 className="title-shadow">ADI CARMEL</h1>

        {/* <CTA /> */}
        {/* <HeaderSocials /> */}

        {/* <div className="me"><img src={ME} alt="me"></img></div> */}
        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
