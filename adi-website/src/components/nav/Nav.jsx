import React from "react";
import "./nav.css";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <Navbar className="nav" sticky="top">
      <div className="container nav">
        <div className="nav-cont">
          <Navbar.Brand className="nav-elt" href="#home">
            Home
          </Navbar.Brand>
        </div>
        <div className="nav-cont">
          <Navbar.Brand className="nav-elt" href="#about">
            About
          </Navbar.Brand>
        </div>
        <div className="nav-cont">
          <Navbar.Brand className="nav-elt" href="#projects">
            Projects
          </Navbar.Brand>
        </div>
        <div className="nav-cont">
          <Navbar.Brand className="nav-elt" href="#podcasts">
            Podcasts
          </Navbar.Brand>
        </div>
        <div className="nav-cont">
          <Navbar.Brand className="nav-elt" href="#books">
            Books
          </Navbar.Brand>
        </div>
        <div className="nav-cont">
          <Navbar.Brand className="nav-elt" href="#Contact">
            Contact
          </Navbar.Brand>
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
