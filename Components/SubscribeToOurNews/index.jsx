import React from "react";
import Title from "../Title";
import SubscribeToOurNewsInput from "./SubscribeToOurNewsInput";

const SubscribeToOurNews = ({ title }) => {
  return (
    <div className="container mx-auto SubscribeToOurNews text-center">
      <Title title={title} />
      <p className="text-lg">Введи свой электронный адрес и будь в курсе всех обновлений</p>
        <SubscribeToOurNewsInput />
    </div>
  );
};

export default SubscribeToOurNews; 