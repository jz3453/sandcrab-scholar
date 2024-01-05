import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./About.css";
import "../../App.css";
import scholar from "../../images/scholar.png";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <div className="about-intro-section">
          <div className="left-content">
            <div className="motto">
              Building Bright Futures, <br /> Crab to Crab
            </div>
            <div className="mission-statement">
              <span className="bold cursive">Our Mission:</span> To connect current
              Calhoun high school students like you with experienced alumni who
              have successfully maneuvered the college application process and
              college life. Through personalized mentorship, we aim to provide
              you with invaluable insights, advice, and encouragement, helping
              you make informed decisions about your future.
            </div>
          </div>
          <div className="right-content">
            <img src={scholar} alt="Scholar hard at work" />
          </div>
        </div>
        <div className="how-we-help-section">
          <div className="section-title">How We Can Help</div>
          <div className="column-container">
            <div className="column">
              <div className="column-icon">
                <FontAwesomeIcon className="icon" icon="fa-solid fa-magnifying-glass" />
              </div>
              <div className="column-title">Finding the Right College</div>
              <div className="column-description">
                Discovering the right college and field of study can be 
                an overwhelming journey. We’re here to help you navigate 
                this crucial decision-making process. From exploring your 
                passions to researching colleges and career paths, our 
                mentors are here to provide tailored advice and insights, 
                empowering you to make informed choices that align with 
                your academic aspirations and future goals.
              </div>
            </div>
            <div className="column">
              <div className="column-icon">
                <FontAwesomeIcon className="icon" icon="fa-solid fa-pen" />
              </div>
              <div className="column-title">Applying to College</div>
              <div className="column-description">
                Discover the support you need for a seamless journey through 
                the college application process. Our mentors offer valuable 
                guidance, from refining essay writing skills to acing 
                interviews and meeting crucial deadlines. You can count on 
                us to walk alongside you at every stage, ensuring you're 
                well-prepared and confident as you apply to colleges.
              </div>
            </div>
            <div className="column">
              <div className="column-icon">
                <FontAwesomeIcon className="icon" icon="fa-solid fa-building-columns" />
              </div>
              <div className="column-title">Understanding College Life</div>
              <div className="column-description">
                Transitioning to college life can be exciting yet challenging. 
                We can provide valuable insights to help you thrive in this 
                new chapter. From understanding campus culture to managing 
                academics and social life, our experienced mentors offer 
                guidance for a successful and fulfilling college experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
