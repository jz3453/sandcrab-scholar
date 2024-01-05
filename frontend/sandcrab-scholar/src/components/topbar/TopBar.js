import React, { useState, useEffect } from "react";
import "./TopBar.css";
import "../../App.css";

const TopBar = ({ scrollToSection }) => {
  return (
    <div className="topbar">
      <div className="content centered">
        <div className="topbar-content">
          <div className="page-title">SANDCRAB SCHOLARS</div>
          <div className="nav-links">
            <button className="link" onClick={() => scrollToSection("about")}>
              ABOUT
            </button>
            <button className="link" onClick={() => scrollToSection("form")}>
              SUBMIT A FORM
            </button>
            <button className="link" onClick={() => scrollToSection("mentors")}>
              MENTORS
            </button>
            <button className="link" onClick={() => scrollToSection("faq")}>
              FAQ
            </button>
            <button className="link" onClick={() => scrollToSection("contact")}>
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
