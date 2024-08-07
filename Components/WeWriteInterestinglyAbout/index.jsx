import React from 'react'
import Title from "../Title";
import styles from "./style.module.css";
import WeWriteInterestinglyAboutCard from './WeWriteInterestinglyAboutCard';
import WeWriteInterestinglyAboutCardData from './WeWriteInterestinglyAboutCard/WeWriteInterestinglyAboutCardData';

const WeWriteInterestinglyAbout = ({title}) => {
  return (
    <div className={`${styles.WeWriteInterestinglyAbout}`}>
      <Title title={title} />
      <div className="max-w-7xl mx-auto pb-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WeWriteInterestinglyAboutCardData.map((card) => (
            <WeWriteInterestinglyAboutCard key={card.id} date={card.date} CardTitle={card.CardTitle} image={card.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeWriteInterestinglyAbout