import React from 'react'
import WorkProductTopLeftList from './WorkProductTopLeftList';
import { WorkProductTopLeftData } from './WorkProductTopLeftData';


const WorkProductTopLeft = () => {
  return (
      <div className="flex flex-col md:flex-row justify-between items-start p-8">
        <div className="">
          <h2 className="text-2xl font-bold mb-4 text-4xl">Комфорт в работе</h2>
          <WorkProductTopLeftList data={WorkProductTopLeftData} />
          <button className=" text-white text-sm py-3 px-7 my-3 bg-transparent border-">Узнать больше</button>
        </div>
      </div>
  );
}

export default WorkProductTopLeft