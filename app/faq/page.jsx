import FAQAccardion from '@/Components/FAQAccardion';
import FAQData from '@/Components/FAQAccardion/FAQData';
import NoAnswerToYourQuestion from '@/Components/NoAnswerToYourQuestion';
import React from 'react';


const FAQ = () => {
  return (
    <>
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mt-6">Популярные вопросы и ответы на них</h1>
      <FAQAccardion faqSections={FAQData} />
    </div>
    <div className="flex justify-center mt-16">
      <NoAnswerToYourQuestion />
    </div>
  </>
  );
};

export default FAQ;