"use client";

import { useState } from 'react';

const FAQAccordion = ({ faqSections }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleSection = (sectionIndex) => {
    setActiveSectionIndex(activeSectionIndex === sectionIndex ? null : sectionIndex);
    setActiveQuestionIndex(null);
  };

  const toggleQuestion = (questionIndex) => {
    setActiveQuestionIndex(activeQuestionIndex === questionIndex ? null : questionIndex);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full mt-10 mx-auto">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            <div
              className="py-4 cursor-pointer flex items-center border-b"
              onClick={() => toggleSection(sectionIndex)}
            >
              <h3 className="text-lg font-medium">{section.title}</h3>
              <span className='ps-7'>{activeSectionIndex === sectionIndex ? '-' : '+'}</span>
            </div>
            {activeSectionIndex === sectionIndex && (
              <ul className="p-4">
                {section.questions.map((question, questionIndex) => (
                  <li key={questionIndex} className="mb-2">
                    <div
                      className="cursor-pointer flex items-center"
                      onClick={() => toggleQuestion(questionIndex)}
                    >
                      <span>{question}</span>
                      <span className='ps-7'>{activeQuestionIndex === questionIndex ? '-' : '+'}</span>
                    </div>
                    {activeQuestionIndex === questionIndex && (
                      <p className="ml-4 mt-2 text-sm text-gray-700">
                        {`Cavap: ${question}`}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
