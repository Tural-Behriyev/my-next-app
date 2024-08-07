import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <div className="title pt-12 pb-7">
        <h1 className="font-medium text-center text-4xl">{title}</h1>
      </div>
    </div>
  );
};

export default Title;