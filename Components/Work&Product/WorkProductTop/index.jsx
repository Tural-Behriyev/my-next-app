import React from "react";
import WorkProductTopLeft from "./WorkProductTopLeft";
import WorkProductImage from "../WorkProductImage";

const WorkProductTop = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
      <WorkProductTopLeft />
      <WorkProductImage />
    </div>
  );
};

export default WorkProductTop;
