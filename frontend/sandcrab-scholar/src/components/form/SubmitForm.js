import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SubmitForm.css";
import "../../App.css";
import sanddollar from "../../images/sanddollar.png";

const SubmitForm = () => {
  return (
    <div className="submit-form">
      <div className="content">
        <div className="how-it-works-section">
          <div className="section-title">How It Works</div>
          <div className="container">
            <div className="column">
              <div className="column-title cursive">step 1</div>
              <div className="column-text">
                Fill out a simple form detailing your interests, intended major, 
                school preferences, and more. This information helps us understand 
                your needs and aspirations.
              </div>
            </div>
            <FontAwesomeIcon className="arrow-icon" icon="fa-solid fa-arrow-right" />
            <div className="column">
              <div className="column-title cursive">step 2</div>
              <div className="column-text">
                Using the data you provide, our platform's matching system 
                carefully pairs you with a mentor whose experiences and expertise 
                align with your goals.              
              </div>
            </div>
            <FontAwesomeIcon className="arrow-icon" icon="fa-solid fa-arrow-right" />
            <div className="column">
              <div className="column-title cursive">step 3</div>
              <div className="column-text">
                After being matched, start engaging with your dedicated mentor. 
                Benefit from personalized guidance and support tailored 
                specifically to your college application journey.              
              </div>
            </div>
          </div>
          <img className="sanddollar" src={sanddollar} alt="Sand Dollar" />
          <div className="section-subtitle">What To Get Matched?</div>
          <button className="form-btn">
            <a href="https://forms.gle/K4baCENJ8tdhUtgo7" target="_blank">
              SUBMIT A FORM
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
