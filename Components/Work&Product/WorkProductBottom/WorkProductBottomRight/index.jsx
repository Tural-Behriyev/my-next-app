import React from 'react'
import { WorkProductBottomRightData } from './WorkProductBottomRightData';
import WorkProductBottomRightList from './WorkProductBottomRightList';
import styles from "./style.module.css";



const WorkProductBottomRight = () => {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-start p-8 ${styles.WorkProductBottomRight}`}>
      <div className="">
        <h2 className="text-2xl font-bold mb-4 text-4xl">Наш продукт это:</h2>
        <WorkProductBottomRightList data={WorkProductBottomRightData} />
        <button className="text-sm py-3 px-7 my-3">Зарегистрироваться</button>
      </div>
    </div>
  );
}

export default WorkProductBottomRight