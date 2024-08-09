import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      {faqData.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{item.category}</h2>
          {typeof item.questions === "number" ? (
            <p>Ответов на вопросы {item.questions}</p>
          ) : (
            <ul className="list-disc pl-5 space-y-2">
              {item.questions.map((question, qIndex) => (
                <li key={qIndex}>{question}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;