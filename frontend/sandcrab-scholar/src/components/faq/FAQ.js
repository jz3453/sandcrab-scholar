import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./FAQ.css";
import "../../App.css";
import { faqdata } from "../../constants/FAQData";
import shell from "../../images/shell.png";

const FAQ = () => {
  return (
    <div className="college-faq">
      <div className="content">
        <div className="faq-section">
          <img className="shell" src={shell} alt="Sea Shell" />
          <div className="section-title">FAQs About College</div>
          {
            faqdata.map((faq, index) => {
              return (
                <Accordion className="faq-container">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div className="faq-question">{faq.question}</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="faq-answer">{faq.answer}</div>
                  </AccordionDetails>
                </Accordion>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default FAQ;
