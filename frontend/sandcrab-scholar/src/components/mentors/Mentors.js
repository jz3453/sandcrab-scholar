import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Mentors.css";
import "../../App.css";
import uticon from "../../images/UT-icon.png";
import atmicon from "../../images/A&M-icon.png";
import vcicon from "../../images/VC-icon.png";
import columbiaicon from "../../images/Columbia-icon.png";
import cornellicon from "../../images/Cornell-icon.png";

const Mentors = () => {
  return (
    <div className="our-mentors">
      <div className="content">
        <div className="mentors-section">
          <div className="section-title">Our Mentors</div>
          <div className="section-description">
            Meet our diverse group of mentors—accomplished alumni from 
            Calhoun High School—who are eager to share their experiences 
            and provide guidance in your college application journey. 
            Each mentor brings unique insights, hailing from various 
            colleges and fields of study, ready to support and inspire 
            you through their wealth of knowledge and firsthand experiences.
          </div>
          <div className="section-subtitle small-margin">Our Mentors Go To College At...</div>
          <div className="note">(Bear with us! We're in the process of recruiting more mentors.)</div>
          <div className="logo-container">
            <img className="logo" src={uticon} alt="University of Texas Logo" />
            <img className="logo" src={atmicon} alt="Texas A&M Logo" />
            <img className="logo" src={columbiaicon} alt="Columbia University Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
