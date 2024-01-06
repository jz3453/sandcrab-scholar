import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./Contact.css";
import "../../App.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="content">
        <div className="contact-section">
          <div className="section-subtitle contact">Got Questions? Reach Out To Us!</div>
          <div className="email-wrapper">
            <FontAwesomeIcon className="email-icon" icon="fa-regular fa-envelope" />           
            <a href="mailto:380619@calcoisd.org" className="contact-email">380619@calcoisd.org</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
