import React from "react";
import Title from "../Title";
import PopularQuestionsAndAnswersToThemAccardion from "./PopularQuestionsAndAnswersToThemAccardion";
import { PopularQuestionsAndAnswersToThemData } from "./PopularQuestionsAndAnswersToThemAccardion/PopularQuestionsAndAnswersToThemData";
import styles from "./style.module.css";


const PopularQuestionsAndAnswersToThem = ({ title }) => {
  return (
    <div className={`${styles.PopularQuestionsAndAnswersToThem} px-4`}>
      <Title title={title} />
      <div className="flex justify-center">
        <div className="w-full md:w-1/2">
          <PopularQuestionsAndAnswersToThemAccardion accr={PopularQuestionsAndAnswersToThemData} />
        </div>
      </div>
    </div>
  );
};

export default PopularQuestionsAndAnswersToThem;