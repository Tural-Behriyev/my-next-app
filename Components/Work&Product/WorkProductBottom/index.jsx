import React from "react";
import WorkProductImage from "../WorkProductImage";
import WorkProductBottomRight from "./WorkProductBottomRight";

const WorkProductBottom = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
      <WorkProductImage />
      <WorkProductBottomRight />
    </div>
  );
};

export default WorkProductBottom;