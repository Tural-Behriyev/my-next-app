"use client";

import React, { useState } from "react";

const PopularQuestionsAndAnswersToThemAccardion = ({ accr }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion space-y-4">
      {accr.map(({ question, answer, id }, index) => (
        <div key={id} className="accordion-item transition-all duration-300 py-1">
          <div className="accordion-title flex items-center cursor-pointer" onClick={() => toggle(index)}>
            <span className="mr-2 transition-transform duration-300 text-blue-500">{activeIndex === index ? "-" : "+"}</span>
            <h6 className="font-semibold flex-1 text-left">{question}</h6>
          </div>
          <div className={`accordion-content transition-all duration-300 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden mt-2 ps-4`}>
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularQuestionsAndAnswersToThemAccardion;